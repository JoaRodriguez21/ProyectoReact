import React from "react";
import { useState } from "react";
import "./productosSection.css"
import {Link} from "react-router-dom"

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
        <div className="col">
            <div className="row">
                <div className="">
                    <div className="card cardOfertas ">
                        <div className="d-flex justify-content-between p-3">
                                <h3 className="mb-0">{props.nombre}</h3>
                            
                        </div>
                        <div className="contImgProductos">
                            <img src={props.imgurl} className="card-img-top imgCardProductos" alt="" />
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h4><a href="#!" className="text-muted textCard">{props.categoria}</a></h4>
                                <p className="small text-danger"><s>{props.descuento}</s></p>
                            </div>

                            <div className="d-flex justify-content-between mb-3">
                                <h4 className="text-dark mb-0 textCardPrecio">${props.precio}</h4>
                            </div>


                            <div className="d-flex mb-2 buttonColumnCard">
                                <p className="text-muted mb-0 textCard">Disponibles: <span className="fw-bold textCard">{props.stock}</span></p>
                                <div>
                                    <Link to={`/detalle/${props.id}`}>
                                        <button onClick={handleClick} style={styleButton} className="btn btn-primary buttonAñadir">Comprar</button>
                                    </Link>
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