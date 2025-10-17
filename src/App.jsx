import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import AddItem from './pages/Item/AddItem'
import GetItems from './pages/Item/GetItems'
import purchase from './pages/Purchase/purchase'

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

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
