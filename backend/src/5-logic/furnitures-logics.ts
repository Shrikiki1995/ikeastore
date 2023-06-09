import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import FurnitureModel from "../4-models/furnitures-model";
import FurnitureTypeModel from "../4-models/furnitureType-model";

async function getAllFurnitureType(): Promise<FurnitureTypeModel[]> {
    const sql = `SELECT * FROM furnituretype`

    const furnitureTypes = await dal.execute(sql)
    return furnitureTypes
}

async function getAllFurnitures(): Promise<FurnitureModel> {
    const sql =
        `
    SELECT * from furnitures
    
    `

    const furnitures = await dal.execute(sql)

    return furnitures
}

async function addFurniture(furniture: FurnitureModel): Promise<FurnitureModel> {
    const sql = `
    INSERT INTO furnitures (furnitureId, furnitureTypeId ,furnitureSize,furnitureColor,furniturePrice)VALUES (NULL, ?, ?, ?, ?);
    `
    const info: OkPacket = await dal.execute(sql, [furniture.furnitureTypeId, furniture.furnitureSize, furniture.furnitureColor, furniture.furniturePrice])
    furniture.furnitureId = info.insertId
    return furniture
}

export default {

    getAllFurnitures,
    getAllFurnitureType,
    addFurniture
}