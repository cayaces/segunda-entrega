import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

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