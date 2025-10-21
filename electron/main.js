import { app, BrowserWindow, ipcMain, Menu } from 'electron';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import chokidar from 'chokidar';
import { createMedicine, getMedicine } from '../Database/medicine.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let mainWindow;

function createWindow() {

  mainWindow = new BrowserWindow({
    width: 2000,
    height: 1700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'), 
      sandbox: false,
      nodeIntegration: false,
      contextIsolation: true

    },
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

app.whenReady().then(() => {
  createWindow();
  Menu.setApplicationMenu(null);


  if (process.env.NODE_ENV === 'development') {
    const watcher = chokidar.watch([path.join(__dirname, 'main.js'), path.join(__dirname, 'preload.js')]);
    watcher.on('change', () => {
      console.log('🔁 Electron main/preload changed, reloading app...');
      app.relaunch();
      app.exit();
    });
  }


  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.handle('create-medicine', async (event, data) => {
  return await createMedicine(data);
});

ipcMain.handle('get-medicine', async () => {
  return await getMedicine();
});

ipcMain.handle('add-medicine', async (event, data) => {
   return await createMedicine(data);
})
