import React, { useState, useEffect } from 'react'
import ProductosApple from "../../Services/mockApple"
import Card from './Card';



function ItemList() {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        ProductosApple().then((ProdDataBase)=>{
            setProductos(ProdDataBase)
        });
    },[])
  return (
    <div className="productosContainer">
        {productos.map((CardIterada) => {
            return( 
                <Card key={CardIterada.id} id={CardIterada.id} nombre={CardIterada.nombre} categoria={CardIterada.categoria} color={CardIterada.info.color} memoria={CardIterada.info.memoria} chip={CardIterada.info.chip} imgurl={CardIterada.imgurl} stock={CardIterada.stock} precio={CardIterada.precio}/>                   
        )})}
    </div>
  )
}

export default ItemList;