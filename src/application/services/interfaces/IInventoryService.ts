import {InventoryModel} from "../../../data/models/InventoryModel";

export interface IInventoryService {
    getItem(id: string, type: string): Promise<InventoryModel>
    createItem(item: InventoryModel): Promise<boolean>
}