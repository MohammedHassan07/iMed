/*
  Warnings:

  - Added the required column `purchaseDate` to the `PurchaseItem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Purchase" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "supplierId" INTEGER NOT NULL,
    "purchaseDate" DATETIME,
    "purchaseNumber" TEXT NOT NULL,
    "purchaseType" TEXT NOT NULL DEFAULT 'PURCHASE',
    "notes" TEXT,
    "discountType" TEXT DEFAULT 'percentage',
    "discount" REAL DEFAULT 0,
    "subTotal" REAL NOT NULL DEFAULT 0,
    "netTotal" REAL NOT NULL DEFAULT 0,
    "tax" REAL DEFAULT 0,
    "total" REAL NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "paymentId" INTEGER NOT NULL,
    CONSTRAINT "Purchase_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "payment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Purchase" ("createdAt", "discount", "discountType", "id", "netTotal", "notes", "paymentId", "purchaseDate", "purchaseNumber", "purchaseType", "subTotal", "supplierId", "tax", "total", "updatedAt") SELECT "createdAt", "discount", "discountType", "id", "netTotal", "notes", "paymentId", "purchaseDate", "purchaseNumber", "purchaseType", "subTotal", "supplierId", "tax", "total", "updatedAt" FROM "Purchase";
DROP TABLE "Purchase";
ALTER TABLE "new_Purchase" RENAME TO "Purchase";
CREATE TABLE "new_PurchaseItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "purchaseId" INTEGER NOT NULL,
    "medicineId" INTEGER NOT NULL,
    "batchNumber" TEXT NOT NULL,
    "expiryDate" DATETIME NOT NULL,
    "purchasePrice" REAL NOT NULL,
    "purchaseDate" DATETIME NOT NULL,
    "sellingPrice" REAL NOT NULL,
    "sellingPricePerMedicine" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "packageQuantity" REAL NOT NULL,
    "profit" REAL NOT NULL,
    "tax" REAL NOT NULL,
    "total" REAL NOT NULL,
    "totalMedicines" REAL NOT NULL,
    "remainingMedicines" REAL NOT NULL,
    "scheme" REAL NOT NULL,
    "isSold" BOOLEAN NOT NULL DEFAULT false,
    "isExpired" BOOLEAN NOT NULL DEFAULT false,
    "nearToExpire" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "PurchaseItem_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "Purchase" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "PurchaseItem_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "medicine" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_PurchaseItem" ("batchNumber", "createdAt", "expiryDate", "id", "isExpired", "isSold", "medicineId", "nearToExpire", "packageQuantity", "profit", "purchaseId", "purchasePrice", "quantity", "remainingMedicines", "scheme", "sellingPrice", "sellingPricePerMedicine", "tax", "total", "totalMedicines", "updatedAt") SELECT "batchNumber", "createdAt", "expiryDate", "id", "isExpired", "isSold", "medicineId", "nearToExpire", "packageQuantity", "profit", "purchaseId", "purchasePrice", "quantity", "remainingMedicines", "scheme", "sellingPrice", "sellingPricePerMedicine", "tax", "total", "totalMedicines", "updatedAt" FROM "PurchaseItem";
DROP TABLE "PurchaseItem";
ALTER TABLE "new_PurchaseItem" RENAME TO "PurchaseItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
