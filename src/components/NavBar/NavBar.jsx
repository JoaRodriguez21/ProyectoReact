import logo from "../NavBar/tienda.png"
import CartWidget from "./CartWidget";
import NavItem from "./NavItem";
import "./NavBar.css"

function NavBar() {
    return(
<nav className="contNav navbar navbar-expand-lg bg-body-tertiary contNav">
  <div className="container-fluid">
    <img className="logoNav" href="/" src={logo} alt="icono de la tienda"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0 ulContent">
        <NavItem href="/Iphone" text="Iphone"/>
        <NavItem href="/Watch" text="Watch"/>
        <NavItem href="/AirPods" text="AirPods"/>
      </ul>
    </div>
  </div>
    <div>
        <CartWidget/>
    </div>
</nav>
    );
}

export default NavBar;