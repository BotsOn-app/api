package models

type User struct {
	ID         string      `gorm:"primaryKey" json:"id"`
	Name       string      `json:"name"`
	AvatarUrl  string      `json:"avatarUrl"`
	Extensions []Extension `json:"extensions"`
}
