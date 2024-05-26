/*
  Warnings:

  - You are about to drop the `Shop` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `shop_id` on the `Product` table. All the data in the column will be lost.
  - Added the required column `temple_id` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Shop";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Temple" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "island_id" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "temple_id" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "imageId" TEXT NOT NULL
);
INSERT INTO "new_Product" ("id", "imageId", "price", "type") SELECT "id", "imageId", "price", "type" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check("Product");
PRAGMA foreign_keys=ON;
