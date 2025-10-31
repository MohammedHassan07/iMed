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

import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
} from "kbar";


// -------------------------
// Main App
// -------------------------
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
    { id: 'sales', name: 'View Sales', shortcut: ['s'], keywords: 'sales view', perform: () => navigate('/sales') },
    { id: 'purchase', name: 'View Purchases', shortcut: ['p'], keywords: 'purchase list', perform: () => navigate('/purchase') },
    { id: 'add-company', name: 'Add Company', shortcut: ['c'], keywords: 'company add', perform: () => navigate('/company/add') },
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
