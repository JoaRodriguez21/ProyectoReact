import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { productosApple, getProdByCategory } from '../../Services/firebase';

import Loader from '../Loader/Loader';
import Card from './Card';


function ItemList() {
    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    let { categoriaid } = useParams();
    
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
        <div className="productosContainer">
            {productos.map((CardIterada) => {
                return <Card key={CardIterada.id} item={CardIterada}/>                   
            })}
        </div>
        )
    }
        
    </>
  )
}

export default ItemList;