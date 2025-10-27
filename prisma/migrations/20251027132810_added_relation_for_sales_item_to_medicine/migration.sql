-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SalesItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "saleId" INTEGER NOT NULL,
    "purchaseItemId" INTEGER,
    "itemId" INTEGER NOT NULL,
    "batchNumber" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "sellingPrice" REAL NOT NULL,
    "totalAmount" REAL NOT NULL,
    CONSTRAINT "SalesItem_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sales" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "SalesItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "medicine" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SalesItem" ("batchNumber", "id", "itemId", "purchaseItemId", "quantity", "saleId", "sellingPrice", "totalAmount") SELECT "batchNumber", "id", "itemId", "purchaseItemId", "quantity", "saleId", "sellingPrice", "totalAmount" FROM "SalesItem";
DROP TABLE "SalesItem";
ALTER TABLE "new_SalesItem" RENAME TO "SalesItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
