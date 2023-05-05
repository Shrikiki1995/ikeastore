class FurnitureModel {
    public furnitureId: number
    public furnitureTypeId: number
    public furnitureSize: string
    public furnitureColor: string
    public furniturePrice: number

    public constructor(furnitures: FurnitureModel) {

        this.furnitureId = furnitures.furnitureId
        this.furnitureTypeId = furnitures.furnitureTypeId
        this.furnitureSize = furnitures.furnitureSize
        this.furnitureColor = furnitures.furnitureColor
        this.furniturePrice = furnitures.furniturePrice
    }
}
export default FurnitureModel