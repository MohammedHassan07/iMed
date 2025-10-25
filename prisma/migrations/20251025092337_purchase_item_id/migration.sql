/*
  Warnings:

  - You are about to drop the column `purchaseId` on the `SalesItem` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SalesItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "saleId" INTEGER NOT NULL,
    "purchaseItemId" INTEGER,
    "itemId" INTEGER NOT NULL,
    "batchNumber" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "sellingPrice" REAL NOT NULL,
    "totalAmount" REAL NOT NULL,
    CONSTRAINT "SalesItem_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sales" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_SalesItem" ("batchNumber", "id", "itemId", "quantity", "saleId", "sellingPrice", "totalAmount") SELECT "batchNumber", "id", "itemId", "quantity", "saleId", "sellingPrice", "totalAmount" FROM "SalesItem";
DROP TABLE "SalesItem";
ALTER TABLE "new_SalesItem" RENAME TO "SalesItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
