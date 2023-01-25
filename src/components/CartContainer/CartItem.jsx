import React, { useContext } from 'react'
import { cartContext } from '../../storage/CartContext';
import "./cartContainer.css"



function CartItem(props) {
    const {imgurl, nombre, precio, count, id } = props.item
    const {removeItem, totalItem} = useContext(cartContext)
  return (
    <section className='itemInCart'>
        <div className='contButtonX'>
            <div>
                <button onClick={() => removeItem(id)} className='btn btn-danger'>✖</button>
            </div>
        </div>
        <div className='contItemCart'>
            <div className='me-3 contImgCart'>
                <img src={imgurl} className="card-img-top imgCartProducto" alt="" />
            </div>
            <div className='me-3 shadowItems'>
                <h3>Producto:<br/>{nombre}</h3>
            </div>
            <div className='me-3 shadowItems'>
                <h3>Precio:<br/> ${precio} USD</h3>
            </div>
            <div className='me-3 shadowItems'>
                <h3 className=''>Cantidad:<br/> {count}</h3>
            </div>
            <div>
                <h3>Total:<br/>${totalItem(precio, count)} USD</h3>
            </div>
        </div>
    </section>
  )
}
export default CartItem;
