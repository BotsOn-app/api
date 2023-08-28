package db

import (
	"fmt"
	"log"

	"github.com/BotsOn-app/api/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

type Config struct {
	Host     string
	Port     string
	Password string
	User     string
	DBName   string
}

func ConnectDB(config *Config) {

	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable", config.Host, config.User, config.Password, config.DBName, config.Port)
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatal("Failed to connect to the database...\n", err.Error())
	}

	log.Printf("Connected to PostgreSQL DB \"%s\" at %s:%s with password %s\n", config.DBName, config.Host, config.Port, config.Password)
	log.Println("Running Migrations...")
	db.AutoMigrate(&models.User{}, &models.Extension{}, &models.Version{})

	DB = db
}
