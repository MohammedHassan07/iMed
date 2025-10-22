
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {

  addMedicine: (data) => ipcRenderer.invoke('add-medicine', data),
  createMedicine: (name, email) => ipcRenderer.invoke('create-medicine', name, email),
  getMedicine: (data) => ipcRenderer.invoke('get-medicine', data),
 
});
