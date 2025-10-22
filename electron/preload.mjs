
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {

  // medicine
  addMedicine: (data) => ipcRenderer.invoke('add-medicine', data),
  createMedicine: (name, email) => ipcRenderer.invoke('create-medicine', name, email),
  getMedicine: (data) => ipcRenderer.invoke('get-medicine', data),

  // purchase
  addPurchase: (data) => ipcRenderer.invoke('add-purchase', data),
 
});
