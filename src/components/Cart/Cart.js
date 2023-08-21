import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <>
                <div>
                    <h1>No hay productos en el carrito</h1>
                    <Link to='/' className='Option'>Ver Productos</Link>
                </div>
            </>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p} />)}

            <div className="pago carrito">

                <h3>Total: ${total}</h3>
                <h3>Cantidad Total: {totalQuantity}</h3>

                <button className="Button" onClick={() => clearCart()}>
                    Limpiar Carrito
                </button>
                <br />
                
                <Link to='/checkout' className='Option'>
                    <br />
                    <button className="button">Finalizar Compra</button>
                    <br />
                </Link>
            </div>
        </div>
    )
}

export default Cart;