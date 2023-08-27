import './Cart.css'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, vaciarCarrito, total, cantidadTotal } = useContext(CartContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2 className='tituloH2'>No tienes productos en el carrito</h2>
                <Link className="miBtn" to="/"> Ver Productos </Link>
            </>
        )
    }

    return (
        <div>
            {cart.map((product => <CartItem key={product.id} {...product} />))}
            <h3 className='total'> Total: ${total} </h3>
            <h3 className='cantTotal'> Cantidad total: {cantidadTotal} </h3>
            <button className="miBtn" onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
            <Link className="miBtn" to="/checkout"> Finalizar Compra </Link>
        </div>
    )
}

export default Cart;