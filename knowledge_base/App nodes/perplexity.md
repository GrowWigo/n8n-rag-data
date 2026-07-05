# Node: Perplexity

**Name**: perplexity
**Category**: transform
**Description**: AI-powered answer engine that provides accurate, trusted, and real-time answers to any question. Supports chat completions, agent responses, web search, and embeddings.
**Version**: 1, 2

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **resource** (hidden): Resource
  - Option: Chat (value: chat)
- **resource** (options): Resource
  - Option: Agent (value: agent)
  - Option: Chat (value: chat)
  - Option: Embedding (value: embedding)
  - Option: Search (value: search)
- **operation** (options): Operation
  - Option: Create Response (value: createResponse)
- **input** (string): The input text prompt to send to the agent
- **model** (resourceLocator): The model to use. Uses provider/model format (e.g. openai/gpt-5.2). Leave empty when using a preset.
- **preset** (string): Preset name to use. Use preset OR model, not both.
- **simplify** (boolean): Whether to return only essential fields (ID, model, output text, citations)
- **options** (collection): Options
  - Option: instructions (value: undefined)
  - Option: languagePreference (value: undefined)
  - Option: maxOutputTokens (value: undefined)
  - Option: maxSteps (value: undefined)
  - Option: modelsFallback (value: undefined)
  - Option: reasoning (value: undefined)
  - Option: responseFormat (value: undefined)
  - Option: tools (value: undefined)
- **operation** (options): Operation
  - Option: Message a Model (value: complete)
- **model** (options): The model which will generate the completion
  - Option: Sonar (value: sonar)
  - Option: Sonar Deep Research (value: sonar-deep-research)
  - Option: Sonar Pro (value: sonar-pro)
  - Option: Sonar Reasoning Pro (value: sonar-reasoning-pro)
- **messages** (fixedCollection): Any optional system messages must be sent first, followed by alternating user and assistant messages
  - Option: message (value: undefined)
- **simplify** (boolean): Whether to return only essential fields (ID, citations, message)
- **options** (collection): Options
  - Option: disableSearch (value: undefined)
  - Option: enableSearchClassifier (value: undefined)
  - Option: frequencyPenalty (value: undefined)
  - Option: imageDomainFilter (value: undefined)
  - Option: imageFormatFilter (value: undefined)
  - Option: languagePreference (value: undefined)
  - Option: lastUpdatedAfter (value: undefined)
  - Option: lastUpdatedBefore (value: undefined)
  - Option: maxTokens (value: undefined)
  - Option: temperature (value: undefined)
  - Option: presencePenalty (value: undefined)
  - Option: reasoningEffort (value: undefined)
  - Option: responseFormat (value: undefined)
  - Option: returnImages (value: undefined)
  - Option: returnRelatedQuestions (value: undefined)
  - Option: searchAfterDate (value: undefined)
  - Option: searchBeforeDate (value: undefined)
  - Option: searchDomainFilter (value: undefined)
  - Option: searchLanguageFilter (value: undefined)
  - Option: searchMode (value: undefined)
  - Option: searchRecency (value: undefined)
  - Option: stop (value: undefined)
  - Option: topK (value: undefined)
  - Option: topP (value: undefined)
  - Option: webSearchOptions (value: undefined)
- **operation** (options): Operation
  - Option: Create Embedding (value: createEmbedding)
  - Option: Create Contextualized Embedding (value: createContextualized)
- **model** (options): The embedding model to use
  - Option: PPLX Embed V1 0.6B (value: pplx-embed-v1-0.6b)
  - Option: PPLX Embed V1 4B (value: pplx-embed-v1-4b)
- **input** (string): Text(s) to embed. Put each text on a separate line.
- **options** (collection): Options
  - Option: dimensions (value: undefined)
  - Option: encoding_format (value: undefined)
- **model** (options): The contextualized embedding model to use
  - Option: PPLX Embed Context V1 4B (value: pplx-embed-context-v1-4b)
- **input** (json): Array of documents, where each document is an array of paragraph strings
- **options** (collection): Options
  - Option: dimensions (value: undefined)
  - Option: encoding_format (value: undefined)
- **operation** (options): Operation
  - Option: Search (value: search)
- **query** (string): The search query string
- **simplify** (boolean): Whether to return only the ID and results array
- **options** (collection): Options
  - Option: country (value: undefined)
  - Option: lastUpdatedAfter (value: undefined)
  - Option: lastUpdatedBefore (value: undefined)
  - Option: maxResults (value: undefined)
  - Option: maxTokens (value: undefined)
  - Option: maxTokensPerPage (value: undefined)
  - Option: searchAfterDate (value: undefined)
  - Option: searchBeforeDate (value: undefined)
  - Option: searchDomainFilter (value: undefined)
  - Option: searchLanguageFilter (value: undefined)
  - Option: searchRecencyFilter (value: undefined)
