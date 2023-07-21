import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer greeting="Bienvenidos" />
     <ItemDetailContainer />

     <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/>
    </div>
  );
}

export default App;
