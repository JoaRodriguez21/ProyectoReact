import React from "react";
import { useState } from "react";

function ItemDetail({ nombre, imgurl, categoria, precio, stock, color, memoria, chip }) {
    
    const [colorState, setColorState] = useState("blue");
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
    <div className="item-card">
      <div className="item-card_header">
        <h2>{nombre}</h2>
      </div>
      <div className="item-card_img">
        <img src={imgurl} alt={nombre} />
      </div>
      <div className="item-card_detail">
        <h3 className="item-card_price">$ {precio}</h3>
        <small>{categoria}</small>
      </div>
      <div>
        <div>
            <h3>Caracteristicas</h3>
            <div>
                <h4>Color: {color}</h4>
                <h4>Memoria: {memoria}GB</h4>
                <h4>Chip: "{chip}"</h4>
            </div>
        </div>
      </div>
      <div className="d-flex mb-2 buttonColumnCard">
        <p className="text-muted mb-0 textCard">Disponibles: <span className="fw-bold textCard">{stock}</span></p>
        <div className="countCard">
            <button className="btn btn-secondary" disabled={count === 1} onClick={handleSubstrac}>-</button>
            <p className="textCount">{count}</p>
            <button className="btn btn-secondary" disabled={count === stock} onClick={handleAdd}>+</button>
        </div>
        <div>
            <button onClick={handleClick} style={styleButton} className="btn btn-primary buttonAñadir">Añadir al carrito</button>
        </div>
    </div>
      <br></br>
    </div>
  );
}

export default ItemDetail;