package models

import "gorm.io/gorm"

type Version struct {
	gorm.Model
	Semver      string
	Commit      string
	Active      string
	Link        string
	Checksum    string
	ExtensionID uint
}
