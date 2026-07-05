# Node: Sendy

**Name**: sendy
**Category**: input
**Description**: Consume Sendy API
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
  - Option: Campaign (value: campaign)
  - Option: Subscriber (value: subscriber)
- **operation** (options): Operation
  - Option: Create (value: create)
- **fromName** (string): The 'From name' of your campaign
- **fromEmail** (string): The 'From email' of your campaign
- **replyTo** (string): The 'Reply to' of your campaign
- **title** (string): The 'Title' of your campaign
- **subject** (string): The 'Subject' of your campaign
- **htmlText** (string): The 'HTML version' of your campaign
- **sendCampaign** (boolean): Whether to send the campaign as well and not just create a draft. Default is false.
- **brandId** (string): Brand ID
- **additionalFields** (collection): Additional Fields
  - Option: excludeListIds (value: undefined)
  - Option: excludeSegmentIds (value: undefined)
  - Option: listIds (value: undefined)
  - Option: plainText (value: undefined)
  - Option: queryString (value: undefined)
  - Option: segmentIds (value: undefined)
  - Option: trackClicks (value: undefined)
  - Option: trackOpens (value: undefined)
- **operation** (options): Operation
  - Option: Add (value: add)
  - Option: Count (value: count)
  - Option: Delete (value: delete)
  - Option: Remove (value: remove)
  - Option: Status (value: status)
- **email** (string): Email address of the subscriber
- **listId** (string): The list ID you want to subscribe a user to. This encrypted & hashed ID can be found under View all lists section named ID.
- **additionalFields** (collection): Additional Fields
  - Option: country (value: undefined)
  - Option: gdpr (value: undefined)
  - Option: hp (value: undefined)
  - Option: ipaddress (value: undefined)
  - Option: name (value: undefined)
  - Option: referrer (value: undefined)
  - Option: silent (value: undefined)
- **listId** (string): The list ID you want to subscribe a user to. This encrypted & hashed ID can be found under View all lists section named ID.
- **email** (string): Email address of the subscriber
- **listId** (string): The list ID you want to subscribe a user to. This encrypted & hashed ID can be found under View all lists section named ID.
- **email** (string): Email address of the subscriber
- **listId** (string): The list ID you want to subscribe a user to. This encrypted & hashed ID can be found under View all lists section named ID.
- **email** (string): Email address of the subscriber
- **listId** (string): The list ID you want to subscribe a user to. This encrypted & hashed ID can be found under View all lists section named ID.
