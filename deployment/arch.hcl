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
  group "cdn" {
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

      env {
        MINIO_ACCESS_KEY  = "miniominio"
        MINIO_SECRET_KEY  = "miniominio13"
        MINIO_REGION_NAME = "us-east-1"
      }
      config {
        image   = "minio/minio"
        command = "server --console-address ':9001' /data"
      }
    }
  }
  group "api" {
    network {
      mode = "bridge"

      port "http" {
        static = 8000
        to     = 8000
      }
    }

    service {
      name = "api"
      port = "http"

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
