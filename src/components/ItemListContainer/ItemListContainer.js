import { useState, useEffect} from 'react'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import ItemList from '../ItemList/ItemList'
import { useParams, Link } from 'react-router-dom'
import { getProducts, getProductsByCategory, } from '../../asyncMock'

import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
<Link to={`./ItemDetailContainer/${ItemDetailContainer}`}>Ver detalles</Link>


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId 
        ? query(collection(db, 'products'), where('categoria', '==', categoryId))
         : collection(db, 'products')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)

            })
      const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId]);

    return (
       <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    );

};

export default ItemListContainer;