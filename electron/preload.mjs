import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {

  // medicine
  addMedicine: (data) => ipcRenderer.invoke('add-medicine', data),
  getMedicine: (data) => ipcRenderer.invoke('get-medicine', data),
  getMedicineOnTyping: (search) => ipcRenderer.invoke('getMedicineOnTyping', search),

  // purchase
  addPurchase: (data) => ipcRenderer.invoke('add-purchase', data),
  getPurchase: (data) => ipcRenderer.invoke('getPurchase', data),


  // suppliers
  addSupplier: (data) => ipcRenderer.invoke('addSupplier', data),
  getSuppliersOnTyping: (data) => ipcRenderer.invoke('getSupplierOnTyping', data),
  getSuppliers: (data) => ipcRenderer.invoke('getSuppliers', data),


  // tax
  addTax: (data) => ipcRenderer.invoke('addTax', data),
  getTaxes: (data) => ipcRenderer.invoke('getTaxes', data),
  getAllTaxes: () => ipcRenderer.invoke('getAllTaxes'),

  // add sales
  addSales: (data) => ipcRenderer.invoke('addSales', data),

});
