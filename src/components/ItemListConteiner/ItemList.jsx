import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { productosApple, getProdByCategory } from '../../Services/firebase';
import "./productosSection.css"
import Loader from '../Loader/Loader';
import Card from './Card';


function ItemList() {
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchKeyword, setSearchKeyword] = useState("");
    let { categoriaid } = useParams();

    //funcion de busqueda
    const searcher = (e) => {
        setSearchKeyword(e.target.value)
        console.log(e.target.value)
    }

    //metodo de filtrado
    const results = !searchKeyword ? productos : productos.filter((dato)=> dato.nombre.toLowerCase().includes(searchKeyword.toLocaleLowerCase()))
    
    useEffect(() => {
        if (!categoriaid) {
            productosApple().then((resp)=>{
                setProductos(resp)
            })
            .catch((error) => alert(error))
            .finally(()=> setIsLoading(false))
        } else {
            getProdByCategory(categoriaid).then((resp) => {
                setProductos(resp);
                setIsLoading(false);
            })
            .finally(()=> setIsLoading(false))
        } 
    },[categoriaid]);
  return (
    <>
    {isLoading ? (
        <Loader/>
    ) : (
        <>
            <div>
                <form className="contFormImput">
                    <input value={searchKeyword} onChange={searcher} className="imputBuscador" type="text" name="name" placeholder='Buscar productos...' />
                </form>
            </div>
            <div className="productosContainer">
                {results.map((CardIterada) => {
                    return <Card key={CardIterada.id} item={CardIterada}/>                   
                })}
            </div>
        </>
        )
    }
        
    </>
  )
}

export default ItemList;