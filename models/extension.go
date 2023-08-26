package models

import "github.com/google/uuid"

type Extension struct {
	ID          uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4()" json:"id;primaryKey"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	Author      User      `gorm:"foreignKey:UserRefer"`
	Versions    Version   `gorm:"foreignKey:VersionRefer" json:"version"`
	Downloads   uint      `json:"downloads"`
	BannerUrl   string    `json:"bannerUrl"`
	Verified    bool      `json:"verified"`
	Source      string    `json:"source"`
}
