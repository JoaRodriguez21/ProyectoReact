import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { cartContext } from "../../storage/CartContext";
import { useParams } from 'react-router-dom';
import { getProducto } from '../../Services/firebase';
import ItemDetail from './ItemDetail';

function ItemDetailConteiner() {
  const [productoDetail, setProductoDetail] = useState({nombre: "cargando...", precio: "--,--"});
  const [isInCart, setIsInCart] = useState(false)
  let params = useParams();
  const { cart, addToCart } = useContext(cartContext)

  function handleAddToCart(count){
    setIsInCart(true)
    addToCart(
      {...productoDetail, count: count}
    );
    
  }

  function checkStock(){
    let itemInCart = cart.find((item) => item.id === productoDetail.id);

    let stockUpdate = productoDetail.stock;
    
    if(itemInCart){
      stockUpdate = productoDetail.stock - itemInCart.count;
    }
    return stockUpdate
  }


useEffect(() => {
    getProducto(params.id).then((res) => {
          setProductoDetail(res);
        })
        .catch((error) => alert(error));
    }, []);


  return (
    <ItemDetail {...productoDetail}
    isInCart={isInCart}
    onAddToCart={handleAddToCart}
    nombre={productoDetail.nombre}
    imgurl={productoDetail.imgurl}
    categoria={productoDetail.categoria}
    precio={productoDetail.precio}
    stock={productoDetail.stock}
    stockUpdated={checkStock()}
    info={productoDetail.info}
    /* stockUpdated={checkStock()} */
    ></ItemDetail>
  )
}

export default ItemDetailConteiner;
