import { Link } from "react-router-dom";

const NavItem = (props) => 
<li className="nav-item textDecoration">
    <Link className="nav-link liBox" to={props.to}>{props.text}</Link>
</li>

export default NavItem;