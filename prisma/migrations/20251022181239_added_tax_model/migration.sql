-- CreateTable
CREATE TABLE "Tax" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "taxName" TEXT NOT NULL,
    "percentage" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Tax_taxName_key" ON "Tax"("taxName");
