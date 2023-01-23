import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { cartContext } from "../../storage/CartContext";
import { useParams } from 'react-router-dom';
import { getProducto } from '../../Services/firebase';
import ItemDetail from './ItemDetail';

function ItemDetailConteiner() {
  const [productoDetail, setProductoDetail] = useState({nombre: "cargando...", precio: "--,--"});
  let params = useParams();
  const { addToCart } = useContext(cartContext)

  function handleAddToCart(count){
    alert(`agregaste ${count} elementos`)
    addToCart(
      {...productoDetail, count: count}
    );
    
  }

useEffect(() => {
    getProducto(params.id).then((res) => {
          setProductoDetail(res);
        })
        .catch((error) => alert(error));
    }, [params]);
  return (
    <ItemDetail {...productoDetail}
    onAddToCart={handleAddToCart}
    nombre={productoDetail.nombre}
    imgurl={productoDetail.imgurl}
    categoria={productoDetail.categoria}
    precio={productoDetail.precio}
    stock={productoDetail.stock}
    info={productoDetail.info}
    ></ItemDetail>
  )
}

export default ItemDetailConteiner;