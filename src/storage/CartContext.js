import React, { useState } from 'react'
import { createContext } from "react";

export const cartContext = createContext()


function CartProvider(props) {
  const [cart, setCart] = useState([]);
  const itemsCounter = () => 
  cart.reduce((accum, item) => accum = accum + item.count, 0);

  /* generar LocalStorage carrito */

  function addToCart(item) {
    let isInCart = cart.findIndex(itemInCart => itemInCart.id === item.id)
    let newCart = cart.map((item) = item);

    if(isInCart !== -1){
      newCart[isInCart].count = newCart[isInCart].count + item.count;
      setCart(newCart)
      alert(`ya esta en el carrito, tienes ${isInCart.count} unidades`)
    }
    else{
      setCart(...cart, item);
    }
    /* let newCart = [...cart]
    newCart.push(item);
    setCart(newCart) ES ICUAL */ 
  }

  return (
    <cartContext.Provider value={{cart, addToCart, itemsCounter}}>
        {props.children}
    </cartContext.Provider>
  )
}

export default CartProvider;