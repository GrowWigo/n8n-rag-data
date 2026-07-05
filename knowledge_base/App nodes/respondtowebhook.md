# Node: Respond to Webhook

**Name**: respondToWebhook
**Category**: transform
**Description**: Returns data for Webhook
**Version**: 1, 1.1, 1.2, 1.3, 1.4, 1.5

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
"={{((version, parameters) => {\n    const multipleOutputs = version === 1.3 || (version >= 1.4 && parameters.enableResponseOutput);\n    if (multipleOutputs) {\n        return [\n            {\n                type: 'main',\n                displayName: 'Input Data',\n            },\n            {\n                type: 'main',\n                displayName: 'Response',\n            },\n        ];\n    }\n    return ['main'];\n})($nodeVersion, $parameter)}}"

## Properties & Settings
These are the settings you can configure for this node:

- **enableResponseOutput** (boolean): Whether to provide an additional output branch with the response sent to the webhook
- **generalNotice** (notice): Verify that the "Webhook" node's "Respond" parameter is set to "Using Respond to Webhook Node". <a href="https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.respondtowebhook/" target="_blank">More details
- **respondWith** (options): The data that should be returned
  - Option: All Incoming Items (value: allIncomingItems)
  - Option: Binary File (value: binary)
  - Option: First Incoming Item (value: firstIncomingItem)
  - Option: JSON (value: json)
  - Option: JWT Token (value: jwt)
  - Option: No Data (value: noData)
  - Option: Redirect (value: redirect)
  - Option: Text (value: text)
- **respondWith** (options): The data that should be returned
  - Option: All Incoming Items (value: allIncomingItems)
  - Option: Binary File (value: binary)
  - Option: First Incoming Item (value: firstIncomingItem)
  - Option: JSON (value: json)
  - Option: JWT Token (value: jwt)
  - Option: No Data (value: noData)
  - Option: Redirect (value: redirect)
  - Option: Text (value: text)
- **credentials** (credentials): Credentials
- **webhookNotice** (notice): When using expressions, note that this node will only run for the first item in the input data
- **redirectURL** (string): The URL to redirect to
- **responseBody** (json): The HTTP response JSON data
- **payload** (json): The payload to include in the JWT token
- **responseBody** (string): The HTTP response text data
- **responseDataSource** (options): Response Data Source
  - Option: Choose Automatically From Input (value: automatically)
  - Option: Specify Myself (value: set)
- **inputFieldName** (string): The name of the node input field with the binary data
- **contentTypeNotice** (notice): To avoid unexpected behavior, add a "Content-Type" response header with the appropriate value
- **options** (collection): Options
  - Option: responseCode (value: undefined)
  - Option: responseHeaders (value: undefined)
  - Option: responseKey (value: undefined)
  - Option: enableStreaming (value: undefined)
