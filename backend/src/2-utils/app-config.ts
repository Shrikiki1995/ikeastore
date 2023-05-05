class AppConfig {

}

class DevelopmentConfig extends AppConfig {
    public isDevelopment = true
    public isProduction = false
    public host = ""
    public user = "root"
    public password = ""
    public database = "ikeastore"
    public port = "3001"
    public frontEndUrl = `http://localhost:3000/`
}
class ProductionConfig extends AppConfig {
    public isDevelopment = false
    public isProduction = true
    public host = ""
    public user = ""
    public password = ""
    public database = ""
    public port = "0"
    public frontEndUrl = ""
}

const appConfig = (process.env.NODE_ENV === "production") ? new ProductionConfig() : new DevelopmentConfig()

export default appConfig