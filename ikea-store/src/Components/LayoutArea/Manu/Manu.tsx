import { NavLink } from "react-router-dom";
import "./Manu.css";

function Manu(): JSX.Element {
    return (
        <div className="Manu">
            <ul>
                <NavLink to="/furniturelist">Furniture List</NavLink>
                <span>  ||  </span>
                <NavLink to="/home">Home</NavLink>
                <span>  ||  </span>
                <NavLink to="/furnitureAdd"> Add furniture</NavLink>
            </ul>
        </div>
    );
}

export default Manu;
