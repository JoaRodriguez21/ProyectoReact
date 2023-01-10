import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ProductosApple, { getProdByCategory } from "../../Services/mockApple"
import Card from './Card';



function ItemList() {
    const [productos, setProductos] = useState([])

    let { categoryid } = useParams();

    useEffect(() => {
        if (!categoryid) {
            ProductosApple().then((resp)=>{
                setProductos(resp)
            })
            .catch((error) => alert(error));
        } else {
            getProdByCategory(categoryid).then((resp) => {
                setProductos(resp)
            })
        } 
    },[categoryid]);
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