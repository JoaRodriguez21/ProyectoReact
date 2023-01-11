import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ProductosSection from './components/ItemListConteiner/ProductosSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailConteiner from "./components/ItemDetailContainer/ItemDetailConteiner";
import HomePage from './pages/HomePage';


function App() {
  

  return (
    <div>
      <BrowserRouter>
          <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/categoria/:categoriaid" element={<ProductosSection/>}/>
          <Route path="/detalle/:id" element={<ItemDetailConteiner/>}/>
          <Route path="*" element={<h2>Pagina no encontrada</h2>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );


}

export default App;
