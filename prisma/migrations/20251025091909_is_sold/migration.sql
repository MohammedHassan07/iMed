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
    "sellingPricePerMedicine" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "profit" REAL NOT NULL,
    "tax" REAL NOT NULL,
    "total" REAL NOT NULL,
    "totalMedicines" REAL NOT NULL,
    "remainingMedicines" REAL NOT NULL,
    "scheme" REAL NOT NULL,
    "isSold" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "PurchaseItem_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "medicine" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "PurchaseItem_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "Purchase" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_PurchaseItem" ("batchNumber", "createdAt", "expiryDate", "id", "medicineId", "profit", "purchaseId", "purchasePrice", "quantity", "remainingMedicines", "scheme", "sellingPrice", "sellingPricePerMedicine", "tax", "total", "totalMedicines", "updatedAt") SELECT "batchNumber", "createdAt", "expiryDate", "id", "medicineId", "profit", "purchaseId", "purchasePrice", "quantity", "remainingMedicines", "scheme", "sellingPrice", "sellingPricePerMedicine", "tax", "total", "totalMedicines", "updatedAt" FROM "PurchaseItem";
DROP TABLE "PurchaseItem";
ALTER TABLE "new_PurchaseItem" RENAME TO "PurchaseItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
