interface HttpRequest {
    rawPath: string,
    headers: Headers | null,
    pathParameters?: PathParameters
    queryStringParameters?: QueryStringParameters
    body?: string
}

interface HttpResult {
    statusCode: number,
    body: string
}

interface Headers {
    [name: string]: string | undefined;
}

interface PathParameters {
    [name: string]: string | undefined;
}

interface QueryStringParameters {
    [name: string]: string | undefined;
}

export type APIResponse = HttpResult
export type APIRequest = HttpRequest