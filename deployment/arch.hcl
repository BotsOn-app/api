job "botsonapp" {
  datacenters = ["dc1"]
  type        = "service"

  update {
    stagger      = "30s"
    max_parallel = 1
  }

  group "database" {
    count = 1

    network {
      mode = "bridge"
    }

    service {
      name = "database"
      port = "5432"

      connect {
        sidecar_service {}
      }
    }

    task "postgres" {
      driver = "docker"

      config {
        image = "postgres"
      }

      env {
        POSTGRES_USER     = "root"
        POSTGRES_PASSWORD = "supersecret"
      }

      resources {
        cpu    = 1000
        memory = 1024
      }
    }
  }
  group "queue" {
    network {
      mode = "bridge"

      port "amqp" {
        static = "5672"
        to     = "5672"
      }
      port "management" {
        static = "15672"
        to     = "15672"
      }
    }
    task "queue" {
      driver = "docker"

      resources {
        cpu    = 1000
        memory = 2048
      }

      config {
        image = "rabbitmq:3-management-alpine"
      }
    }
  }
  group "cdn" {
    volume "minio" {
      type      = "host"
      read_only = false
      source    = "minio"
    }

    network {
      mode = "bridge"

      port "http" {
        static = 9000
        to     = 9000
      }
      port "console" {
        static = 9001
        to     = 9001
      }
    }

    service {
      name = "cdn"
      port = "http"
    }

    task "cdn" {
      driver = "docker"

      resources {
        cpu    = 1000
        memory = 2048
      }

      volume_mount {
        volume      = "minio"
        destination = "/data"
        read_only   = false
      }


      env {
        MINIO_ACCESS_KEY  = "miniominio"
        MINIO_SECRET_KEY  = "miniominio13"
        MINIO_REGION_NAME = "us-east-1"
      }
      config {
        image   = "minio/minio"
        command = "server"
        args    = [
          "--console-address",
          ":9001",
          "/data"
        ]
      }
    }
  }
  group "api" {
    network {
      mode = "bridge"

      port "http" {
        to = 8000
      }
    }

    service {
      name = "api"
      port = "http"

      tags = [
        "traefik.enable=true",
        "traefik.http.routers.botson-api.entrypoints=https",
        "traefik.http.routers.botson-api.rule=Host(`botson.fr`)",
        "traefik.http.routers.botson-api.tls=true",
        "traefik.http.routers.botson-api.tls.certresolver=le-resolver",
      ]

    }
    service {
      connect {
        sidecar_service {
          proxy {
            upstreams {
              destination_name = "database"
              local_bind_port  = 5432
            }
          }
        }
      }
    }

    task "api" {
      driver = "docker"

      env {
        DATABASE_URL = "postgresql://root:supersecret@localhost:5432/api?schema=public"
      }

      config {
        image = "api:local"
      }
    }
  }
}
