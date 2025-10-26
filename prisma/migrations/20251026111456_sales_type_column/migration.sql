/*
  Warnings:

  - Added the required column `salesType` to the `Sales` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sales" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "salesNumber" TEXT NOT NULL,
    "patientId" INTEGER,
    "patientName" TEXT,
    "patientContact" TEXT,
    "patientAddress" TEXT,
    "subTotal" REAL NOT NULL DEFAULT 0,
    "netTotal" REAL NOT NULL DEFAULT 0,
    "discount" REAL NOT NULL DEFAULT 0,
    "discountType" TEXT NOT NULL DEFAULT 'percentage',
    "deliveryCharge" REAL NOT NULL DEFAULT 0,
    "salesType" TEXT NOT NULL
);
INSERT INTO "new_Sales" ("createdAt", "deliveryCharge", "discount", "discountType", "id", "netTotal", "patientAddress", "patientContact", "patientId", "patientName", "salesNumber", "subTotal", "updatedAt") SELECT "createdAt", "deliveryCharge", "discount", "discountType", "id", "netTotal", "patientAddress", "patientContact", "patientId", "patientName", "salesNumber", "subTotal", "updatedAt" FROM "Sales";
DROP TABLE "Sales";
ALTER TABLE "new_Sales" RENAME TO "Sales";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
