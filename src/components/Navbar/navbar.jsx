
import './navbar.css'
import logo from '../../assets/logo1.jpg'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import CartWidget from '../CartWidget/CartWidget'

export const Navbar = () => {
    return(
        <header className="header">
            <div className="header_container">
                <img className="logo" src={logo} alt="Morioh Manga" />
                <nav className="navbar">
                    <p className="navbar_link">IVREA</p>
                    <p className="navbar_link">Panini</p>
                    <p className="navbar_link">Ovni Press</p>
                    <p className="navbar_link">Distrito</p>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}