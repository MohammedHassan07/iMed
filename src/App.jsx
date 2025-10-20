import { BrowserRouter, Route, Routes } from 'react-router-dom'
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

function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' Component={Home} />

          {/* sales */}
          <Route path='/sales/add' Component={AddSales}/>
          <Route path='/sales/' Component={GetSales}/>
          <Route path='/sales/sales-details' Component={SalesDetails}/>

          {/* item */}
          <Route path='/item/add' Component={AddItem} />
          <Route path='/item/' Component={GetItems} />

          {/* purchase */}
          <Route path='/purchase/add' Component={Purchase} />
          <Route path='/purchase/' Component={GetPurchase} />
          <Route path='/purchase/purchase-details/' Component={PurchaseDetails} />
          <Route path='/purchase/return-purchase' Component={ReturnPurchase} />

          {/* inventory */}
          <Route path='/inventory/add' Component={AddInventory}/>

          {/* Tax */}
          <Route path='/taxes/add' Component={AddTax} />
          <Route path='/taxes/' Component={GetTax} />

          {/* Supplier */}
          <Route path='/supplier/add' Component={AddSupplier} />
          <Route path='/supplier/' Component={GetSupplier} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
