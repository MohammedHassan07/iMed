-- CreateTable
CREATE TABLE "Sales" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "patientId" INTEGER,
    "patientName" TEXT NOT NULL,
    "patientContact" TEXT,
    "patientAddress" TEXT,
    "subTotal" REAL NOT NULL DEFAULT 0,
    "netTotal" REAL NOT NULL DEFAULT 0,
    "discount" REAL NOT NULL DEFAULT 0,
    "discountType" TEXT NOT NULL DEFAULT 'percentage',
    "deliveryCharge" REAL NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "SalesItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "saleId" INTEGER NOT NULL,
    "purchaseId" INTEGER,
    "itemId" INTEGER NOT NULL,
    "batchNumber" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "sellingPrice" REAL NOT NULL,
    "totalAmount" REAL NOT NULL,
    CONSTRAINT "SalesItem_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sales" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
