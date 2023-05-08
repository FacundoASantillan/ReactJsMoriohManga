
import './navbar.css'
import logo from '../../assets/logo1.jpg'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return(
        <header className="header">
            <div className="header_container">
                <img className="logo" src={logo} alt="Morioh Manga" />
                <nav className="navbar">
                    <Link to='/ivrea' className="navbar_link">IVREA</Link>
                    <Link to='/panini' className="navbar_link">Panini</Link>
                    <Link to='/ovnipress' className="navbar_link">Ovni Press</Link>
                    <Link to='/distrito' className="navbar_link">Distrito</Link>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}