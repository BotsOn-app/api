/*
  Warnings:

  - The primary key for the `Version` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Version` table. All the data in the column will be lost.
  - Added the required column `active` to the `Version` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Version" DROP CONSTRAINT "Version_pkey",
DROP COLUMN "id",
ADD COLUMN     "active" BOOLEAN NOT NULL,
ALTER COLUMN "checksum" DROP NOT NULL,
ADD CONSTRAINT "Version_pkey" PRIMARY KEY ("semver", "extensionsId");
