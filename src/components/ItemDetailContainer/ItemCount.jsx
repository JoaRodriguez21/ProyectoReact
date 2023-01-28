import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../../components/CartContainer/cartContainer.css"


function ItemCount({onAddToCart, stockUpdated}) {
    const [count, setCount] = useState(1)
    function handleAdd() {
       if(count < stockUpdated) setCount(count + 1);
    }
    function handleSubstrac() {
        setCount(count - 1);
    }
    return (
        stockUpdated >= 1 ? (
                <div className="d-flex mb-2 buttonColumnCard">
                    <p className="text-muted mb-0 textCard">Disponibles: <span className="fw-bold textCard">{stockUpdated}</span></p>
                    <div className="countCard">
                        <button className="btn btn-secondary btnDisp" disabled={count === 1} onClick={handleSubstrac}>-</button>
                        <p className="textCount">{count}</p>
                        <button className="btn btn-secondary btnDisp" disabled={count === stockUpdated} onClick={handleAdd}>+</button>
                    </div>
                    <div>
                        <button onClick={() => onAddToCart(count)}  className="btnBasic">Agregar al carrito 🛒</button>
                    </div>
                </div>
            ) : 
            (
                <div className="d-flex mb-2 buttonColumnCard">
                    <p className="text-muted mb-0 textCard">Disponibles: <span className="fw-bold textCard">{stockUpdated}</span></p>
                    <Link to="/">
                        <button className="btnBasic">Volver al inicio 🏠</button>
                    </Link>
                </div>
            )
        )
}

export default ItemCount;