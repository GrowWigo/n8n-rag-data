# Node: Databricks

**Name**: databricks
**Category**: transform
**Description**: Interact with Databricks API
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **authentication** (options): Authentication
  - Option: Access Token (value: accessToken)
  - Option: OAuth2 (value: oAuth2)
- **resource** (options): Resource
  - Option: Databricks SQL (value: databricksSql)
  - Option: File (value: files)
  - Option: Genie (value: genie)
  - Option: Model Serving (value: modelServing)
  - Option: Unity Catalog (value: unityCatalog)
  - Option: Vector Search (value: vectorSearch)
- **operation** (options): Operation
  - Option: Create Directory (value: createDirectory)
  - Option: Delete Directory (value: deleteDirectory)
  - Option: Delete File (value: deleteFile)
  - Option: Download File (value: downloadFile)
  - Option: Get File Metadata (value: getFileInfo)
  - Option: List Directory (value: listDirectory)
  - Option: Upload File (value: uploadFile)
- **operation** (options): Operation
  - Option: Create Conversation Message (value: createMessage)
  - Option: Execute Message SQL Query (value: executeMessageQuery)
  - Option: Get Conversation Message (value: getMessage)
  - Option: Get Genie Space (value: getSpace)
  - Option: Get Query Results (value: getQueryResults)
  - Option: Start Conversation (value: startConversation)
- **operation** (options): Operation
  - Option: Create Catalog (value: createCatalog)
  - Option: Create Function (value: createFunction)
  - Option: Create Table (value: createTable)
  - Option: Create Volume (value: createVolume)
  - Option: Delete Catalog (value: deleteCatalog)
  - Option: Delete Function (value: deleteFunction)
  - Option: Delete Table (value: deleteTable)
  - Option: Delete Volume (value: deleteVolume)
  - Option: Get Catalog (value: getCatalog)
  - Option: Get Function (value: getFunction)
  - Option: Get Table (value: getTable)
  - Option: Get Volume (value: getVolume)
  - Option: List Catalogs (value: listCatalogs)
  - Option: List Functions (value: listFunctions)
  - Option: List Tables (value: listTables)
  - Option: List Volumes (value: listVolumes)
  - Option: Update Catalog (value: updateCatalog)
- **operation** (options): Operation
  - Option: Execute Query (value: executeQuery)
- **operation** (options): Operation
  - Option: Query Endpoint (value: queryEndpoint)
- **operation** (options): Operation
  - Option: Create Index (value: createIndex)
  - Option: Get Index (value: getIndex)
  - Option: List Indexes (value: listIndexes)
  - Option: Query Index (value: queryIndex)
- **volumePath** (string): Full path to the volume in format: catalog.schema.volume
- **filePath** (string): Path to the file within the volume (e.g. "folder/file.txt" or "file.txt"). Do not include leading slash.
- **dataFieldName** (string): Name of the field from input that contains the binary data to be uploaded
- **directoryPath** (string): Path to directory within the volume (e.g. "folder1" or "folder1/subfolder"). Do not include leading slash.
- **directoryPath** (string): Path to directory within the volume (e.g. "folder1" or "folder1/subfolder"). Leave empty to list the volume root. Do not include leading slash.
- **additionalFields** (collection): Additional Fields
  - Option: pageSize (value: undefined)
  - Option: pageToken (value: undefined)
  - Option: overwrite (value: undefined)
- **spaceId** (string): The ID of the Genie space
- **conversationId** (string): The ID of the conversation
- **messageId** (string): The ID of the message
- **attachmentId** (string): The ID of the message attachment
- **message** (string): The message to be sent to Genie Space
- **initialMessage** (string): The initial message to start the conversation
- **catalogName** (resourceLocator): The catalog to use
- **catalogName** (resourceLocator): Filter by catalog (optional)
- **schemaName** (resourceLocator): The schema to use
- **schemaName** (resourceLocator): Filter by schema (optional, requires catalog)
- **fullName** (resourceLocator): The table to access
- **fullName** (resourceLocator): The function to access
- **volumeName** (string): Name of the volume
- **volumeType** (options): The type of volume to create
  - Option: Managed (value: MANAGED)
  - Option: External (value: EXTERNAL)
- **functionName** (string): Name of the function to create
- **inputParams** (json): Array of input parameters. Each parameter requires name, type_name, and type_text.
- **returnType** (string): The return type of the function (e.g., STRING, INT, DOUBLE)
- **routineBody** (string): The language of the function body
- **routineDefinition** (string): The function body (SQL expression)
- **comment** (string): Optional comment or description
- **additionalFields** (collection): Additional Fields
  - Option: comment (value: undefined)
  - Option: storage_location (value: undefined)
- **tableName** (string): Name of the table to create
- **storageLocation** (string): External storage root URL for the table. The Create Table API only supports external Delta tables.
- **tableAdditionalFields** (collection): Additional Fields
  - Option: columns (value: undefined)
  - Option: comment (value: undefined)
- **warehouseId** (resourceLocator): The SQL warehouse to use
- **query** (string): SQL query to execute
- **queryParameters** (fixedCollection): Named parameters for the query. Reference them in your SQL as <code>:name</code>, e.g. <code>WHERE ID = :user_id</code>.
  - Option: parameters (value: undefined)
- **endpointName** (resourceLocator): The model serving endpoint to query. The input format will be automatically detected from the endpoint schema. The node will fetch the endpoint's OpenAPI schema to determine the correct invocation URL.
- **requestBody** (json): Request body in JSON format. The node automatically detects the expected format from the endpoint's OpenAPI schema and validates your input at runtime.
- **indexName** (string): Name of the vector search index
- **endpointName** (string): Name of the vector search endpoint
- **primaryKey** (string): Primary key column of the index
- **indexType** (options): Type of vector search index to create
  - Option: Delta Sync (value: DELTA_SYNC)
  - Option: Direct Access (value: DIRECT_ACCESS)
- **deltaSyncIndexSpec** (json): Specification for the Delta Sync index
- **directAccessIndexSpec** (json): Specification for the Direct Access index
- **queryType** (options): Type of query to perform
  - Option: Text Query (value: text)
  - Option: Vector Query (value: vector)
- **queryText** (string): Text to search for (will be automatically converted to embeddings)
- **queryVector** (json): Vector embeddings to search for similar vectors (array of numbers)
- **searchMode** (options): Search algorithm to use
  - Option: Hybrid (value: HYBRID)
  - Option: ANN (Approximate Nearest Neighbor) (value: ANN)
- **columns** (string): Comma-separated list of column names to return in results (e.g., "content,URL,title")
- **numResults** (number): Maximum number of results to return
- **enableReranking** (boolean): Whether to rerank results using a reranker model for improved relevance
- **rerankerModel** (string): Name of the reranker model to use
- **columnsToRerank** (string): Comma-separated list of columns to use for reranking (e.g., "content,title")
- **options** (collection): Options
  - Option: filterExpression (value: undefined)
  - Option: scoreThreshold (value: undefined)
