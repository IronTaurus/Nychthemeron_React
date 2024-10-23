import {NavLink } from "react-router-dom";
import './TopMenu.css';

const DropdownItem = (props) => {
    return(
        <li>
            <NavLink id="dropdown-item" to={props.path}>{props.title}</NavLink>
        </li> 
    )
}

export default DropdownItem;