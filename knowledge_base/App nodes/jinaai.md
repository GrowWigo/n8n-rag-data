# Node: Jina AI

**Name**: jinaAi
**Category**: transform
**Description**: Interact with Jina AI API
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **resource** (options): Resource
  - Option: Reader (value: reader)
  - Option: Research (value: research)
- **operation** (options): Operation
  - Option: Read (value: read)
  - Option: Search (value: search)
- **operation** (options): Operation
  - Option: Deep Research (value: deepResearch)
- **url** (string): The URL to fetch content from
- **simplify** (boolean): Whether to return a simplified version of the response instead of the raw data
- **options** (collection): Options
  - Option: outputFormat (value: undefined)
  - Option: targetSelector (value: undefined)
  - Option: excludeSelector (value: undefined)
  - Option: enableImageCaptioning (value: undefined)
  - Option: waitForSelector (value: undefined)
- **searchQuery** (string): Search Query
- **simplify** (boolean): Whether to return a simplified version of the response instead of the raw data
- **options** (collection): Options
  - Option: outputFormat (value: undefined)
  - Option: siteFilter (value: undefined)
  - Option: pageNumber (value: undefined)
- **researchQuery** (string): The topic or question for the AI to research
- **simplify** (boolean): Whether to return a simplified version of the response instead of the raw data
- **options** (collection): Options
  - Option: maxReturnedSources (value: undefined)
  - Option: prioritizeSources (value: undefined)
  - Option: excludeSources (value: undefined)
  - Option: siteFilter (value: undefined)
