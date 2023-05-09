import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Navbar } from './components/Navbar/navbar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <div>
      <BrowserRouter> 
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer Stock={"Titulos disponibles:"}/> } />
          <Route path=':editorialId' element={<ItemListContainer Stock={"Titulos disponibles:"} /> } />
          <Route path='/detail/:itemId' element={<ItemDetailContainer /> } />
          <Route path='*' element={ <Navigate to={"/"}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
