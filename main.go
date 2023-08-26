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

	db, err := db.NewConnection(&db.Config{
		Host:     os.Getenv("HOST"),
		Port:     os.Getenv("PORT"),
		Password: os.Getenv("PWD"),
		DBName:   os.Getenv("DBNAME"),
	})

	app := fiber.New()

	app.Listen(":8000")
}
