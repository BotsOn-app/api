package models

type Version struct {
	Semver       string
	Commit       string
	Active       string
	Link         string
	Checksum     string
	Extension    Extension ``
	ExtensionRef string
}
