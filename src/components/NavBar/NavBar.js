import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import './NavBar.css';


const NavBar = () => {
    return (
        <header className='header'>
            <Link to="/">
                <h1 className='tituloTienda'>Tiendita Tesoritos B&S</h1>
            </Link>

            <nav className="navbar">
                <ul>
                    <li>
                        <NavLink to="/categoria/juguetes">
                            Juguetes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/masitas">
                            Masitas
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/organizadores">
                            Organización
                        </NavLink>
                    </li>
                </ul>
             </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar

















/*import './NavBar.css'
import logo from '../../assets/logo.png'
import { NavLink, Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header className="NavBar">
            <Link to='/'>
                <img src={logo} alt="logo" />
            </Link>

            <nav className='nav'>
                <ul>
                   <li>
                        <NavLink to="/category/juguetes" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                            Juguetes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/masitas" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                            Masitas
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/organizacion" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                            Organizacion
                        </NavLink>
                    </li>
                    <li> 
                        <CartWidget />
                    </li>
               </ul> 
              
            </nav>
            
        </header>
    )
}

export default NavBar;*/