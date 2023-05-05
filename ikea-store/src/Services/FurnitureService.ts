import axios from "axios"
import FurnitureModel from "../Models/furnitures-model"
import appConfig from "../Utils/AppConfig"
import FurnitureTypeModel from "../Models/furnitureType-model"

class FurnitureService {
    // Get all furnitures Types
    public async getAllFurnituresType(): Promise<FurnitureTypeModel[]> {
        const response = await axios.get<FurnitureTypeModel[]>(appConfig.getAllFurnitureTypes)
        const furnituresType = response.data
        return furnituresType
    }


    // Get all furnitures
    public async getAllFurnitures(): Promise<FurnitureModel[]> {
        const response = await axios.get<FurnitureModel[]>(appConfig.getFurnituresUrl)
        const furnitures = response.data
        return furnitures
    }

    // Post New Furniture
    public async AddNewFurniture(furniture: FurnitureModel): Promise<void> {
        await axios.post<FurnitureModel>(appConfig.getFurnituresUrl, furniture)
    }
}
const furnitureService = new FurnitureService()
export default furnitureService