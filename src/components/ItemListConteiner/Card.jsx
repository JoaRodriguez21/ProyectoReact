import React from "react";
import { useState } from "react";
import "./productosSection.css"
import {Link} from "react-router-dom"
import "../CartContainer/cartContainer.css"

function Card(props) {
    const {id, nombre, categoria, imgurl, stock, precio, descuento} = props.item
    const [colorState, setColorState] = React.useState("blue"); //Utilizar color
    let styleButton = {
        backgroundColor: colorState,
    }
    function handleClick(evt) {
        setColorState("green");
    }
    
    return(
            <div className="row">
                <div className="">
                    <div className="card cardOfertas ">
                        <div className="d-flex justify-content-between p-3">
                                <h3 className="mb-0">{nombre}</h3>                            
                        </div>
                        <div className="contImgProductos">
                            <img src={imgurl} className="card-img-top imgCardProductos" alt={nombre} />
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h4><a href="#!" className="text-muted textCard">{categoria}</a></h4>
                            </div>

                            <div className="d-flex justify-content-between mb-3">
                                {
                                    descuento?(
                                        <h3 className="small text-danger"><s className="textCard">USD ${descuento}</s></h3>
                                    ) : (
                                        ""
                                    )
                                }
                                <h4 className="text-dark mb-0 textCardPrecio">USD ${precio}</h4>
                            </div>

                            <div className="d-flex mb-2 buttonColumnCard">
                                {/* {
                                    stock = 0 &&
                                        <p className="text-muted mb-0 textCard">Sin stock disponible</p>
                                } */}
                                {
                                    stock <= 4 ? (
                                        <p className="text-muted mb-0 textCard">¡Ultimos disponibles!</p>
                                    ) : (
                                        ""
                                    ) 
                                }
                                <div>
                                    <Link to={`/detalle/${id}`}>
                                        <button onClick={handleClick} style={styleButton} className="btnBasic">Información</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Card;