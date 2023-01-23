import { Action } from '@remix-run/router';
import React, { useState } from 'react'
import { createContext } from "react";

export const cartContext = createContext()


function CartProvider(props) {
  const [cart, setCart] = useState([]);
  //Función para sumar los items en el cartWidget
  const itemsCounter = () => 
  cart.reduce((accum, item) => accum = accum + item.count, 0);

  /* generar LocalStorage carrito */

//Función para agregar al carrito
  function addToCart(item) {
    let isInCart = cart.findIndex(itemInCart => itemInCart.id === item.id)
    let newCart = cart.map((item) => item);

    if(isInCart !== -1){
      newCart[isInCart].count = newCart[isInCart].count + item.count;
      setCart(newCart)
      alert(`ya esta en el carrito, tienes ${isInCart.count} unidades`)
    }
    else{
      setCart([...cart, item]);
    }
  }

  function removeItem(item){
    alert(`se eliminará un producto`)    
      /* let itemToDelete = cart.find(elem => elem.id === item) */
      /* setCart([...cart, setCart(cart => cart.filter((prod) => prod.id !== item))])
      console.log(setCart) */
  }

  function clear(){
    setCart([]);
  }

  const getTotalItemsInCart = () => {
  //newCart.reduce((count, item) => item.precio + count, 0);
  /* function getTotalItemsInCart(){
    //reduce?
    let total = 0;
    newCart.reduce((count, item) => count = count.count + item.count, 0);
    //por cada producto -> total += producto.count
  } */
}

  return (
    <cartContext.Provider value={{cart, addToCart, itemsCounter,removeItem, getTotalItemsInCart, clear}}>
        {props.children}
    </cartContext.Provider>
  )
}


export default CartProvider;