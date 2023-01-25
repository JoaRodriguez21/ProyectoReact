import React, { useContext } from 'react'
import { cartContext } from '../../storage/CartContext'
import CartItem from './CartItem'
import "./cartContainer.css"
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { createOrder } from '../../Services/firebase'


function CartContainer() {

const {cart, getTotalItemsInCart, clear, removeItem} = useContext(cartContext)
    console.log(cart.length)
    let cartLength = cart.length;

    function handleChekout(evt){
        const items = cart.map(({id, precio,nombre, categoria, count}) => ({
            id,
            precio,
            nombre,
            categoria,
            count
        }))
        const order = {
            buyer : {
                nombre: "test",
                email: "test@gmail.com",
                telefono: 123456
            },
            items: items,
            total: getTotalItemsInCart(),
            fecha: new Date()
        }
        console.table(order)
        createOrder(order);
    }

  return (
    <>
    <h1 className='tituloCarrito'>Carrito</h1>
        {cartLength > 0 ?
                <section className='contCart'>
                    <div className='contResumen'>
                        <h2 className='tituloResumen'>Resumen</h2>
                        <Form className='contCartItems'>
                            <label className="me-3 contCardItems">
                                <h3>Nombre y Apellido</h3>
                                <input className="imputForm" type="text" name="name" />
                                <h3>Dirección</h3>
                                <input className="imputForm" type="text" name="name" />
                                <h3>Datos de la tarjeta</h3>
                                <input className="imputForm" type="text" name="name" />
                            </label>
                        </Form>
                        <button onClick={handleChekout} className="me-3 btnBasic">Enviar pedido</button>
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
                </section> :
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
)}


export default CartContainer;