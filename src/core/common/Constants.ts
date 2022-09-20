export abstract class Constants {
    // Microservice Attributes
    static ServiceName: string = 'INVENTORY_SERVICE';
    static TableName: string = process.env.TABLE_NAME!;

    static InventoryIdPrefix: string = 'INV#';
    static ProductIdPrefix: string = 'PROD#';
}