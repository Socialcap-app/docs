# API  resources & methods

## General conventions

We follow the [JSON-RPC 2.0](https://www.jsonrpc.org/specification) convention (as used in [tRPC/HTTP RPC Specification](https://trpc.io/docs/rpc) for all its endpoints. Besides that all API requests follow usual HTTP API conventions. 

We can divide this into two categories:

- **Queries**: A procedure call that gets some data ( `GET`).

- **Mutations**: A procedure call that creates, updates, or deletes some data (`POST`).

#### Headers

- `Accept` : is always `application/json`.

- `Content-type` : is always `application/json`.
- `Authorization`: when required it MUST contain a JSON Web Token (JWT)) associated to the user session, in the format "Bearer AUTHORIZATION_TOKEN"

#### Requests, Responses and Errors

- All endpoints are of the form `/api/query/method}?params=...` or `/api/mutation/method`.

- All GET requests query params are JSON stringified.

- All POST requests body payloads are in JSON format, with the structure defined by each relevant request.

- All responses are in JSON format, with the structure defined by each relevant request.

- All error responses follow a common format and error codes described below.

### Query requests

**Request**: 

- HTTP Method: `GET`
- Endpoint:  `/api/query/method}`
- All the function call params are JSON-stringified in a query parameter `?params` as `encodeURIComponent(JSON.stringify(callParams))`. 

The resulting request will be formed using:

- Url: `/api/query/method}?params=encodeURIComponent(JSON.stringify(callParams))}`

Example:

- GET  `/api/query/get_all_communities?params={"states":["A"],"order: "popular"}`

**Response**:

All Query responses are in JSON format, with the structure defined by each relevant request.

```
class QueryResponse {
  result: {
   	start: number, 
    count: number,
  	limit: number,
		total: number,
		data: Array<Any> // 0 or more items
	},
	error: {
		code: number, // HTTP error codes
		message: string,
    text: string, // descr
    data: Map<string,string> // // Extra, customizable, meta data
	}
}
```

On success a HTTP status code `200` is returned, `result !== null ` and `error === null `.

### Mutation requests

**Request**: 

- HTTP Method: `POST`
- Endpoint:  `/api/mutation/method}`
- All the function call params are included in the body payload 

The resulting request will be formed using:

- Url: `/api/mutation/method}`
- Body: `{...callParams}`

Example:

- POST  `/api/mutation/register_new_community`

- Body (payload): 

```
{
  name: "Jaranita DAO",// a Unique name for this community
  description: "A DAO full of lazy devs",
  logo: "data:image/png;base64,iVBAA...kJggg==",
  creator_id: "B62qpH...iqYAm", // AccountId of persona creating this community
}
```

**Response**:

All Mutation responses are in JSON format, , with the structure for `data` defined by each relevant request.

```
class QueryResponse {
  result: {
    data: Any // a data object return by the server
  } 
	error: {
		code: number, // HTTP error codes
		message: string,
    data: Map<string,string> // // Extra, customizable, meta data
	}
}
```

On success a HTTP status code `200` is returned, `result !== null ` and `error === null `.

