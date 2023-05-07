-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(128) NOT NULL,
    "avatarUrl" VARCHAR(255) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Banner" (
    "id" SERIAL NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Banner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Extensions" (
    "id" SERIAL NOT NULL,
    "authorId" INTEGER NOT NULL,
    "version" VARCHAR(5) NOT NULL,
    "downloads" INTEGER NOT NULL,
    "banner" JSONB NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL,

    CONSTRAINT "Extensions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "text" VARCHAR(55) NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Auth" (
    "id" SERIAL NOT NULL,
    "publicAccessToken" VARCHAR(55) NOT NULL,
    "accessToken" VARCHAR(55) NOT NULL,
    "refreshToken" VARCHAR(55) NOT NULL,
    "expiresIn" BIGINT NOT NULL,
    "userId" VARCHAR(55) NOT NULL,

    CONSTRAINT "Auth_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Extensions" ADD CONSTRAINT "Extensions_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
