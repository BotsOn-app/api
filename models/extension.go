package models

import "github.com/google/uuid"

type Extension struct {
	ID          uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primaryKey" json:"id"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	Author      User      `json:"author" gorm:"foreignKey:AuthorRefer"`
	AuthorRefer string
	Versions    Version `json:"version"`
	VersionRefer
	Downloads uint   `json:"downloads"`
	BannerUrl string `json:"bannerUrl"`
	Verified  bool   `json:"verified"`
	Source    string `json:"source"`
}
