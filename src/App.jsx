import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Navbar } from './components/Navbar/navbar'

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer Stock={"Titulos disponibles:"}/>
    </div>
  )
}

export default App
