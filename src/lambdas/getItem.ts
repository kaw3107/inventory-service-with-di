import {APIGatewayProxyEventV2, APIGatewayProxyResultV2, Context} from 'aws-lambda';
import {InventoryController} from '../application/controllers/InventoryController';
import {diContainer} from '../core/DI/di-registry';
import {ResponseWriter} from '../core/common/ResponseWriter';

const handler = async (event: APIGatewayProxyEventV2, context: Context): Promise<APIGatewayProxyResultV2> => {
    try {
        const controller: InventoryController = diContainer.resolve('InventoryController');
        return await controller.getItem(event);
    } catch (e) {
        console.log(e);
        return ResponseWriter.objectResponse(500, '');
    }
};
export {handler};
