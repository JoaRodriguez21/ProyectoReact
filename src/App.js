import './App.css';
import ItemListCont from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  

  return (
    <div>
      <NavBar/>
      <ItemListCont greeting="Bienvenido al curso " />
    </div>
  );


}

export default App;
