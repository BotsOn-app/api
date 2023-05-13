job "botsonapp" {
  datacenters = ["dc1"]
  type = "service"

  update {
    stagger      = "30s"
    max_parallel = 1
  }

  group "database" {
    count = 1

    task "postgres" {
      driver = "docker"

      config {
        image = "postgres"
        network_mode = "host"
        port_map {
          db = 5432
        }
      }

      env {
        POSTGRES_USER="root"
        POSTGRES_PASSWORD = "supersecret"
      }

      resources {
        cpu = 1000
        memory = 1024
        network {
          port  "db"  {
            static = 5432
          }
        }
      }

      service {
        name = "postgres"
        port = "db"
        check {
          name     = "alive"
          type     = "tcp"
          interval = "10s"
          timeout  = "2s"
        }
      }
    }
  }
}
