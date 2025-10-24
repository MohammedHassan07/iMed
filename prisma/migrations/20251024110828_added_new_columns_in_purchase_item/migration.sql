/*
  Warnings:

  - Added the required column `remiaingMedicine` to the `PurchaseItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scheme` to the `PurchaseItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalMedicine` to the `PurchaseItem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PurchaseItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "purchaseId" INTEGER NOT NULL,
    "medicineId" INTEGER NOT NULL,
    "batchNumber" TEXT NOT NULL,
    "expiryDate" DATETIME NOT NULL,
    "purchasePrice" REAL NOT NULL,
    "sellingPrice" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "profit" REAL NOT NULL,
    "tax" REAL NOT NULL,
    "total" REAL NOT NULL,
    "totalMedicine" REAL NOT NULL,
    "remiaingMedicine" REAL NOT NULL,
    "scheme" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "PurchaseItem_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "Purchase" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "PurchaseItem_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "medicine" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_PurchaseItem" ("batchNumber", "createdAt", "expiryDate", "id", "medicineId", "profit", "purchaseId", "purchasePrice", "quantity", "sellingPrice", "tax", "total", "updatedAt") SELECT "batchNumber", "createdAt", "expiryDate", "id", "medicineId", "profit", "purchaseId", "purchasePrice", "quantity", "sellingPrice", "tax", "total", "updatedAt" FROM "PurchaseItem";
DROP TABLE "PurchaseItem";
ALTER TABLE "new_PurchaseItem" RENAME TO "PurchaseItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
