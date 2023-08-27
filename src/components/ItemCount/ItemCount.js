import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({inicial, stock, funcionAgregar})=> {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    };

    const decrementar = () => {
        if(contador > inicial) {
            setContador(contador - 1);
        }
    };

    return(
        <>
        <div>
            <button className='btnMenos' onClick={decrementar}> - </button>
            <p className='contador'> {contador} </p>
            <button className='btnMas' onClick={incrementar}> + </button>
        </div>
        <button className='btnAgregar' onClick={()=> funcionAgregar(contador)}>Agregar Al Carrito</button>
        </>
    )
}

export default ItemCount