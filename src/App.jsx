import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import AddItem from './pages/Item/AddItem'
import GetItems from './pages/Item/GetItems'
import Purchase from './pages/Purchase/Purchase'
import GetSupplier from './pages/Suppliers/GetSupplier'
import AddSupplier from './pages/Suppliers/AddSupplier'
import AddTax from './pages/Tax/AddTax'
import GetTax from './pages/Tax/GetTax'
import AddSales from './pages/Sales/AddSales'
import GetPurchase from './pages/Purchase/GetPurchase'
import PurchaseDetails from './pages/Purchase/PurchaseDetails'
import ReturnPurchase from './pages/Purchase/ReturnPurchase'
import GetSales from './pages/Sales/GetSales'
import SalesDetails from './pages/Sales/SalesDetails'
import AddInventory from './pages/Inventory/AddInventory'
import ReturnSales from './pages/Sales/ReturnSales'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import AddCompany from './pages/company/AddCompany'
import GetCompany from './pages/company/GetCompany'
import Payments from './pages/payments/Payments'
import PaymentDetails from './pages/payments/PaymentDetails'

import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
} from "kbar";


function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

function AppContent() {
  const navigate = useNavigate();

  const actions = [
    { id: 'home', name: 'Home', shortcut: ['h'], keywords: 'home dashboard', perform: () => navigate('/') },
    { id: 'add-item', name: 'Add Item', shortcut: ['i'], keywords: 'item add', perform: () => navigate('/item/add') },
    { id: 'get-item', name: 'Get Item', shortcut: [''], keywords: 'item get', perform: () => navigate('/item/') },

    { id: 'add-sales', name: 'Add Sales', shortcut: [''], keywords: 'sales add', perform: () => navigate('/sales/add') },
    { id: 'sales', name: 'View Sales', shortcut: ['s'], keywords: 'sales view', perform: () => navigate('/sales') },
    { id: 'return-sales', name: 'Return Sales', shortcut: ['s'], keywords: 'sales return', perform: () => navigate('/return-sales') },


   
    { id: 'add-purchase', name: 'Add Purchases', shortcut: ['p'], keywords: 'purchase add', perform: () => navigate('/purchase/add') },
    { id: 'purchase', name: 'Get Purchases', shortcut: ['p'], keywords: 'purchase get', perform: () => navigate('/purchase/') },
    { id: 'purchase-details', name: 'Purchases Details', shortcut: ['p'], keywords: 'purchase details', perform: () => navigate('/purchase/purchase-details') },
    { id: 'purchase-dereturntails', name: 'Return Purchase', shortcut: ['p'], keywords: 'purchase return', perform: () => navigate('/purchase/return-purchase') },

    { id: 'taxes', name: 'Taxes', shortcut: ['p'], keywords: 'Taxes', perform: () => navigate('/taxes/') },
    { id: 'add-tax', name: 'Add Taxes', shortcut: ['p'], keywords: 'Tax add', perform: () => navigate('/taxes/add') },

    { id: 'add-supplier', name: 'Add Supplier', shortcut: ['c'], keywords: 'supplier add', perform: () => navigate('/supplier/add') },
    { id: 'supplier', name: 'Supplier', shortcut: ['c'], keywords: 'supplier get', perform: () => navigate('/supplier/') },

    { id: 'payments', name: 'Payments', shortcut: ['c'], keywords: 'payments', perform: () => navigate('/payments/') },



    { id: 'add-company', name: 'Add Company', shortcut: ['c'], keywords: 'company add', perform: () => navigate('/company/add') },
    { id: 'company', name: 'Get Company', shortcut: ['c'], keywords: 'company get', perform: () => navigate('/company/') },
  ];

  return (

    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="fixed inset-0 bg-black/30 z-[9999] flex items-start justify-center pt-20">
          <KBarAnimator className="bg-white border border-gray-200 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
            <KBarSearch
              className="w-full px-4 py-3 text-lg text-blue-950 bg-gray-50 outline-none border-b border-gray-300 rounded-t-2xl placeholder-gray-400 focus:ring-2 focus:ring-blue-950"
              placeholder="Type a command or search..."
            />
            <Results />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>

      {/* Actual App UI */}
      <Navbar />
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* sales */}
        <Route path="/sales/add" element={<AddSales />} />
        <Route path="/sales" element={<GetSales />} />
        <Route path="/sales/sales-details" element={<SalesDetails />} />
        <Route path="/sales/return-sales" element={<ReturnSales />} />

        {/* item */}
        <Route path="/item/add" element={<AddItem />} />
        <Route path="/item" element={<GetItems />} />

        {/* purchase */}
        <Route path="/purchase/add" element={<Purchase />} />
        <Route path="/purchase" element={<GetPurchase />} />
        <Route path="/purchase/purchase-details" element={<PurchaseDetails />} />
        <Route path="/purchase/return-purchase" element={<ReturnPurchase />} />

        {/* inventory */}
        <Route path="/inventory/add" element={<AddInventory />} />

        {/* tax */}
        <Route path="/taxes/add" element={<AddTax />} />
        <Route path="/taxes" element={<GetTax />} />

        {/* supplier */}
        <Route path="/supplier/add" element={<AddSupplier />} />
        <Route path="/supplier" element={<GetSupplier />} />

        {/* company */}
        <Route path="/company/add" element={<AddCompany />} />
        <Route path="/company" element={<GetCompany />} />

        <Route path="/payments" element={<Payments />} />
        <Route path="/payments/payments-details" element={< PaymentDetails />} />

      </Routes>
    </KBarProvider >
  );
}

function Results() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="px-4 py-2 text-xs font-semibold text-blue-950 bg-gray-100">
            {item}
          </div>
        ) : (
          <div
            className={`px-4 py-3 cursor-pointer transition-colors duration-150 ${active
              ? "bg-blue-950 text-white"
              : "bg-white text-blue-950 hover:bg-gray-100"
              }`}
          >
            {item.name}
          </div>
        )
      }
    />
  );
}

export default App;
