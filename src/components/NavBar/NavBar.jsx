import logo from "../NavBar/tienda.png"
import CartWidget from "./CartWidget";
import NavItem from "./NavItem";
import "./NavBar.css"
import DropCategories from "./ButtonCategories";

function NavBar() {
    return(
        <nav className="contNav">
            <img src={logo} alt="icono de la tienda" />
            <div>
                <ul className="ulContent">
                    <NavItem href="/Notebooks" text="Notebooks"/>
                    <NavItem href="/Desktop" text="Desktop"/>
                    <NavItem href="/Office" text="Office"/>
                    <NavItem href="/Gamers" text="Gamers"/>
                    <NavItem href="/Desing" text="Desing"/>
                    <DropCategories></DropCategories>
                </ul>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    );
}

export default NavBar;