/*
  Warnings:

  - Added the required column `itemCode` to the `medicine` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_medicine" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "itemCode" TEXT NOT NULL,
    "saltName" TEXT NOT NULL,
    "brandName" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "packageQuantity" INTEGER NOT NULL,
    "productForm" TEXT NOT NULL,
    "minQuantityAlert" INTEGER NOT NULL,
    "storageCondition" TEXT NOT NULL,
    "boxNumber" INTEGER,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_medicine" ("boxNumber", "brandName", "createdAt", "description", "id", "manufacturer", "minQuantityAlert", "packageQuantity", "productForm", "saltName", "storageCondition", "updatedAt") SELECT "boxNumber", "brandName", "createdAt", "description", "id", "manufacturer", "minQuantityAlert", "packageQuantity", "productForm", "saltName", "storageCondition", "updatedAt" FROM "medicine";
DROP TABLE "medicine";
ALTER TABLE "new_medicine" RENAME TO "medicine";
CREATE UNIQUE INDEX "medicine_saltName_key" ON "medicine"("saltName");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
