package models

import (
	"gorm.io/gorm"
)

type Extension struct {
	gorm.Model
	Name        string `json:"name"`
	Description string `json:"description"`
	UserID      uint
	Versions    []Version `json:"version"`
	Downloads   uint      `json:"downloads"`
	BannerUrl   string    `json:"bannerUrl"`
	Verified    bool      `json:"verified"`
	Source      string    `json:"source"`
}
