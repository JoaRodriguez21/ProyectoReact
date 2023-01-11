import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducto } from '../../Services/mockApple';
import ItemDetail from './ItemDetail';

function ItemDetailConteiner() {
  const [productoDetail, setProductoDetail] = useState({nombre: "cargando...", precio: "--,--"});

  let params = useParams();

useEffect(() => {
    getProducto(params.id).then((res) => {
          setProductoDetail(res);
        })
        .catch((error) => alert(error));
    }, [params]);
  return (
    <ItemDetail {...productoDetail}
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