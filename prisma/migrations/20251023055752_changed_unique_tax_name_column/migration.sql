/*
  Warnings:

  - A unique constraint covering the columns `[percentage]` on the table `Tax` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Tax_taxName_key";

-- CreateIndex
CREATE UNIQUE INDEX "Tax_percentage_key" ON "Tax"("percentage");
