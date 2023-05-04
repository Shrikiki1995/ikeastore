import { NextFunction, Request, Response } from "express";
import { routeNotFoundErrorModel } from "../4-models/Error-model";

function routeNotFound(request: Request, response: Response, next: NextFunction) {

    const err = new routeNotFoundErrorModel(request.originalUrl);

    next(err);
}

export default routeNotFound;
