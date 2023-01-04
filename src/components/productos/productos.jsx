import React from "react";
import { useState } from "react";
import "./productosSection.css"

function Card(props) {
    const [colorState, setColorState] = React.useState("blue");
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

    return(
        <div className="cardOfertas col">
            <div class="row">
                <div class="">
                    <div class="card">
                        <div class="d-flex justify-content-between p-3">
                            <p class="lead mb-0">Oferta del día</p>
                            <div class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong">
                                <p class="text-white mb-0 small">{props.stock}</p>
                            </div>
                        </div>
                        <img src={props.img} className="imgCardOfertas card-img-top" class="card-img-top" alt="Laptop" />
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <p class="small"><a href="#!" class="text-muted">{props.categoria}</a></p>
                                <p class="small text-danger"><s>{props.descuento}</s></p>
                            </div>

                            <div class="d-flex justify-content-between mb-3">
                                <h5 class="mb-0">{props.title}</h5>
                                <h5 class="text-dark mb-0">${props.precio}</h5>
                            </div>

                            <div class="d-flex mb-2 buttonColumnCard">
                                <p class="text-muted mb-0">Disponibles: <span class="fw-bold">{props.stock}</span></p>
                                <div className="countCard">
                                    <button className="btn btn-secondary" disabled={count === 1} onClick={handleSubstrac}>-</button>
                                    <p className="textCount">{count}</p>
                                    <button className="btn btn-secondary" disabled={count === (props.stock)} onClick={handleAdd}>+</button>
                                </div>
                                <div>
                                    <button onClick={handleClick} style={styleButton} className="btn btn-primary">añadir al carrito</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;