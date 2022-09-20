import {IInventoryRepository} from '../interfaces/IInventoryRepository';
import {inject, injectable} from 'tsyringe';
import {IDynamoStore} from '../../stores/interfaces/IDynamoStore';
import {DynamoInventoryModel, InventoryModel} from '../../models/InventoryModel';
import {Constants} from '../../../core/common/Constants';

@injectable()
export class InventoryRepository implements IInventoryRepository {
    constructor(@inject('IDynamoStore') private db: IDynamoStore) {
    }

    async create(item: InventoryModel): Promise<boolean> {
        try {
            const dynamoModel: DynamoInventoryModel = {
                PK: Constants.InventoryIdPrefix.concat(item.InventoryId),
                SK: Constants.ProductIdPrefix.concat(item.ProductId),
                InventoryId: item.InventoryId,
                ItemCount: item.ItemCount,
                ProductId: item.ProductId,
            };

            return await this.db.put(Constants.TableName, dynamoModel);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    async getSingle(id: string, itemType: string): Promise<InventoryModel> {
        try {
            const result = await this.db.getItem(Constants.TableName, Constants.InventoryIdPrefix.concat(id), Constants.ProductIdPrefix.concat(itemType));
            if (result.Item) {
                delete result.Item.PK;
                delete result.Item.SK;
                return result.Item as unknown as InventoryModel;
            }
            throw new Error(`Item not found!`);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}