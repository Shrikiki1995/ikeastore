import { useEffect, useState } from "react";
import "./AddProduct.css";
import FurnitureTypeModel from "../../../Models/furnitureType-model";
import { useForm } from "react-hook-form";
import furnitureService from "../../../Services/FurnitureService";
import FurnitureModel from "../../../Models/furnitures-model";

function AddProduct(): JSX.Element {
    const [furnitureTypes, setFurnitureTypes] = useState<FurnitureTypeModel[]>([])

    const { register, handleSubmit } = useForm<FurnitureModel>()

    useEffect(() => {
        furnitureService.getAllFurnituresType()
            .then(fy => setFurnitureTypes(fy))
            .catch(err => alert(err.message))
    }, [])

    async function send(furniture: FurnitureModel) {
        try {
            console.log(furniture)
            await furnitureService.AddNewFurniture(furniture)
            alert("Furniture added!")
            
        } catch (err: any) {
            alert(err.message)
        }
    }
    return (
        <div className="AddProduct">
            <h2>Add furniture</h2>
            <form onSubmit={handleSubmit(send)} >

                <label>FurnitureType</label>
                <select defaultValue="" {...register("furnitureTypeId")} required>
                    <option disabled value="">Select...</option>
                    {furnitureTypes.map(f =>
                        <option key={f.furnitureTypeId} value={f.furnitureTypeId}>
                            {f.furnitureTypeName}
                        </option>
                    )}
                </select>

                <label>Dismonsions</label>
                <input type="text" {...register("furnitureSize")}></input>

                <label>Color</label>
                <input type="text" {...register("furnitureColor")}></input>

                <label>Price</label>
                <input type="text" {...register("furniturePrice")}></input>

                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddProduct;
