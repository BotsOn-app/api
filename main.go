package main

import (
	"log"
	"os"

	"github.com/BotsOn-app/api/db"
	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()

	if err != nil {
		log.Fatalf("Couldn't load .env file.")
	}

	db.ConnectDB(&db.Config{
		Host:     os.Getenv("HOST"),
		Port:     os.Getenv("PORT"),
		Password: os.Getenv("POSTGRES_PASSWORD"),
		DBName:   os.Getenv("POSTGRES_DB"),
		User:     os.Getenv("POSTGRES_USER"),
	})

	app := fiber.New()

	app.Listen(":8000")
}
