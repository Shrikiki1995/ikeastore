import cors from "cors";
import express from "express";
import appConfig from "./2-utils/app-config";

const server = express()

server.use(cors({ "origin": appConfig.frontEndUrl }))

server.use(express.json())

server.listen(appConfig.port, () => {
    console.log(`listening on ${appConfig.frontEndUrl}`)
})