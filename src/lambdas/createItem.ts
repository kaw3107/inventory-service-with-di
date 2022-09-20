import {diContainer} from '../core/DI/di-registry';
import {ResponseWriter} from '../core/common/ResponseWriter';
import {InventoryController} from '../application/controllers/InventoryController';
import {APIGatewayProxyEventV2, APIGatewayProxyResultV2, Context} from 'aws-lambda';

const handler = async (event: APIGatewayProxyEventV2, context: Context): Promise<APIGatewayProxyResultV2> => {
    try {
        const controller: InventoryController = diContainer.resolve('InventoryController');
        return await controller.createItem(event);
    } catch (e) {
        return ResponseWriter.objectResponse(500, '');
    }
};

export {handler};
