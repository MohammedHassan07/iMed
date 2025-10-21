
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {

  createMedicine: (name, email) => ipcRenderer.invoke('create-medicine', name, email),
  getMedicine: () => ipcRenderer.invoke('get-medicine'),
 
});
