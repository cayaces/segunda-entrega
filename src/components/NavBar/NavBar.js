import logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <button>Juguetes</button>
                <button>Masitas</button>
                <button>Organizacion</button>
            </div>
            < CartWidget />
        </nav>
    )

}

export default NavBar