import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ProductosSection from './components/ItemListConteiner/ProductosSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailConteiner from "./components/ItemDetailContainer/ItemDetailConteiner";
import HomePage from './pages/HomePage';
import CartProvider from './storage/CartContext';


function App() {

  function functionBuscar(producto){
    alert(`El producto: ${producto} no se encontró`);
  }

  return (
    <div>
      <BrowserRouter>
        <CartProvider>
            <NavBar onLogin={functionBuscar}/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path="/categoria/:categoriaid" element={<ProductosSection/>}/>
            <Route path="/detalle/:id" element={<ItemDetailConteiner/>}/>
            <Route path="*" element={<h2>Pagina no encontrada</h2>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );


}

export default App;
