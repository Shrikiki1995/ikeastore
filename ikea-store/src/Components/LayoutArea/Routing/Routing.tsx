import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import Home from "../../HomeArea/Home/Home";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/furniturelist" element={<ProductList />}></Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="/furnitureAdd" element={<AddProduct />}></Route>
            </Routes>
        </div>
    );
}

export default Routing;
