import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {

  // medicine
  addMedicine: (data) => ipcRenderer.invoke('add-medicine', data),
  getMedicine: (data) => ipcRenderer.invoke('get-medicine', data),
  getMedicineOnTyping: (search) => ipcRenderer.invoke('getMedicineOnTyping', search),

  // purchase
  addPurchase: (data) => ipcRenderer.invoke('add-purchase', data),


  // suppliers
  addSupplier: (data) => ipcRenderer.invoke('addSupplier', data),
  getSuppliersOnTyping: () => ipcRenderer.invoke('getSupplierOnTyping', data),
  getSuppliers: (data) => ipcRenderer.invoke('getSuppliers', data),

});
