import mysql from "mysql"
import appConfig from "./app-config"

const connections = mysql.createPool({
    host: appConfig.host,
    database: appConfig.database,
    user: appConfig.user,
    password: appConfig.password
})

function execute(sql: string, values?: any[]): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        connections.query(sql, values, (err, result) => {
            if (err) {
                reject(err)
                return;
            }
            resolve(result)
        })
    })
}

export default {
    execute
}