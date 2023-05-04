export class ErrorModel {
    public constructor(public message: string, public status: number) {

    }
}
export class routeNotFoundErrorModel extends ErrorModel {
    public constructor(public port: string) {
        super(`Router ${port} not found`, 404)

    }
}
export class ResourceNotFoundError extends ErrorModel {
    public constructor(public id: number) {
        super(`id ${id} not exist`, 404)
    }
}
export class UnautorizedError extends ErrorModel {
    public constructor(public message: string) {
        super(message, 401)
    }
}
