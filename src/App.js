import './App.css';
import ItemListCont from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ProductosSection from './components/productos/ProductosSection';
import Pruebas from './pruebas';


function App() {
  

  return (
    <div>
      <NavBar/>
      <ItemListCont greeting="Bienvenido a Compu Store" />
      <ProductosSection/>
    </div>
  );


}

export default App;
