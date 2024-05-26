/*
  Warnings:

  - You are about to drop the `Temple` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Temple";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Shop" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "island_id" TEXT NOT NULL,
    "name" TEXT NOT NULL
);
