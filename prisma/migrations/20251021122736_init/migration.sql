-- CreateTable
CREATE TABLE "medicine" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "saltName" TEXT NOT NULL,
    "brandName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "medicine_saltName_key" ON "medicine"("saltName");
