import {NavLink } from "react-router-dom";
import './TopMenu.css'
import DropdownItem from "./DropdownItem";
import React, {useState} from 'react'; 

const TopMenu = () => {
    const [game, openGame] = useState(false);
    const [rules, openRules] = useState(false);
    const [tools, openTools] = useState(false);

    return(
        <>
        <nav>
            <div id="topmenu">
                <NavLink id="menu-button" to="/races">Races</NavLink>
                <NavLink id="menu-button" to="/">Home</NavLink>
                <div id="menu-button" onMouseEnter={() => openGame(true)} onMouseLeave={() => openGame(false)}>
                    Game
                    <div className={`dropdown-menu ${game ? 'open' : 'closed'}`} >
                        <ul>
                            <DropdownItem title="Classes" path="/gameclasses"/>
                            <DropdownItem title="Talents" path="./talents"/>
                            <DropdownItem title="Characters" path="./characters"/>
                        </ul>
                    </div>
                </div>
                <div id="menu-button" onMouseEnter={() => openRules(true)} onMouseLeave={() => openRules(false)}>
                    Rules
                    <div className={`dropdown-menu ${rules ? 'open' : 'closed'}`} >
                        <ul>
                            <DropdownItem title="Basic" path="/basicrules"/>
                            <DropdownItem title="Combat" path="/combatrules"/>
                        </ul>
                    </div>
                </div>
                <div id="menu-button" onMouseEnter={() => openTools(true)} onMouseLeave={() => openTools(false)}>
                    Tools
                    <div className={`dropdown-menu ${tools ? 'open' : 'closed'}`} >
                        <ul>
                            <DropdownItem title="CardGen" path="/cardgen"/>
                            <DropdownItem title="CombatTracker" path="/combattracker"/>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        </>
    )
}



export default TopMenu;
