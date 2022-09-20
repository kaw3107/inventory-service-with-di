import {InventoryModel} from "../../models/InventoryModel";

export interface IInventoryRepository {
    getSingle(id: string, itemType: string): Promise<InventoryModel>
    create(item: InventoryModel):Promise<boolean>
}