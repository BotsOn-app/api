/*
  Warnings:

  - The primary key for the `Extensions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `banner` on the `Extensions` table. All the data in the column will be lost.
  - You are about to drop the `Auth` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Banner` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bannerUrl` to the `Extensions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Extensions" DROP CONSTRAINT "Extensions_authorId_fkey";

-- AlterTable
ALTER TABLE "Extensions" DROP CONSTRAINT "Extensions_pkey",
DROP COLUMN "banner",
ADD COLUMN     "bannerUrl" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "authorId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Extensions_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Extensions_id_seq";

-- DropTable
DROP TABLE "Auth";

-- DropTable
DROP TABLE "Banner";

-- DropTable
DROP TABLE "Test";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatarUrl" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Extensions" ADD CONSTRAINT "Extensions_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
