/*
  Warnings:

  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shop_id" TEXT NOT NULL,
    "island_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "product_code" INTEGER NOT NULL,
    "image_binary_hash" TEXT NOT NULL
);
INSERT INTO "new_Product" ("id", "image_binary_hash", "island_id", "price", "product_code", "shop_id", "type") SELECT "id", "image_binary_hash", "island_id", "price", "product_code", "shop_id", "type" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check("Product");
PRAGMA foreign_keys=ON;
