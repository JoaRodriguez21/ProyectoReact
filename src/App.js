import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ProductosSection from './components/ItemListConteiner/ProductosSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailConteiner from "./components/ItemDetailContainer/ItemDetailConteiner";
import HomePage from './pages/HomePage';
import CartProvider from './storage/CartContext';
import CartContainer from './components/CartContainer/CartContainer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
            <NavBar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path="/categoria/:categoriaid" element={<ProductosSection/>}/>
            <Route path="/detalle/:id" element={<ItemDetailConteiner/>}/>
            <Route path='/cart' element={<CartContainer/>}/>
            <Route path="*" element={<h2>Pagina no encontrada</h2>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );


}

export default App;
