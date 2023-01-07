import ImgCarrito from "../NavBar/carrito.png";
import "./NavBar.css"
function CartWidget() {
    return(
        <img className="navCart" src={ImgCarrito} alt="imagen del carrito" />
    );
} 

export default CartWidget;