# Node: Facebook Graph API

**Name**: facebookGraphApi
**Category**: transform
**Description**: Interacts with Facebook using the Graph API
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **hostUrl** (options): The Host URL of the request. Almost all requests are passed to the graph.facebook.com host URL. The single exception is video uploads, which use graph-video.facebook.com.
  - Option: Default (value: graph.facebook.com)
  - Option: Video Uploads (value: graph-video.facebook.com)
- **httpRequestMethod** (options): The HTTP Method to be used for the request
  - Option: GET (value: GET)
  - Option: POST (value: POST)
  - Option: DELETE (value: DELETE)
- **graphApiVersion** (options): The version of the Graph API to be used in the request
  - Option: Default (value: )
  - Option: v23.0 (value: v23.0)
  - Option: v22.0 (value: v22.0)
  - Option: v21.0 (value: v21.0)
  - Option: v20.0 (value: v20.0)
  - Option: v19.0 (value: v19.0)
  - Option: v18.0 (value: v18.0)
  - Option: v17.0 (value: v17.0)
  - Option: v16.0 (value: v16.0)
  - Option: v15.0 (value: v15.0)
  - Option: v14.0 (value: v14.0)
  - Option: v13.0 (value: v13.0)
  - Option: v12.0 (value: v12.0)
  - Option: v11.0 (value: v11.0)
  - Option: v10.0 (value: v10.0)
  - Option: v9.0 (value: v9.0)
  - Option: v8.0 (value: v8.0)
  - Option: v7.0 (value: v7.0)
  - Option: v6.0 (value: v6.0)
  - Option: v5.0 (value: v5.0)
  - Option: v4.0 (value: v4.0)
  - Option: v3.3 (value: v3.3)
  - Option: v3.2 (value: v3.2)
  - Option: v3.1 (value: v3.1)
  - Option: v3.0 (value: v3.0)
- **node** (string): The node on which to operate. A node is an individual object with a unique ID. For example, there are many User node objects, each with a unique ID representing a person on Facebook.
- **edge** (string): Edge of the node on which to operate. Edges represent collections of objects which are attached to the node.
- **allowUnauthorizedCerts** (boolean): Whether to connect even if SSL certificate validation is not possible
- **sendBinaryData** (boolean): Whether binary data should be sent as body
- **binaryPropertyName** (string): For Form-Data Multipart, they can be provided in the format: <code>"sendKey1:binaryProperty1,sendKey2:binaryProperty2</code>
- **options** (collection): Options
  - Option: fields (value: undefined)
  - Option: queryParameters (value: undefined)
  - Option: queryParametersJson (value: undefined)
