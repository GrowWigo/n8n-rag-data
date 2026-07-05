# Node: Customer.io

**Name**: customerIo
**Category**: output
**Description**: Consume Customer.io API
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
  - Option: Customer (value: customer)
  - Option: Event (value: event)
  - Option: Campaign (value: campaign)
  - Option: Segment (value: segment)
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Get Metrics (value: getMetrics)
- **campaignId** (number): The unique identifier for the campaign
- **campaignId** (number): The unique identifier for the campaign
- **period** (options): Specify metric period
  - Option: Hours (value: hours)
  - Option: Days (value: days)
  - Option: Weeks (value: weeks)
  - Option: Months (value: months)
- **jsonParameters** (boolean): JSON Parameters
- **additionalFields** (collection): Additional Fields
  - Option: steps (value: undefined)
  - Option: type (value: undefined)
- **operation** (options): Operation
  - Option: Create or Update (value: upsert)
  - Option: Delete (value: delete)
- **id** (string): The unique identifier for the customer
- **id** (string): The unique identifier for the customer
- **jsonParameters** (boolean): JSON Parameters
- **additionalFieldsJson** (json): Object of values to set as described <a href="https://github.com/agilecrm/rest-api#1-companys---companies-api">here</a>
- **additionalFields** (collection): Additional Fields
  - Option: customProperties (value: undefined)
  - Option: email (value: undefined)
  - Option: createdAt (value: undefined)
- **operation** (options): Operation
  - Option: Track (value: track)
  - Option: Track Anonymous (value: trackAnonymous)
- **customerId** (string): The unique identifier for the customer
- **eventName** (string): Name of the event to track
- **jsonParameters** (boolean): JSON Parameters
- **additionalFieldsJson** (json): Object of values to set as described <a href="https://customer.io/docs/api-triggered-data-format#basic-data-formatting">here</a>
- **additionalFields** (collection): Additional Fields
  - Option: customAttributes (value: undefined)
  - Option: type (value: undefined)
- **eventName** (string): The unique identifier for the customer
- **jsonParameters** (boolean): JSON Parameters
- **additionalFieldsJson** (json): Object of values to set as described <a href="https://customer.io/docs/api-triggered-data-format#basic-data-formatting">here</a>
- **additionalFields** (collection): Additional Fields
  - Option: customAttributes (value: undefined)
- **operation** (options): Operation
  - Option: Add Customer (value: add)
  - Option: Remove Customer (value: remove)
- **segmentId** (number): The unique identifier of the segment
- **customerIds** (string): A list of customer IDs to add to the segment
