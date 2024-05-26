-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shopId" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "imageId" TEXT NOT NULL
);
