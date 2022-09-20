import {IInventoryService} from '../interfaces/IInventoryService';
import {inject, injectable} from 'tsyringe';
import {InventoryModel} from '../../../data/models/InventoryModel';
import {IInventoryRepository} from '../../../data/repositories/interfaces/IInventoryRepository';

@injectable()
export class InventoryService implements IInventoryService {
    constructor(@inject('IInventoryRepository') private inventoryRepository: IInventoryRepository) {
    }

    async createItem(item: InventoryModel): Promise<boolean> {
        try {
            return await this.inventoryRepository.create(item);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    async getItem(id: string, type: string): Promise<InventoryModel> {
        try {
            return await this.inventoryRepository.getSingle(id, type);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}