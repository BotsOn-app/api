package routes

import (
	"github.com/BotsOn-app/api/db"
	"github.com/BotsOn-app/api/models"
	"github.com/gofiber/fiber/v2"
)

func CreateUser(ctx *fiber.Ctx) error {
	user := new(models.User)
	if err := ctx.BodyParser(user); err != nil {
		return ctx.Status(500).SendString(err.Error())
	}
	db.DB.Save(&user)
	return ctx.JSON(&user)
}

func GetUser(ctx *fiber.Ctx) error {
	id := ctx.Params("id")
	var user models.User
	db.DB.Find(&user, id)
	return ctx.JSON(&user)
}

func GetAllUsers(ctx *fiber.Ctx) error {
	var users []models.User
	db.DB.Find(&users)
	return ctx.JSON(&users)
}
