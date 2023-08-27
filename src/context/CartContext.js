import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    cantidadTotal: 0,
});

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    const agregarProducto = (item, cantidad) => {
        const productoExistente = cart.find((prod) => prod.id === item.id);

        if (!productoExistente) {
            setCart((prev) => [...prev, { item, cantidad }]);
            setCantidadTotal((prev) => prev + cantidad);
            setTotal((prev) => prev + item.precio * cantidad);
        } else {
            const carritoActualizado = cart.map((prod) => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            });
            setCart(carritoActualizado);
            setCantidadTotal((prev) => prev + cantidad);
            setTotal((prev) => prev + item.precio * cantidad);
        }
    };

    //funcion para eliminar producto
    const eliminarProducto = (id) => {
        const productoEliminado = cart.find((prod) => prod.item.id === id);
        const carritoActualizado = cart.filter((prod) => prod.item.id !== id);

        setCart(carritoActualizado);
        setCantidadTotal((prev) => prev - productoEliminado.cantidad);
        setTotal((prev) => prev - productoEliminado.item.precio * productoEliminado.cantidad);
    };

    //Funcion para vaciar el carrito
    const vaciarCarrito = () => {
        setCart([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    return (
        <CartContext.Provider value={{cart, total, cantidadTotal, agregarProducto, eliminarProducto, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )
};