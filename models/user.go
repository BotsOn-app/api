package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Name       string      `json:"name"`
	AvatarUrl  string      `json:"avatarUrl"`
	Extensions []Extension `json:"extensions"`
}
