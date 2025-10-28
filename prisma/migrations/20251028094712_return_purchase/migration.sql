/*
  Warnings:

  - Added the required column `packageQuantity` to the `ReturnedPurchasedItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `ReturnedPurchasedItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `remainingMedicines` to the `ReturnedPurchasedItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scheme` to the `ReturnedPurchasedItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellingPrice` to the `ReturnedPurchasedItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellingPricePerMedicine` to the `ReturnedPurchasedItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalMedicines` to the `ReturnedPurchasedItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ReturnedPurchasedItem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ReturnedPurchasedItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "purchaseId" INTEGER NOT NULL,
    "medicineId" INTEGER NOT NULL,
    "batchNumber" TEXT NOT NULL,
    "expiryDate" DATETIME NOT NULL,
    "returnQty" INTEGER NOT NULL,
    "purchasePrice" REAL NOT NULL,
    "reason" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sellingPrice" REAL NOT NULL,
    "sellingPricePerMedicine" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "packageQuantity" REAL NOT NULL,
    "totalMedicines" REAL NOT NULL,
    "remainingMedicines" REAL NOT NULL,
    "scheme" REAL NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ReturnedPurchasedItem_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "Purchase" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ReturnedPurchasedItem_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "medicine" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ReturnedPurchasedItem" ("batchNumber", "createdAt", "expiryDate", "id", "medicineId", "purchaseId", "purchasePrice", "reason", "returnQty") SELECT "batchNumber", "createdAt", "expiryDate", "id", "medicineId", "purchaseId", "purchasePrice", "reason", "returnQty" FROM "ReturnedPurchasedItem";
DROP TABLE "ReturnedPurchasedItem";
ALTER TABLE "new_ReturnedPurchasedItem" RENAME TO "ReturnedPurchasedItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
