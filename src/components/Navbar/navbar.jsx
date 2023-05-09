
import './navbar.css'
import logo from '../../assets/logo1.jpg'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return(
        <header className="header">
            <div className="header_container">
                <Link to='/'> <img className="logo" src={logo} alt="Morioh Manga" /></Link>
                <nav className="navbar">
                    <Link to='/IVREA' className="navbar_link">IVREA</Link>
                    <Link to='/Panini' className="navbar_link">Panini</Link>
                    <Link to='/OvniPress' className="navbar_link">Ovni Press</Link>
                    <Link to='/Distrito' className="navbar_link">Distrito</Link>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}