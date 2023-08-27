import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, img, categoria, descripcion, precio, stock }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const { agregarProducto } = useContext(CartContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        //console.log("Productos agregados: " + cantidad);

        const item = {id, nombre, precio};
        agregarProducto(item, cantidad);
    }

    return (
        <div className="contenedorItem">
            <h2>Nombre: {nombre} </h2>
            <h3 className="Info">Precio: ${precio}</h3>
            <h3>ID: {id} </h3>
            <p className="Info"> Descripcion: {descripcion}</p>
            <img src={img} alt={nombre} className="ItemImg" />
            <p className="Info">Categoria: {categoria}</p>

            {
                agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }
        </div>
    )
}

export default ItemDetail;
