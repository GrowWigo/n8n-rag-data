# Node: OpenAI

**Name**: openAi
**Category**: transform
**Description**: Consume Open AI
**Version**: 1, 1.1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **oldVersionNotice** (notice): <strong>New node version available:</strong> get the latest version with added features from the nodes panel.
- **resource** (options): Resource
  - Option: Chat (value: chat)
  - Option: Image (value: image)
  - Option: Text (value: text)
- **operation** (options): Operation
  - Option: Complete (value: complete)
- **model** (options): The model which will generate the completion. <a href="https://beta.openai.com/docs/models/overview">Learn more</a>.
- **chatModel** (options): The model which will generate the completion. <a href="https://beta.openai.com/docs/models/overview">Learn more</a>.
- **prompt** (fixedCollection): Prompt
  - Option: messages (value: undefined)
- **simplifyOutput** (boolean): Whether to return a simplified version of the response instead of the raw data
- **options** (collection): Additional options to add
  - Option: echo (value: undefined)
  - Option: frequency_penalty (value: undefined)
  - Option: maxTokens (value: undefined)
  - Option: n (value: undefined)
  - Option: presence_penalty (value: undefined)
  - Option: temperature (value: undefined)
  - Option: topP (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
- **prompt** (string): A text description of the desired image(s). The maximum length is 1000 characters.
- **model** (options): The model to use for image generation
- **imageModel** (options): The model to use for image generation
- **responseFormat** (options): The format in which to return the image(s)
  - Option: Binary File (value: binaryData)
  - Option: Image Url (value: imageUrl)
- **options** (collection): Additional options to add
  - Option: n (value: undefined)
  - Option: quality (value: undefined)
  - Option: size (value: undefined)
  - Option: size (value: undefined)
  - Option: style (value: undefined)
- **operation** (options): Operation
  - Option: Complete (value: complete)
  - Option: Edit (value: edit)
  - Option: Moderate (value: moderate)
- **model** (options): The model which will generate the completion. <a href="https://beta.openai.com/docs/models/overview">Learn more</a>.
- **prompt** (string): The prompt to generate completion(s) for
- **model** (options): The model which will generate the edited version. <a href="https://beta.openai.com/docs/models/overview">Learn more</a>.
  - Option: code-davinci-edit-001 (value: code-davinci-edit-001)
  - Option: text-davinci-edit-001 (value: text-davinci-edit-001)
- **input** (string): The input text to be edited
- **instruction** (string): The instruction that tells the model how to edit the input text
- **model** (options): The model which will classify the text. <a href="https://beta.openai.com/docs/models/overview">Learn more</a>.
  - Option: text-moderation-stable (value: text-moderation-stable)
  - Option: text-moderation-latest (value: text-moderation-latest)
- **input** (string): The input text to classify
- **simplifyOutput** (boolean): Whether to return a simplified version of the response instead of the raw data
- **simplifyOutput** (boolean): Whether to return a simplified version of the response instead of the raw data
- **options** (collection): Additional options to add
  - Option: echo (value: undefined)
  - Option: frequency_penalty (value: undefined)
  - Option: maxTokens (value: undefined)
  - Option: n (value: undefined)
  - Option: presence_penalty (value: undefined)
  - Option: temperature (value: undefined)
  - Option: topP (value: undefined)
