import './NavBar.css'
import logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

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
               </ul>
            </nav>
            < CartWidget />
        </header>
    )
}

export default NavBar;