const NavItem = (props) => 
<li className="nav-item">
    <a className="nav-link liBox" href={props.href}>{props.text}</a>
</li>

export default NavItem;