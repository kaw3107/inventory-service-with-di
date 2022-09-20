import {GetItemCommandOutput} from '@aws-sdk/client-dynamodb';

export interface IDynamoStore {
    getItem(tableName: string, PK: string, SK: string): Promise<GetItemCommandOutput>;

    put(tableName: string, item: { [key: string]: any }): Promise<boolean>;
}