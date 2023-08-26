package db

import (
	"fmt"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type Config struct {
	Host     string
	Port     string
	Password string
	DBName   string
}

type DBInstance struct {
	DB *gorm.DB
}

var Database DBInstance

func ConnectDB(config *Config) {
	dsn := fmt.Sprintf("Connected to PostgreSQL DB \"%s\" at %s:%s with password %s", config.DBName, config.Host, config.Port, config.Password)
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatalf("Failed to connect to the database...\n", err.Error())
	}

	log.Println("Connected to DB!")
	log.Println("Running Migrations...")
	Database = DBInstance{DB: db}
}
