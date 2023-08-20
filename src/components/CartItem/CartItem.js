import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

/*const CartItem = ({ product, index }) => {
    const { removeItemCart } = useContext(CartContext);
    const subtotal = product.quantity * product.value;
    const rowClass = index % 2 === 0 ? "evenRow" : "oddRow";

    return (
        <tr>
            <td className={rowClass}>{product.name}</td>
            <td className={rowClass}>{product.quantity}</td>
            <td className={rowClass}>${product.value}</td>
            <td className={`${rowClass}`}>${subtotal}<button onClick={() => removeItemCart(product.id)} size={24} /></td>
        </tr>
    )
}*/

const CartItem = ({ item }) => {
    if (!item) {
      return null; 
    }
  
    return (
      <div>
        <p>Product Name: {item.productName}</p>
        <p>Quantity: {item.quantity}</p>
        
      </div>
    );
  };

export default CartItem;