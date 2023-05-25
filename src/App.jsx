import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Navbar } from './components/Navbar/navbar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/Cartcontext';
import Cart from './components/Cart/Cart';



function App() {

  /*const [cart, setCart] = useState([])
  console.log(cart)

  const addCart = (item) => {
    setCart([...cart, item])
  }

  const isInCart = (id) => {
    return cart.some((item) => item.id === id) 
  }*/

  return (
    <CartProvider>
      <div>
        <BrowserRouter> 
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer Stock={"Titulos disponibles:"}/> } />
            <Route path=':editorialId' element={<ItemListContainer Stock={"Titulos disponibles:"} /> } />
            <Route path='/detail/:itemId' element={<ItemDetailContainer /> } />
            <Route path='/Cart' element={<Cart /> } />
            <Route path='*' element={ <Navigate to={"/"}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  )
}

export default App
