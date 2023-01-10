import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ProductosSection from './components/ItemListConteiner/ProductosSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailConteiner from "./components/ItemDetailContainer/ItemDetailConteiner";


function App() {
  

  return (
    <div>
      <BrowserRouter>
          <NavBar/>
        <Routes>
          <Route path='/' element={<h1>Pagina de inicio</h1>}/>
          <Route path="/category" element={<ProductosSection/>}/>
          <Route path="/detalle/:idProd" element={<ItemDetailConteiner/>}/>
          <Route path="*" element={<h2>Pagina no encontrada</h2>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );


}

export default App;
