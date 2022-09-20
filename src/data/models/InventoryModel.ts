export interface InventoryModel {
    InventoryId: string;
    ProductId: string;
    ItemCount: number;
}

export interface DynamoInventoryModel {
    PK: string;
    SK: string;
    InventoryId: string;
    ProductId: string;
    ItemCount: number;
}