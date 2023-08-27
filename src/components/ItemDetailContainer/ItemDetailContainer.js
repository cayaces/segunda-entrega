//Aqui trabajo con el detalle de un solo producto
import './ItemDetailContainer.css';
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { idItem } = useParams();

    useEffect(() => {
        const nuevoDoc = doc(db, "productos", idItem);

        getDoc(nuevoDoc)
            .then((res) => {
                const data = res.data();
                const nuevoProducto = { id: res.id, ...data };
                setProduct(nuevoProducto);
            })
            .catch((error) => console.log(error));
    }, [idItem]);

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer

