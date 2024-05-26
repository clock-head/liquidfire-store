/*
  Warnings:

  - You are about to drop the column `imageId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `temple_id` on the `Product` table. All the data in the column will be lost.
  - Added the required column `image_binary_hash` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `island_id` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_code` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shop_id` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shop_id" TEXT NOT NULL,
    "island_id" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "product_code" INTEGER NOT NULL,
    "image_binary_hash" TEXT NOT NULL
);
INSERT INTO "new_Product" ("id", "price", "type") SELECT "id", "price", "type" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check("Product");
PRAGMA foreign_keys=ON;
