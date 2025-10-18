import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import AddItem from './pages/Item/AddItem'
import GetItems from './pages/Item/GetItems'
import purchase from './pages/Purchase/purchase'
import TaxSettings from './pages/Tax/TaxSettings'
import GetSupplier from './pages/Suppliers/GetSupplier'
import AddSupplier from './pages/Suppliers/AddSupplier'

function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' Component={Home} />

          {/* item */}
          <Route path='/item/add' Component={AddItem} />
          <Route path='/item/' Component={GetItems} />

          {/* purchase */}
          <Route path='/purchase/' Component={purchase}/>

          {/* Tax */}
          <Route path='/taxes/' Component={TaxSettings}/>

          {/* Supplier */}
          <Route path='/supplier/add' Component={AddSupplier}/>
          <Route path='/supplier/' Component={GetSupplier}/>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
