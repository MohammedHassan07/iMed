import { app } from 'electron';
import path from 'path';
import fs from 'fs';
import { PrismaClient } from '../prisma/generated/prisma/index.js';

const userDataPath = app.getPath('userData');

const userDbPath = path.join(userDataPath, 'database.sqlite');

const appPath = app.isPackaged
  ? path.join(process.resourcesPath, 'app.asar.unpacked', 'assets', 'database.sqlite')
  : path.join(process.cwd(), 'assets', 'database.sqlite');

if (!fs.existsSync(userDbPath)) {
  try {
    fs.copyFileSync(appPath, userDbPath);
    // console.log('Database copied to userData folder:', userDbPath);
  } catch (err) {
    console.error('Failed to copy database:', err);
  }
} else {
  console.log('ℹ️ Database already exists at:', userDbPath);
}

process.env.DATABASE_URL = `file:${userDbPath}`;
const prisma = new PrismaClient();

export default prisma;
