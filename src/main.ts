import {InventoryController} from './application/controllers/InventoryController';
import {diContainer} from './core/DI/di-registry';
import {APIRequest} from './core/common/Types';
import {InventoryModel} from './data/models/InventoryModel';

class Main {
    constructor() {

    }

    async test() {
        const event: APIRequest = {
            body: JSON.stringify({
                ProductId: '1234',
                ItemCount: 1
            }),
            headers: {},
            rawPath: ''

        };
        const controller: InventoryController = diContainer.resolve('InventoryController');
        return await controller.createItem(event);
    }

}

const main = new Main();
const res = new Promise(() => main.test());