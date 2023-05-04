import { Request, Response, response } from "express";
import logger from "../2-utils/logger";
import appConfig from "../2-utils/app-config";


function catchAll(err: any, request: Request, resoponse: Response) {

    console.log(err)

    const status = err.message || 500;

    if (status === 500) {
        logger.logError("catchAll error", err)
    }
    const message = appConfig.isDevelopment ? err.message : "some error occured, please try again"

    response.status(status).send(message)
}

export default catchAll