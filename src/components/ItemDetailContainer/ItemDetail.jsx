import React from "react";
import { Link } from "react-router-dom";
import ItemList from "../ItemListConteiner/ItemList";
import ItemCount from "./ItemCount";
import "./ItemDetail.css"

function ItemDetail({ nombre, imgurl, categoria, precio, info, stock, onAddToCart, isInCart, stockUpdated}) {
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
                    { info ? (
                      <div>
                        <h4 className="datosInfo">Color: {info[0].color}</h4>
                        { info[1] ?
                          <h4 className="datosInfo">Memoria: {info[0].memoria}GB</h4>
                          :
                          ""
                        }
                        { info[2] ?
                          <h4 className="datosInfo">Chip: {info[0].chip}</h4>
                          :
                          ""
                        }
                      </div>
                      ) : (
                        ""
                      )}
                  </div>
              </div>
            </div>
            { isInCart ? (
              <div className="d-flex mb-2 buttonColumnCard">
                <Link to="/cart">
                  <button className="btnBasic">Ir ➡🛒</button>
                </Link>
              </div>
            )
            :
            (
              <ItemCount  onAddToCart={onAddToCart} stockUpdated={stockUpdated} stock={stock}></ItemCount>
            )
            }
        </div>
      </div>
    </section>
  );
}

export default ItemDetail;