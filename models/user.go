package models

type User struct {
	ID         string      `gorm:"type:uuid;default:uuid_generate_v4();primaryKey" json:"id"`
	Name       string      `json:"name"`
	AvatarUrl  string      `json:"avatarUrl"`
	Extensions []Extension `json:"extensions"`
}
