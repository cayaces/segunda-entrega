import { createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([])

    //PRODUCTOS
    useEffect(() => {
        const fProducts = async () => {
            try {
                const productsRef = collection(db, "products")
                const datFirebase = await getDocs(productsRef)
                const prodMap = datFirebase.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })
                setProducts(prodMap)
            } catch (error) {
                console.error('No es posible cargar este producto:', error)

            }
        };
        fProducts();

    }, []);

    const getProductById = (productId) => {
        return products.find((product) => product.id === productId)
    }

    const getProductsByCategory = (category) => {
        return products.filter((product) => product.cat === category)
    }
    //CARRO DE COMPRAS
    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity: quantity }])
        } else {
            console.error('Producto ya fue agregado')
        }
    }


    const removeItemCart = (itemId) => {
        const cartUpdated = cart.filter(product => product.id !== itemId);
        setCart(cartUpdated);
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(product => product.id === itemId)
    }

    return (

        <CartContext.Provider value={{ products, addItem, clearCart, getProductById, getProductsByCategory, cart, removeItemCart }}>
            {children}
        </CartContext.Provider>
    )

}