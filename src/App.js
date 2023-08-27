import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';


function App() {

  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={'Bienvenidos a Tesoritos B&S'} />} />

            <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting={"Productos por categoria"} />} />

            <Route path="/item/:idItem" element={<ItemDetailContainer />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/checkout" element={<Checkout />} />

            <Route path="*" element={<h2>Estamos trabajando para ud...</h2>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;


/*const [cart, setCart] = useState([]);

  const agregarAlCarrito = (id, cantidad) => {
    const itemAgregado = { ...id, cantidad };

    const nuevoCarrito = [...cart];
    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;
      setCart(nuevoCarrito);
    } else {
      nuevoCarrito.push(itemAgregado);
    }
    setCart(nuevoCarrito);
  }

  const cantidadEnCarrito = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
  }
  
  
  import './App.css';
import { CartContext, CartProvider } from './context/CartContext';
import { useState } from 'react';
  */