import cors from "cors";
import express from "express";
import appConfig from "./2-utils/app-config";
import catchAll from "./3-middleware/catch-all";
import routeNotFound from "./3-middleware/router-not-found";
import furnituresRouter from "./6-controllers/furnitures-controller";

const server = express()

server.use(cors())

server.use(express.json())

server.use("/api",furnituresRouter)

server.use(routeNotFound)
server.use(catchAll)

server.listen(appConfig.port, () => {
    console.log(`listening on ${appConfig.frontEndUrl}`)
})