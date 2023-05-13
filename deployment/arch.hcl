job "botsonapp" {
  datacenters = ["dc1"]
  type = "service"

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
        POSTGRES_USER="root"
        POSTGRES_PASSWORD = "supersecret"
      }

      resources {
        cpu = 1000
        memory = 1024
      }
    }
  }
  group "services" {
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
        image = "api:latest"
      }
    }
  }
}
