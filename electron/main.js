import { app, BrowserWindow, ipcMain, Menu } from 'electron';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import chokidar from 'chokidar';
import { bulkUpload, createMedicine, getMedicine, getMedicineOnTyping } from '../Database/medicine.js';
import { addPurchase, getPurchase, getStocksOnTyping } from '../Database/purchase.js';
import { addSupplier, getSupplierOnTyping, getSuppliers } from '../Database/supplier.js';
import { addTax, getAllTaxes, getTaxes } from '../Database/tax.js';
import { addSales, returnSales } from '../Database/sales.js';

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
  // Menu.setApplicationMenu(null);


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


// ------------medicine------------------------
ipcMain.handle('get-medicine', async (event, data) => {
  return await getMedicine(data);
});
ipcMain.handle('add-medicine', async (event, data) => {
  return await createMedicine(data);
})
ipcMain.handle('getMedicineOnTyping', async (event, search) => {
  return await getMedicineOnTyping(search)
})
ipcMain.handle('bulkUpload', async (event, data) => {
  return await bulkUpload(data)
})

// ------------purchase------------------------
ipcMain.handle('add-purchase', async (event, data) => {
  return await addPurchase(data)
})
ipcMain.handle('getPurchase', async (event, data) => {
  return await getPurchase(data)
})
ipcMain.handle('getStocksOnTyping', async (event, data) => {

  return await getStocksOnTyping(data)
})

// ------------supplier------------------------
// add supplier
ipcMain.handle('addSupplier', async (event, data) => {
  return await addSupplier(data)
})
ipcMain.handle('getSupplierOnTyping', async (event, data) => {
  return await getSupplierOnTyping(data)
})
ipcMain.handle('getSuppliers', async (event, data) => {
  return await getSuppliers(data)
})



// ------------tax------------------------
// add Tax
ipcMain.handle('addTax', async (event, data) => {
  return await addTax(data)
})
ipcMain.handle('getTaxes', async (event, data) => {
  return await getTaxes(data)
})
ipcMain.handle('getAllTaxes', async () => {
  return await getAllTaxes()
})

// ------------sales------------------------
ipcMain.handle('addSales', async (event, data) => {
  return await addSales(data)
})
ipcMain.handle('returnSales', async (event, data) => {
  return await returnSales(data)
})