import React, { useState } from 'react'
import "../../components/CartContainer/cartContainer.css"


function ItemCount({stocked, onAddToCart}) {
    const [count, setCount] = useState(1)
    function handleAdd() {
        setCount(count + 1);
    }
    function handleSubstrac() {
        setCount(count - 1);
    }
    return (
        <div className="d-flex mb-2 buttonColumnCard">
            <p className="text-muted mb-0 textCard">Disponibles: <span className="fw-bold textCard">{stocked}</span></p>
            <div className="countCard">
                <button className="btn btn-secondary btnDisp" disabled={count === 1} onClick={handleSubstrac}>-</button>
                <p className="textCount">{count}</p>
                <button className="btn btn-secondary btnDisp" disabled={count === stocked} onClick={handleAdd}>+</button>
            </div>
            <div>
                <button onClick={() => onAddToCart(count)}  className="btnBasic">Agregar al carrito 🛒</button>
            </div>
        </div>
  )
}

export default ItemCount;