/*
  Warnings:

  - You are about to drop the column `remainingMedicines` on the `ReturnedPurchasedItem` table. All the data in the column will be lost.
  - You are about to drop the column `returnQty` on the `ReturnedPurchasedItem` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ReturnedPurchasedItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "purchaseId" INTEGER NOT NULL,
    "parentPurchaseId" INTEGER NOT NULL,
    "medicineId" INTEGER NOT NULL,
    "batchNumber" TEXT NOT NULL,
    "expiryDate" DATETIME NOT NULL,
    "purchasePrice" REAL NOT NULL,
    "reason" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sellingPrice" REAL NOT NULL,
    "sellingPricePerMedicine" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "packageQuantity" REAL NOT NULL,
    "totalMedicines" REAL NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ReturnedPurchasedItem_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "Purchase" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ReturnedPurchasedItem_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "medicine" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ReturnedPurchasedItem" ("batchNumber", "createdAt", "expiryDate", "id", "medicineId", "packageQuantity", "parentPurchaseId", "purchaseId", "purchasePrice", "quantity", "reason", "sellingPrice", "sellingPricePerMedicine", "totalMedicines", "updatedAt") SELECT "batchNumber", "createdAt", "expiryDate", "id", "medicineId", "packageQuantity", "parentPurchaseId", "purchaseId", "purchasePrice", "quantity", "reason", "sellingPrice", "sellingPricePerMedicine", "totalMedicines", "updatedAt" FROM "ReturnedPurchasedItem";
DROP TABLE "ReturnedPurchasedItem";
ALTER TABLE "new_ReturnedPurchasedItem" RENAME TO "ReturnedPurchasedItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
