/*
  Warnings:

  - Added the required column `publicAccessToken` to the `Auth` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Auth" ADD COLUMN     "publicAccessToken" VARCHAR(55) NOT NULL;
