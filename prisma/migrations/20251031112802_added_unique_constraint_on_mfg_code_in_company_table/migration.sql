/*
  Warnings:

  - A unique constraint covering the columns `[mfgCode]` on the table `Company` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Company_mfgCode_key" ON "Company"("mfgCode");
