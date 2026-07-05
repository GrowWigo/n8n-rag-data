# Node: GraphQL

**Name**: graphql
**Category**: input
**Description**: Makes a GraphQL request and returns the received data
**Version**: 1, 1.1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **authentication** (options): The way to authenticate
  - Option: Basic Auth (value: basicAuth)
  - Option: Custom Auth (value: customAuth)
  - Option: Digest Auth (value: digestAuth)
  - Option: Header Auth (value: headerAuth)
  - Option: None (value: none)
  - Option: OAuth1 (value: oAuth1)
  - Option: OAuth2 (value: oAuth2)
  - Option: Query Auth (value: queryAuth)
- **requestMethod** (options): The underlying HTTP request method to use
  - Option: GET (value: GET)
  - Option: POST (value: POST)
- **endpoint** (string): The GraphQL endpoint
- **allowUnauthorizedCerts** (boolean): Whether to download the response even if SSL certificate validation is not possible
- **requestFormat** (options): The format for the query payload
  - Option: GraphQL (Raw) (value: graphql)
  - Option: JSON (value: json)
- **requestFormat** (options): The request format for the query payload
  - Option: JSON (Recommended) (value: json)
  - Option: GraphQL (Raw) (value: graphql)
- **query** (string): GraphQL query
- **variables** (json): Query variables as JSON object
- **operationName** (string): Name of operation to execute
- **responseFormat** (options): The format in which the data gets returned from the URL
  - Option: JSON (value: json)
  - Option: String (value: string)
- **dataPropertyName** (string): Name of the property to which to write the response data
- **headerParametersUi** (fixedCollection): The headers to send
  - Option: parameter (value: undefined)
