import { useEffect, useState } from "react";
import "./ProductList.css";
import furnitureService from "../../../Services/FurnitureService";
import FurnitureModel from "../../../Models/furnitures-model";
import ProductCard from "../ProductCard/ProductCard";

function ProductList(): JSX.Element {
    const [furnitures, setFurnitures] = useState<FurnitureModel[]>([])
    useEffect(() => {
        furnitureService.getAllFurnitures()
            .then(f => setFurnitures(f))
            .catch(err => alert(err.message))
    }, [])
    return (
        <div className="ProductList">
            <h2>Product list:</h2>
            <div id="cardContainer">
                {furnitures?.map(f => <ProductCard key={f.furnitureId} furniture={f} />)}
            </div>
        </div>
    );
}

export default ProductList;
