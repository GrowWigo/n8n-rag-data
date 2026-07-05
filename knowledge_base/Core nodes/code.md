# Node: LangChain Code

**Name**: code
**Category**: transform
**Description**: LangChain Code Node
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
"={{ ((values) => { const connectorTypes = {\"ai_chain\":\"Chain\",\"ai_document\":\"Document\",\"ai_embedding\":\"Embedding\",\"ai_languageModel\":\"Language Model\",\"ai_memory\":\"Memory\",\"ai_outputParser\":\"Output Parser\",\"ai_textSplitter\":\"Text Splitter\",\"ai_tool\":\"Tool\",\"ai_vectorStore\":\"Vector Store\",\"main\":\"Main\"}; return values.map(value => { return { type: value.type, required: value.required, maxConnections: value.maxConnections === -1 ? undefined : value.maxConnections, displayName: connectorTypes[value.type] !== 'Main' ? connectorTypes[value.type] : undefined } } ) })($parameter.inputs.input) }}"

## Outputs
"={{ ((values) => { const connectorTypes = {\"ai_chain\":\"Chain\",\"ai_document\":\"Document\",\"ai_embedding\":\"Embedding\",\"ai_languageModel\":\"Language Model\",\"ai_memory\":\"Memory\",\"ai_outputParser\":\"Output Parser\",\"ai_textSplitter\":\"Text Splitter\",\"ai_tool\":\"Tool\",\"ai_vectorStore\":\"Vector Store\",\"main\":\"Main\"}; return values.map(value => { return { type: value.type, displayName: connectorTypes[value.type] !== 'Main' ? connectorTypes[value.type] : undefined } } ) })($parameter.outputs.output) }}"

## Properties & Settings
These are the settings you can configure for this node:

- **code** (fixedCollection): Code
  - Option: execute (value: undefined)
  - Option: supplyData (value: undefined)
- **notice** (notice): You can import LangChain and use all available functionality. Debug by using <code>console.log()</code> statements and viewing their output in the browser console.
- **inputs** (fixedCollection): The input to add
  - Option: input (value: undefined)
- **outputs** (fixedCollection): The output to add
  - Option: output (value: undefined)
