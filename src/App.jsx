import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Navbar } from './components/Navbar/navbar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/Cartcontext';
import Cart from './components/Cart/Cart';
import FinishOrder from './components/FinishOrder/FinishOrder';


function App() {

  return (
    <CartProvider>
      <div>
        <BrowserRouter> 
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer Stock={"Titulos disponibles:"}/> } />
            <Route path='/editorial/:editorialId' element={<ItemListContainer Stock={"Titulos disponibles:"} /> } />
            <Route path='/detail/:itemId' element={<ItemDetailContainer /> } />
            <Route path='/Cart' element={<Cart /> } />
            <Route path='/Finishorder' element={<FinishOrder /> } />
            <Route path='*' element={ <Navigate to={"/"}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  )
}

export default App
