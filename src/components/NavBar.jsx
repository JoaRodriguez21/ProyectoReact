import CartImg from "../components/CartWidget"
import logo from "../img/tienda.png"

function NavBar() {
    return(
        <nav className="contNav">
            <img src={logo} alt="" />
            <div>
                <ul>
                    <li>Escritorio</li>
                    <li>Oficina</li>
                    <li>Estudios</li>
                    <li>Diseño</li>
                    <li>Gamers</li>
                    <li>Notebooks</li>
                </ul>
            </div>
            <div>
                {CartImg}
            </div>
        </nav>
    );
}

export default NavBar;