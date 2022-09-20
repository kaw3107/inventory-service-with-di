import {inject, injectable} from 'tsyringe';
import {IInventoryService} from '../services/interfaces/IInventoryService';
import {APIRequest, APIResponse} from '../../core/common/Types';
import {ResponseWriter} from '../../core/common/ResponseWriter';
import {InventoryModel} from '../../data/models/InventoryModel';
import {v4 as uuidv4} from 'uuid';

@injectable()
export class InventoryController {
    constructor(@inject('IInventoryService') private inventoryService: IInventoryService) {
    }

    async getItem(request: APIRequest): Promise<APIResponse> {
        try {
            if (request.pathParameters && request.queryStringParameters && request.pathParameters.inventoryId && request.queryStringParameters.productId) {
                const result = await this.inventoryService.getItem(request.pathParameters.inventoryId, request.queryStringParameters.productId);
                if (result) {
                    return ResponseWriter.objectResponse(200, result);
                }
            }
            return ResponseWriter.objectResponse(400, '');
        } catch (e) {
            return ResponseWriter.objectResponse(500, '');
        }
    }

    async createItem(request: APIRequest): Promise<APIResponse> {
        try {
            if (request.body) {
                const body = JSON.parse(request.body);
                console.log(body);
                const inventoryModel: InventoryModel = {
                    ItemCount: body.ItemCount,
                    InventoryId: uuidv4(),
                    ProductId: body.ProductId
                };
                console.log(inventoryModel);
                const result = await this.inventoryService.createItem(inventoryModel);
                if (result) {
                    return ResponseWriter.objectResponse(200, 'success');
                }
            }
            return ResponseWriter.objectResponse(400, '');
        } catch (e) {
            return ResponseWriter.objectResponse(500, '');
        }
    }
}