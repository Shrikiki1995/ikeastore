import axios from "axios"
import FurnitureModel from "../Models/furnitures-model"
import appConfig from "../Utils/AppConfig"

class FurnitureService {
    public async getAllFurnitures(): Promise<FurnitureModel[]> {
        const response = await axios.get<FurnitureModel[]>(appConfig.GetFurnituresUrl)
        const furnitures = response.data
        return furnitures
    }
}
const furnitureService = new FurnitureService()
export default furnitureService