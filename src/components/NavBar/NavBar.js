import './NavBar.css'
import logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <div>
                    <img src={logo} alt="logo" />
                </div>
            </Link>
            <div className='Categories'>
                <NavLink to={"/category/juguetes"} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Juguetes</NavLink>
                <NavLink to={"/category/masitas"} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Masitas</NavLink>
                <NavLink to={"/category/organizacion"} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Organizacion</NavLink>
            </div>
            < CartWidget />
        </nav>
    )
}

export default NavBar;