import { useContext } from "react";
import { cartContext } from "../../storage/CartContext";
import ImgCarrito from "../NavBar/carrito.png";
import "./NavBar.css"
function CartWidget() {
    const { itemsCounter } = useContext(cartContext)

    return(
        <>
            <img className="navCart" src={ImgCarrito} alt="imagen del carrito" />
            <span>{itemsCounter()}</span>
        </>
    );
} 

export default CartWidget;