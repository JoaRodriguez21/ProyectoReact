import React, { useState } from 'react'
import { createContext } from "react";
import { useDeepCopy } from '../components/hooks/useDeepCopy';
import Swal from 'sweetalert2'

export const cartContext = createContext({ cart: [] })


function CartProvider(props) {
  const [cart, setCart] = useState([]);
  //Función para sumar los items en el cartWidget
  const itemsCounter = () => 
  cart.reduce((accum, item) => accum = accum + item.count, 0);
  let newCart = useDeepCopy(cart);

  /* generar LocalStorage carrito */

//Función para agregar al carrito 👌
  function addToCart(item) {
    let isInCart = cart.findIndex(itemInCart => itemInCart.id === item.id)
    let itemInCart = cart.find((prod)=> prod.id === item.id)
    console.log(isInCart)

    if(isInCart !== -1){
      newCart[isInCart].count = newCart[isInCart].count + item.count;
      setCart(newCart)
      Swal.fire({
        icon: 'success',
        title: `Tienes: "${itemInCart.count}" unidades.`,
        width: "40%",
        padding: "1rem",
        footer: `Se sumarán las unidades agregadas`,
        customClass: {
            container: 'containerSwal',
            popup: "popupSwal",
            title: 'titleSwal',
            text: "textSwal",
            confirmButton: 'btnSwal',
            confirmButtonColor:"#7B7F9D",
            footer: 'footerSwal',
        }
      })
    }
    else{
      setCart([...cart, item]);

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Item agregado al carrito',
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          container: 'containerSwal'
          
        }
      })
    }
  }

//precio total por item 👌
function totalItem(precio, count){
  let totalForItem = precio * count;
  return totalForItem;
}

//remover del carrito 👌
  function removeItem(id){
      Swal.fire({
        title: '¿Deseas eliminar el producto del carrito?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        denyButtonText: `No aplicar`,
        width: "40%",
        customClass: {
          container: 'containerSwal',
          popup: "popupSwal",
          title: 'titleSwal',
          text: "textSwal",
          confirmButton: 'btnSwalConfirm',
          confirmButtonColor:"#7B7F9D",
          cancelButton:"btnSwalCancel",
          denyButton: "btnSwalDeny",
      }
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Producto eliminado', '', 'success')

          let itemToDelete = cart.find(elem => elem.id === id)
          setCart(cart.filter((cartId) => {
          return cartId !== itemToDelete;
          }));

        } else if (result.isDenied) {
          Swal.fire('No se aplicaron los cambios', '', 'info')
        }
      })
  }

  //vaciar carrito 👌
  function clear(){
    Swal.fire({
      title: '¿Deseas vaciar el carrito?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Vaciar',
      denyButtonText: `No aplicar`,
      width: "40%",
      customClass: {
        container: 'containerSwal',
        popup: "popupSwal",
        title: 'titleSwal',
        text: "textSwal",
        confirmButton: 'btnSwalConfirm',
        confirmButtonColor:"#7B7F9D",
        cancelButton:"btnSwalCancel",
        denyButton: "btnSwalDeny",
    }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Carrito vacio', '', 'success')

        setCart([]);

      } else if (result.isDenied) {
        Swal.fire('No se aplicaron los cambios', '', 'info')
      }
    })

  }
  function clearCart(){
    setCart([]);
  }

  //total del carrito 👌
  const getTotalItemsInCart = () => {

    const totalItemsIntCart = cart.reduce((acc, el) => acc + el.precio * el.count, 0);
    return totalItemsIntCart;
}

  return (
    <cartContext.Provider value={{cart, addToCart, itemsCounter, removeItem, getTotalItemsInCart, clear, totalItem, clearCart}}>
        {props.children}
    </cartContext.Provider>
  )
}


export default CartProvider;