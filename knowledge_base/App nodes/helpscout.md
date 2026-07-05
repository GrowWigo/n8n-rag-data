# Node: Help Scout

**Name**: helpScout
**Category**: input
**Description**: Consume Help Scout API
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
  - Option: Conversation (value: conversation)
  - Option: Customer (value: customer)
  - Option: Mailbox (value: mailbox)
  - Option: Thread (value: thread)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **mailboxId** (options): ID of a mailbox where the conversation is being created. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **status** (options): Conversation status
  - Option: Active (value: active)
  - Option: Closed (value: closed)
  - Option: Pending (value: pending)
- **subject** (string): Conversation’s subject
- **type** (options): Conversation type
  - Option: Chat (value: chat)
  - Option: Email (value: email)
  - Option: Phone (value: phone)
- **resolveData** (boolean): By default the response only contain the ID to resource. If this option gets activated, it will resolve the data automatically.
- **additionalFields** (collection): Additional Fields
  - Option: assignTo (value: undefined)
  - Option: autoReply (value: undefined)
  - Option: closedAt (value: undefined)
  - Option: createdAt (value: undefined)
  - Option: customerEmail (value: undefined)
  - Option: customerId (value: undefined)
  - Option: imported (value: undefined)
  - Option: tags (value: undefined)
  - Option: user (value: undefined)
- **threadsUi** (fixedCollection): Threads
  - Option: threadsValues (value: undefined)
- **conversationId** (string): Conversation ID
- **conversationId** (string): Conversation ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: assignTo (value: undefined)
  - Option: embed (value: undefined)
  - Option: folder (value: undefined)
  - Option: mailbox (value: undefined)
  - Option: modifiedSince (value: undefined)
  - Option: number (value: undefined)
  - Option: query (value: undefined)
  - Option: sortField (value: undefined)
  - Option: sortOrder (value: undefined)
  - Option: status (value: undefined)
  - Option: tags (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Properties (value: properties)
  - Option: Update (value: update)
- **resolveData** (boolean): By default the response only contain the ID to resource. If this option gets activated, it will resolve the data automatically.
- **additionalFields** (collection): Additional Fields
  - Option: age (value: undefined)
  - Option: firstName (value: undefined)
  - Option: gender (value: undefined)
  - Option: jobTitle (value: undefined)
  - Option: lastName (value: undefined)
  - Option: location (value: undefined)
  - Option: background (value: undefined)
  - Option: organization (value: undefined)
  - Option: photoUrl (value: undefined)
- **addressUi** (fixedCollection): Address
  - Option: addressValue (value: undefined)
- **chatsUi** (fixedCollection): Chat Handles
  - Option: chatsValues (value: undefined)
- **emailsUi** (fixedCollection): Emails
  - Option: emailsValues (value: undefined)
- **phonesUi** (fixedCollection): Phones
  - Option: phonesValues (value: undefined)
- **socialProfilesUi** (fixedCollection): Social Profiles
  - Option: socialProfilesValues (value: undefined)
- **websitesUi** (fixedCollection): Websites
  - Option: websitesValues (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: firstName (value: undefined)
  - Option: lastName (value: undefined)
  - Option: mailbox (value: undefined)
  - Option: modifiedSince (value: undefined)
  - Option: sortField (value: undefined)
  - Option: sortOrder (value: undefined)
  - Option: query (value: undefined)
- **customerId** (string): Customer ID
- **customerId** (string): Customer ID
- **updateFields** (collection): Update Fields
  - Option: age (value: undefined)
  - Option: firstName (value: undefined)
  - Option: gender (value: undefined)
  - Option: jobTitle (value: undefined)
  - Option: lastName (value: undefined)
  - Option: location (value: undefined)
  - Option: background (value: undefined)
  - Option: organization (value: undefined)
  - Option: photoUrl (value: undefined)
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **mailboxId** (string): Mailbox ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get Many (value: getAll)
- **conversationId** (string): Conversation ID
- **type** (options): Type
  - Option: Chat (value: chat)
  - Option: Customer (value: customer)
  - Option: Note (value: note)
  - Option: Phone (value: phone)
  - Option: Reply (value: reply)
- **text** (string): The chat text
- **additionalFields** (collection): Additional Fields
  - Option: createdAt (value: undefined)
  - Option: customerEmail (value: undefined)
  - Option: customerId (value: undefined)
  - Option: draft (value: undefined)
  - Option: imported (value: undefined)
- **attachmentsUi** (fixedCollection): Array of supported attachments to add to the message
  - Option: attachmentsValues (value: undefined)
  - Option: attachmentsBinary (value: undefined)
- **conversationId** (string): Conversation ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
