import express, { NextFunction, Request, Response } from "express";
import furnituresLogics from "../5-logic/furnitures-logics";
import FurnitureModel from "../4-models/furnitures-model";

const router = express.Router()

router.get("/furnitures", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const furnitures = await furnituresLogics.getAllFurnitures()
        response.json(furnitures)
    } catch (err: any) {
        next(err)
    }
})

router.post("/furnitures", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const furniture = new FurnitureModel(request.body)
        const addedFurniture = await furnituresLogics.addFurniture(furniture)
        response.status(201).json(addedFurniture)
    } catch (err: any) {
        next(err)
    }
})




export default router