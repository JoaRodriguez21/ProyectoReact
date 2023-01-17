import React from "react";
import ItemList from "../ItemListConteiner/ItemList";
import ItemCount from "./ItemCount";
import "./ItemDetail.css"

function ItemDetail({ nombre, imgurl, categoria, precio, stock, info, onAddToCart}) {
  return (
    <section className="contDetail">
      <div className="item-card contCardDetail">
          
            <img className="ImgDetail" src={imgurl} alt={nombre} />
          
        <div className="contInfoDetail">
            <div className="item-card_header">
              <h2 className="titleDetail">{nombre}</h2>
            </div>
            <div className="item-card_detail">
              <h3 className="item-card_price precioDetail">$USD: ${precio}</h3>
              <small className="categoriaDetail">{categoria}</small>
            </div>
            <div>
              <div>
                  <h3 className="tituloInfo">Caracteristicas</h3>
                  <div>
                    {info?.map(element =>
                      <div>
                        <h4 className="datosInfo">Color: {element.color}</h4>
                        <h4 className="datosInfo">Memoria: {element.memoria}</h4>
                        <h4 className="datosInfo">Chip: {element.chip}</h4>
                      </div>
                    )}
                  </div>
              </div>
            </div>
            <ItemCount stocked={stock}  onAddToCart={onAddToCart}></ItemCount>
        </div>
        <br></br>
      </div>
        <ItemList/>
    </section>
  );
}

export default ItemDetail;