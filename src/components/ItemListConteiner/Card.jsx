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
        <div class="col">
            <div class="row">
                <div class="">
                    <div class="card cardOfertas ">
                        <div class="d-flex justify-content-between p-3">
                                <h3 class="mb-0">{props.nombre}</h3>
                            
                        </div>
                        <div className="contImgProductos">
                            <img src={props.imgurl} class="card-img-top imgCardProductos" alt="" />
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h4><a href="#!" class="text-muted textCard">{props.categoria}</a></h4>
                                <p class="small text-danger"><s>{props.descuento}</s></p>
                            </div>

                            <div class="d-flex justify-content-between mb-3">
                                <h4 class="text-dark mb-0 textCardPrecio">${props.precio}</h4>
                            </div>


                            <div class="d-flex mb-2 buttonColumnCard">
                                <p class="text-muted mb-0 textCard">Disponibles: <span class="fw-bold textCard">{props.stock}</span></p>
                                <div className="countCard">
                                    <button className="btn btn-secondary" disabled={count === 1} onClick={handleSubstrac}>-</button>
                                    <p className="textCount">{count}</p>
                                    <button className="btn btn-secondary" disabled={count === (props.stock)} onClick={handleAdd}>+</button>
                                </div>
                                <div>
                                    <button onClick={handleClick} style={styleButton} className="btn btn-primary buttonAñadir">Añadir al carrito</button>
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