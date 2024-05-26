/*
  Warnings:

  - You are about to drop the column `name` on the `Shop` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Shop" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "island_id" TEXT NOT NULL,
    "type" INTEGER NOT NULL DEFAULT 1
);
INSERT INTO "new_Shop" ("id", "island_id") SELECT "id", "island_id" FROM "Shop";
DROP TABLE "Shop";
ALTER TABLE "new_Shop" RENAME TO "Shop";
PRAGMA foreign_key_check("Shop");
PRAGMA foreign_keys=ON;
