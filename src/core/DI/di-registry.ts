import 'reflect-metadata';
import {container, Lifecycle} from 'tsyringe';
import {DynamoStore} from '../../data/stores/implementations/DynamoStore';
import {InventoryRepository} from '../../data/repositories/implementations/InventoryRepository';
import {InventoryService} from '../../application/services/implementations/InventoryService';
import {InventoryController} from '../../application/controllers/InventoryController';

container.registerSingleton('IDynamoStore', DynamoStore);

container.register('IInventoryRepository', InventoryRepository);
container.register('IInventoryService', InventoryService);
container.register('InventoryController', InventoryController);

export const diContainer = container;