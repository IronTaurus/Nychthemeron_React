import {Link } from "react-router-dom";

const TopMenu = () => {
    return(
        <>
        <nav>
            <div id="top-grid">
                <Link to="/races">Races</Link>
                <Link to="/">Home</Link>
            </div>
        </nav>

        </>
    )
}
export default TopMenu;
