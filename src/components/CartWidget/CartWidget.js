import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { BiCartAlt } from 'react-icons/bi';

const CartWidget = () => {
    const { cantidadTotal } = useContext(CartContext);

    return (
        <div>
            <Link to="/cart">
                <BiCartAlt />
                 { cantidadTotal > 0 && <strong> {cantidadTotal} </strong>}
            </Link>

        </div>
    )
}

export default CartWidget