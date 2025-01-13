/*
  Warnings:

  - You are about to drop the column `preview` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `preview_mobile` on the `Project` table. All the data in the column will be lost.
  - Added the required column `git_link` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "preview",
DROP COLUMN "preview_mobile",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "git_link" TEXT NOT NULL,
ADD COLUMN     "img_desktop" TEXT,
ADD COLUMN     "img_laptop" TEXT,
ADD COLUMN     "img_mobile" TEXT;
