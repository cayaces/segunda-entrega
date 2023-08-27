import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { idCategoria } = useParams();

    useEffect(() => {
        const productos = idCategoria ? query(collection(db, "productos"), where("categoria", "==", idCategoria)) : collection(db, "productos");

        getDocs(productos)
            .then((res) => {
                const nuevosProductos = res.docs.map((doc) => {
                    const data = doc.data();
                    return {id: doc.id, ...data};
                });
                setProducts(nuevosProductos);
            })
            .catch((error) => console.log(error));
    }, [idCategoria])

    return (
        <>
            <div>
                <h2> {greeting} </h2>
                <ItemList products={products} />
            </div>
        </>
    );
};

export default ItemListContainer;
