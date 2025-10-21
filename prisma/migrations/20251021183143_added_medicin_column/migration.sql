-- CreateTable
CREATE TABLE "medicine" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "saltName" TEXT NOT NULL,
    "brandName" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "packageQuantity" INTEGER NOT NULL,
    "productForm" TEXT NOT NULL,
    "minQuantityAlert" INTEGER NOT NULL,
    "storageCondition" TEXT NOT NULL,
    "boxNumber" TEXT,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "medicine_saltName_key" ON "medicine"("saltName");
