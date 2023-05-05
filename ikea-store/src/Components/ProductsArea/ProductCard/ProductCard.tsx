import FurnitureModel from "../../../Models/furnitures-model";
import "./ProductCard.css";

interface FurnitureCardInterface {
    furniture: FurnitureModel
}
function ProductCard(props: FurnitureCardInterface): JSX.Element {
    return (
        <div className="ProductCard">
            <h3>{props.furniture.furnitureTypeId}</h3>
            <h3>{props.furniture.furnitureSize}</h3>
            <h3>{props.furniture.furnitureColor}</h3>
            <h3>{props.furniture.furniturePrice}</h3>
        </div>
    );
}

export default ProductCard;
