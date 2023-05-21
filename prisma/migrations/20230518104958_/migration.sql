/*
  Warnings:

  - You are about to drop the column `source` on the `Version` table. All the data in the column will be lost.
  - Added the required column `source` to the `Extension` table without a default value. This is not possible if the table is not empty.
  - Added the required column `commit` to the `Version` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Extension" ADD COLUMN     "source" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Version" DROP COLUMN "source",
ADD COLUMN     "commit" TEXT NOT NULL,
ADD COLUMN     "link" TEXT;
