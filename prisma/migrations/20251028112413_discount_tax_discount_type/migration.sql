-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Purchase" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "supplierId" INTEGER NOT NULL,
    "purchaseDate" DATETIME NOT NULL,
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
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
