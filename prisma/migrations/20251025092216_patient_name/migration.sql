-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sales" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "patientId" INTEGER,
    "patientName" TEXT,
    "patientContact" TEXT,
    "patientAddress" TEXT,
    "subTotal" REAL NOT NULL DEFAULT 0,
    "netTotal" REAL NOT NULL DEFAULT 0,
    "discount" REAL NOT NULL DEFAULT 0,
    "discountType" TEXT NOT NULL DEFAULT 'percentage',
    "deliveryCharge" REAL NOT NULL DEFAULT 0
);
INSERT INTO "new_Sales" ("createdAt", "deliveryCharge", "discount", "discountType", "id", "netTotal", "patientAddress", "patientContact", "patientId", "patientName", "subTotal", "updatedAt") SELECT "createdAt", "deliveryCharge", "discount", "discountType", "id", "netTotal", "patientAddress", "patientContact", "patientId", "patientName", "subTotal", "updatedAt" FROM "Sales";
DROP TABLE "Sales";
ALTER TABLE "new_Sales" RENAME TO "Sales";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
