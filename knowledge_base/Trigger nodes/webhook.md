# Node: Webhook

**Name**: webhook
**Category**: trigger
**Description**: Starts the workflow when a webhook is called
**Version**: 1, 1.1, 2, 2.1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
"={{((parameters) => {\n    const httpMethod = parameters.httpMethod;\n    if (!Array.isArray(httpMethod))\n        return [\n            {\n                type: 'main',\n                displayName: httpMethod,\n            },\n        ];\n    const outputs = httpMethod.map((method) => {\n        return {\n            type: 'main',\n            displayName: method,\n        };\n    });\n    return outputs;\n})($parameter)}}"

## Properties & Settings
These are the settings you can configure for this node:

- **multipleMethods** (boolean): Whether to allow the webhook to listen for multiple HTTP methods
- **httpMethod** (options): The HTTP method to listen to
  - Option: DELETE (value: DELETE)
  - Option: GET (value: GET)
  - Option: HEAD (value: HEAD)
  - Option: PATCH (value: PATCH)
  - Option: POST (value: POST)
  - Option: PUT (value: PUT)
- **httpMethod** (multiOptions): The HTTP methods to listen to
  - Option: DELETE (value: DELETE)
  - Option: GET (value: GET)
  - Option: HEAD (value: HEAD)
  - Option: PATCH (value: PATCH)
  - Option: POST (value: POST)
  - Option: PUT (value: PUT)
- **path** (string): The path to listen to, dynamic values could be specified by using ':', e.g. 'your-path/:dynamic-value'. If dynamic values are set 'webhookId' would be prepended to path.
- **authentication** (options): The way to authenticate
  - Option: Basic Auth (value: basicAuth)
  - Option: Header Auth (value: headerAuth)
  - Option: JWT Auth (value: jwtAuth)
  - Option: None (value: none)
- **responseMode** (options): When and how to respond to the webhook
  - Option: Immediately (value: onReceived)
  - Option: When Last Node Finishes (value: lastNode)
  - Option: Using 'Respond to Webhook' Node (value: responseNode)
- **responseMode** (options): When and how to respond to the webhook
  - Option: Immediately (value: onReceived)
  - Option: When Last Node Finishes (value: lastNode)
  - Option: Using 'Respond to Webhook' Node (value: responseNode)
  - Option: Streaming (value: streaming)
- **webhookNotice** (notice): Insert a 'Respond to Webhook' node to control when and how you respond. <a href="https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.respondtowebhook/" target="_blank">More details</a>
- **webhookStreamingNotice** (notice): Insert a node that supports streaming (e.g. 'AI Agent') and enable streaming to stream directly to the response while the workflow is executed. <a href="https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.respondtowebhook/" target="_blank">More details</a>
- **responseCode** (number): The HTTP Response code to return
- **responseData** (options): What data should be returned. If it should return all items as an array or only the first item as object.
  - Option: All Entries (value: allEntries)
  - Option: First Entry JSON (value: firstEntryJson)
  - Option: First Entry Binary (value: firstEntryBinary)
  - Option: No Response Body (value: noData)
- **responseBinaryPropertyName** (string): Name of the binary property to return
- **contentTypeNotice** (notice): If you are sending back a response, add a "Content-Type" response header with the appropriate value to avoid unexpected behavior
- **options** (collection): Options
  - Option: binaryData (value: undefined)
  - Option: binaryPropertyName (value: undefined)
  - Option: ignoreBots (value: undefined)
  - Option: ipWhitelist (value: undefined)
  - Option: noResponseBody (value: undefined)
  - Option: responsePropertyName (value: undefined)
  - Option: binaryPropertyName (value: undefined)
  - Option: rawBody (value: undefined)
  - Option: rawBody (value: undefined)
  - Option: responseCode (value: undefined)
  - Option: responseContentType (value: undefined)
  - Option: responseData (value: undefined)
  - Option: responseHeaders (value: undefined)
