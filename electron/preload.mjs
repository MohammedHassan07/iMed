import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {

  // medicine
  addMedicine: (data) => ipcRenderer.invoke('add-medicine', data),
  getMedicine: (data) => ipcRenderer.invoke('get-medicine', data),
  getMedicineOnTyping: (search) => ipcRenderer.invoke('getMedicineOnTyping', search),
  bulkUpload: (data) => ipcRenderer.invoke('bulkUpload', data),
  updateMedicine: (data) => ipcRenderer.invoke('updateMedicine', data),
  deleteMedicine: (data) => ipcRenderer.invoke('deleteMedicine', data),

  // purchase
  addPurchase: (data) => ipcRenderer.invoke('add-purchase', data),
  getPurchase: (data) => ipcRenderer.invoke('getPurchase', data),
  getStocksOnTyping: (data) => ipcRenderer.invoke('getStocksOnTyping', data),
  getNearExpiryMedicines: () => ipcRenderer.invoke('getNearExpiryMedicines'),
  returnPurchase: (data) => ipcRenderer.invoke('returnPurchase', data),

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
  returnSales: (data) => ipcRenderer.invoke('returnSales', data),

  // payments
  getAllPayments: (data) => ipcRenderer.invoke('getAllPayments', data),
  getPaymentDetails: (data) => ipcRenderer.invoke('getPaymentDetails', data),
  getSummaryStats: () => ipcRenderer.invoke('getSummaryStats'),
  getRevenueGraphData: (data) => ipcRenderer.invoke('getRevenueGraphData', data),
  getSalesAndPurchaseData: (data) => ipcRenderer.invoke('getSalesAndPurchaseData', data),

  // company
  getCompany: (data) => ipcRenderer.invoke('getCompany', data),
  addCompany: (data) => ipcRenderer.invoke('addCompany', data),
  updateCompany: (data) => ipcRenderer.invoke('updateCompany', data),
  deleteCompany: (data) => ipcRenderer.invoke('deleteCompany', data),

});
