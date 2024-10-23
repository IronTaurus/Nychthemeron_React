import {NavLink } from "react-router-dom";
import './TopMenu.css'
import DropdownItem from "./DropdownItem";
import React, {useState} from 'react'; 

const TopMenu = () => {
    const [open, setOpen] = useState(false);

    return(
        <>
        <nav>
            <div id="topmenu">
                <NavLink id="menu-button" to="/races">Races</NavLink>
                <NavLink id="menu-button" to="/">Home</NavLink>
                <div id="menu-button" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                    Game
                    <div className={`dropdown-menu ${open ? 'open' : 'closed'}`} >
                        <ul>
                            <DropdownItem title="Classes" path="./Game/GameClasses/GameClasses"/>
                            <DropdownItem title="Talents" path="./Game/Talents/Talents"/>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        </>
    )
}



export default TopMenu;
