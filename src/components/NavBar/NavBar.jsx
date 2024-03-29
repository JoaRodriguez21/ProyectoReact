import logo from "../NavBar/tienda.png"
import CartWidget from "./CartWidget";
import "./NavBar.css"
import { Link } from "react-router-dom";
import NavItem from "./NavItem";


function NavBar(props) {

  function handleSubmit(evt){
    evt.preventDefault()
    let productoImput = evt.target.elements[0].value;
    props.onLogin(productoImput);

  }

    return(
<nav className="contNav navbar navbar-expand-lg bg-body-tertiary p-2">
  <div className="container-fluid">
    <Link to="/">
      <img className="logoNav" src={logo} alt="icono de la tienda"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0 ulContent">
        <NavItem to="/" text="Inicio"/>
        <NavItem to="/categoria/Iphone" text="Iphone"/>
        <NavItem to="/categoria/MacBook" text="MacBooks"/>
        <NavItem to="/categoria/Watch" text="Watch"/>
        <NavItem to="/categoria/AirPods" text="AirPods"/>
      </ul>
    <div className="cartContainer">
      <Link to="/cart">
        <CartWidget/>
      </Link>
    </div>
    </div>
  </div>
</nav>
    );
}

export default NavBar;