import React, { useContext, useState } from 'react'
import { cartContext } from '../../storage/CartContext'
import CartItem from './CartItem'
import "./cartContainer.css"
import { Link } from 'react-router-dom'
import { createOrder, createOrderStockControl } from '../../Services/firebase'
import Swal from 'sweetalert2'

import FormCheckout from './FormCheckout'


function CartContainer() {
    const [orderId, setOrderId] = useState()

    const {cart, getTotalItemsInCart, clear, clearCart, removeItem} = useContext(cartContext)
    console.log(cart.length)
    let cartLength = cart.length;

    function handleCheckout(evt, userData){
        evt.preventDefault()
        const items = cart.map(({id, precio,nombre, categoria, count}) => ({
            id,
            precio,
            nombre,
            categoria,
            count
        }))
        const order = {
            buyer: userData, 
            items: items,
            total: getTotalItemsInCart(),
            fecha: new Date(),
            estado: "Enpaquetando",
        };
        console.table(order)
        async function sendOrder() {
            try {
                let id = await createOrderStockControl(order);
                setOrderId(id);
                clearCart();
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: error,
                    width: "40%",
                    padding: "1rem",
                    footer: `Prueba con menos cantidad o actualiza la página`,
                    customClass: {
                        container: 'containerSwal',
                        popup: "popupSwal",
                        title: 'titleSwal',
                        text: "textSwal",
                    confirmButton: 'btnSwal',
                    confirmButtonColor:"#7B7F9D",
                    footer: 'footerSwal',
                }
            });
            }
        }
        sendOrder()
    }
        return (
            orderId ? (
                <section>
                    <div>
                        <h1>Gracias por su compra</h1>
                        <h4>{orderId}</h4>
                    </div>
                    <div>
                        <h3>Estado de su envio:</h3>
                    </div>
                    <div>
                        <Link to="/">
                            <button className=''>Volver al inicio</button>
                        </Link>
                    </div>
                </section>

            ):
            (
            <>
            <h1 className='tituloCarrito'>Carrito</h1>
                {cartLength > 0 ?
                    <section className='contCart'>
                        <div className='contResumen'>
                            <h2 className='tituloResumen'>Resumen</h2>
                            <FormCheckout onCheckout={handleCheckout}/>
                        </div>
                        <div className='contMiCart'>
                            <div>
                                <h2 className='tituloMiCarrito'>Mi carrito</h2>
                            </div>
                            <div className='contClearCart'>
                                <button onClick={() => clear()} className="btnBasic">Vaciar Carrito</button>
                            </div>
                            <div className='contCartItems'>
                                {cart.map((itemInCart) => {
                                    return <CartItem  item={itemInCart} buttonX={removeItem}/>
                                })}
                            </div>
                            <div>
                                <h2 className='tituloTotalCompra'>Total de la compra: ${getTotalItemsInCart()} USD</h2>
                            </div>
                        </div>
                    </section> 

                    :

                    <section className='contDontItems'>
                            <h2 className='tituloDontItems'>No hay items en el carrito</h2>
                        <div>
                            <Link to="/">
                                <button className='btnBasic'>Volver al Inicio</button>
                            </Link>
                        </div>
                    </section>
                }
            </>
            )
        );


        /* createOrder(order).then((id) => {

            Swal.fire({
                icon: 'success',
                title: '¡Gracias por tu compra!',
                width: "30%",
                padding: "1rem",
                footer: `Su ID es: "${id}"`,
                customClass: {
                    container: 'containerSwal',
                    title: 'titleSwal',
                    text: "textSwal",
                    confirmButton: 'btnSwal',
                    confirmButtonColor:"#7B7F9D",
                    footer: 'footerSwal',
                }
            })
            clearCart()
        });
    } */
}


export default CartContainer;