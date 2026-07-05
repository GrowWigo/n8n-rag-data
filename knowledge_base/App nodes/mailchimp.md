# Node: Mailchimp

**Name**: mailchimp
**Category**: output
**Description**: Consume Mailchimp API
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
  - Option: API Key (value: apiKey)
  - Option: OAuth2 (value: oAuth2)
- **resource** (options): Resource
  - Option: Campaign (value: campaign)
  - Option: List Group (value: listGroup)
  - Option: Member (value: member)
  - Option: Member Tag (value: memberTag)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
- **operation** (options): Operation
  - Option: Get Many (value: getAll)
- **operation** (options): Operation
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Replicate (value: replicate)
  - Option: Resend (value: resend)
  - Option: Send (value: send)
- **list** (options): List of lists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **email** (string): Email address for a subscriber
- **status** (options): Subscriber's current status
  - Option: Cleaned (value: cleaned)
  - Option: Pending (value: pending)
  - Option: Subscribed (value: subscribed)
  - Option: Transactional (value: transactional)
  - Option: Unsubscribed (value: unsubscribed)
- **jsonParameters** (boolean): JSON Parameters
- **options** (collection): Options
  - Option: emailType (value: undefined)
  - Option: language (value: undefined)
  - Option: ipOptIn (value: undefined)
  - Option: ipSignup (value: undefined)
  - Option: timestampSignup (value: undefined)
  - Option: tags (value: undefined)
  - Option: vip (value: undefined)
  - Option: timestampOpt (value: undefined)
- **locationFieldsUi** (fixedCollection): Subscriber location information.n
  - Option: locationFieldsValues (value: undefined)
- **mergeFieldsUi** (fixedCollection): An individual merge var and value for a member
  - Option: mergeFieldsValues (value: undefined)
- **mergeFieldsJson** (json): Merge Fields
- **locationJson** (json): Location
- **groupsUi** (fixedCollection): Interest Groups
  - Option: groupsValues (value: undefined)
- **groupJson** (json): Interest Groups
- **list** (options): List of lists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **email** (string): Member's email
- **list** (options): List of lists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **email** (string): Member's email
- **options** (collection): Options
  - Option: fields (value: undefined)
  - Option: excludeFields (value: undefined)
- **list** (options): List of lists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: beforeLastChanged (value: undefined)
  - Option: beforeTimestampOpt (value: undefined)
  - Option: emailType (value: undefined)
  - Option: status (value: undefined)
  - Option: sinceLastChanged (value: undefined)
- **list** (options): List of lists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **email** (string): Email address of the subscriber
- **jsonParameters** (boolean): JSON Parameters
- **updateFields** (collection): Update Fields
  - Option: emailType (value: undefined)
  - Option: groupsUi (value: undefined)
  - Option: language (value: undefined)
  - Option: mergeFieldsUi (value: undefined)
  - Option: ipOptIn (value: undefined)
  - Option: ipSignup (value: undefined)
  - Option: timestampSignup (value: undefined)
  - Option: skipMergeValidation (value: undefined)
  - Option: status (value: undefined)
  - Option: vip (value: undefined)
  - Option: locationFieldsUi (value: undefined)
  - Option: timestampOpt (value: undefined)
- **mergeFieldsJson** (json): Merge Fields
- **locationJson** (json): Location
- **groupJson** (json): Interest Groups
- **list** (options): List of lists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **email** (string): Email address of the subscriber
- **tags** (string): Tags
- **options** (collection): Options
  - Option: isSyncing (value: undefined)
- **list** (options): List of lists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **groupCategory** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: beforeCreateTime (value: undefined)
  - Option: beforeSendTime (value: undefined)
  - Option: excludeFields (value: undefined)
  - Option: fields (value: undefined)
  - Option: listId (value: undefined)
  - Option: sinceCreateTime (value: undefined)
  - Option: sinceSendTime (value: undefined)
  - Option: sortDirection (value: undefined)
  - Option: sortField (value: undefined)
  - Option: status (value: undefined)
- **campaignId** (string): List of Campaigns
