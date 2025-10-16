import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AddItem from './pages/Item/AddItem'
import GetItems from './pages/Item/GetItems'

function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' Component={Home}/>

          <Route path='/item/add' Component={AddItem}/>
          <Route path='/item/' Component={GetItems}/>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
