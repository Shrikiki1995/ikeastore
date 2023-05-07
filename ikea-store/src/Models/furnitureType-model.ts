class FurnitureTypeModel {
    public furnitureTypeId: number
    public furnitureTypeName: string

    public constructor(furniture: FurnitureTypeModel) {
        this.furnitureTypeId = furniture.furnitureTypeId
        this.furnitureTypeName = furniture.furnitureTypeName
    }
}
export default FurnitureTypeModel