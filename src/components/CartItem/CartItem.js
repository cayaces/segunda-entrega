import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartItem.css";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CartContext);

  return (
    <div className="itemCart">
      <h4> {item.nombre} </h4>
      <p> Cantidad: {cantidad} </p>
      <p> Precio:{item.precio} </p>
      <button className="btnEliminar" onClick={() => eliminarProducto(item.id)}> Eliminar </button>
      <hr />
    </div>
  );
};

export default CartItem;