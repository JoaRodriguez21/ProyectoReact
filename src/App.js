import './App.css';
import ItemListCont from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ProductosSection from './components/productos/ProductosSection';

function App() {
  

  return (
    <div>
      <NavBar/>
      <ItemListCont greeting="Bienvenido al curso " />
      <ProductosSection/>
    </div>
  );


}

export default App;
