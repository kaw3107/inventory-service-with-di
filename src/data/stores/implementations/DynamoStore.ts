import {IDynamoStore} from '../interfaces/IDynamoStore';
import {DynamoDBClient, GetItemCommand, GetItemCommandOutput, PutItemCommand} from '@aws-sdk/client-dynamodb';
import {marshall, unmarshall} from '@aws-sdk/util-dynamodb';

export class DynamoStore implements IDynamoStore {
    private readonly _dynamoClient: DynamoDBClient;

    constructor() {
        this._dynamoClient = new DynamoDBClient({});
    }

    async put(tableName: string, item: { [key: string]: any }): Promise<boolean> {
        try {
            const command = new PutItemCommand({
                TableName: tableName,
                Item: marshall(item),
            });
            const commandOutput = await this._dynamoClient.send(command);
            return commandOutput.$metadata.httpStatusCode === 200;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    async getItem(tableName: string, PK: string, SK: string): Promise<GetItemCommandOutput> {
        try {
            const command = new GetItemCommand({
                TableName: tableName,
                Key: {
                    PK: {S: PK},
                    SK: {S: SK}

                }
            });
            const result = await this._dynamoClient.send(command);
            if (result.Item) {
                result.Item = unmarshall(result.Item);
            }
            return result;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}