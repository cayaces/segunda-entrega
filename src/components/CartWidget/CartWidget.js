import { FaShoppingBag } from "react-icons/fa";
import './CartWidget.css'
import logo from '../../assets/logo.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
            <img className='CartImg' src={logo} alt='cart-widget' />
            {totalQuantity}
            <FaShoppingBag />
            0
        </Link>
    )
}

export default CartWidget