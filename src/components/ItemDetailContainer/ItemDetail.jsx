import React from "react";
import { useState } from "react";
import ItemList from "../ItemListConteiner/ItemList";
import "./ItemDetail.css"

function ItemDetail({ nombre, imgurl, categoria, precio, stock, info}) {
    
    const [colorState, setColorState] = useState("");
    let styleButton = {
        backgroundColor: colorState,
    }
    function handleClick(evt) {
        setColorState("green");
    }
    const [count, setCount] = useState(1)
    function handleAdd() {
        setCount(count + 1);
    }
    function handleSubstrac() {
        setCount(count - 1);
    }

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
            <div className="d-flex mb-2 buttonColumnCard">
              <p className="text-muted mb-0 textCard">Disponibles: <span className="fw-bold textCard">{stock}</span></p>
              <div className="countCard">
                  <button className="btn btn-secondary btnDisp" disabled={count === 1} onClick={handleSubstrac}>-</button>
                  <p className="textCount">{count}</p>
                  <button className="btn btn-secondary btnDisp" disabled={count === stock} onClick={handleAdd}>+</button>
              </div>
              <div>
                  <button onClick={handleClick} style={styleButton} className=" btnDetail">Agregar al carrito 🛒</button>
              </div>
          </div>
        </div>
        <br></br>
      </div>
        <ItemList/>
    </section>
  );
}

export default ItemDetail;