import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducto } from '../../Services/mockApple';
import ItemDetail from './ItemDetail';

function ItemDetailConteiner() {
  const [productoDetail, setProductoDetail] = useState({nombre: "cargando...", precio: "--,--"});

  let params = useParams();

useEffect(() => {
    getProducto(params.idProd).then((ProdDetalle) => {
          setProductoDetail(ProdDetalle);
        })
        .catch((error) => alert(error));
    }, []);
  return (
    <ItemDetail
    nombre={productoDetail.nombre}
    imgurl={productoDetail.imgurl}
    categoria={productoDetail.categoria}
    precio={productoDetail.precio}
    stock={productoDetail.stock}
    color={productoDetail.info.color}
    memoria={productoDetail.info.memoria}
    chip={productoDetail.info.chip}
    ></ItemDetail>
  )
}

export default ItemDetailConteiner;