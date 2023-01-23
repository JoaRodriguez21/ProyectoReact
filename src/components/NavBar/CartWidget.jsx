import { useContext } from "react";
import { cartContext } from "../../storage/CartContext";
import ImgCarrito from "../NavBar/carrito.png";
import "./NavBar.css"
function CartWidget() {
    const { itemsCounter, cart } = useContext(cartContext)

    return(
        <div className="contImgSpan">
            <img className="navCart" src={ImgCarrito} alt="imagen del carrito" />
            {
                cart.length > 0 && <span className="spanItemCount">{`(${itemsCounter()})`}</span>
            }
                
        </div>
    );
} 

export default CartWidget;