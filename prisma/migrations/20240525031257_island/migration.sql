/*
  Warnings:

  - You are about to drop the column `shopId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `collectionId` on the `Shop` table. All the data in the column will be lost.
  - Added the required column `shop_id` to the `Product` table without a default value. This is not possible if the table is not empty.
  - The required column `island_id` was added to the `Shop` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Island" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 1
);
INSERT INTO "new_Island" ("id", "name") SELECT "id", "name" FROM "Island";
DROP TABLE "Island";
ALTER TABLE "new_Island" RENAME TO "Island";
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shop_id" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "imageId" TEXT NOT NULL
);
INSERT INTO "new_Product" ("id", "imageId", "price", "type") SELECT "id", "imageId", "price", "type" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE TABLE "new_Shop" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "island_id" TEXT NOT NULL,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Shop" ("id", "name") SELECT "id", "name" FROM "Shop";
DROP TABLE "Shop";
ALTER TABLE "new_Shop" RENAME TO "Shop";
PRAGMA foreign_key_check("Island");
PRAGMA foreign_key_check("Product");
PRAGMA foreign_key_check("Shop");
PRAGMA foreign_keys=ON;
