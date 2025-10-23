-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tax" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "taxName" TEXT NOT NULL,
    "percentage" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Tax" ("createdAt", "id", "percentage", "taxName", "updatedAt") SELECT "createdAt", "id", "percentage", "taxName", "updatedAt" FROM "Tax";
DROP TABLE "Tax";
ALTER TABLE "new_Tax" RENAME TO "Tax";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
