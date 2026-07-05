# Node: Salesmate

**Name**: salesmate
**Category**: output
**Description**: Consume Salesmate API
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
  - Option: Activity (value: activity)
  - Option: Company (value: company)
  - Option: Deal (value: deal)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **name** (string): Name
- **owner** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **rawData** (boolean): Whether the data should include the fields details
- **additionalFields** (collection): Additional Fields
  - Option: website (value: undefined)
  - Option: phone (value: undefined)
  - Option: otherPhone (value: undefined)
  - Option: facebookHandle (value: undefined)
  - Option: googlePlusHandle (value: undefined)
  - Option: linkedInHandle (value: undefined)
  - Option: skypeId (value: undefined)
  - Option: twitterHandle (value: undefined)
  - Option: currency (value: undefined)
  - Option: billingAddressLine1 (value: undefined)
  - Option: billingAddressLine2 (value: undefined)
  - Option: billingCity (value: undefined)
  - Option: billingZipCode (value: undefined)
  - Option: billingState (value: undefined)
  - Option: billingState (value: undefined)
  - Option: description (value: undefined)
  - Option: tags (value: undefined)
- **id** (string): Company ID
- **rawData** (boolean): Whether the data should include the fields details
- **updateFields** (collection): Update Fields
  - Option: name (value: undefined)
  - Option: owner (value: undefined)
  - Option: website (value: undefined)
  - Option: phone (value: undefined)
  - Option: otherPhone (value: undefined)
  - Option: facebookHandle (value: undefined)
  - Option: googlePlusHandle (value: undefined)
  - Option: linkedInHandle (value: undefined)
  - Option: skypeId (value: undefined)
  - Option: twitterHandle (value: undefined)
  - Option: currency (value: undefined)
  - Option: billingAddressLine1 (value: undefined)
  - Option: billingAddressLine2 (value: undefined)
  - Option: billingCity (value: undefined)
  - Option: billingZipCode (value: undefined)
  - Option: billingState (value: undefined)
  - Option: billingState (value: undefined)
  - Option: description (value: undefined)
  - Option: tags (value: undefined)
- **id** (string): Company ID
- **rawData** (boolean): Whether the data should include the fields details
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **jsonParameters** (boolean): JSON Parameters
- **options** (collection): Options
  - Option: fields (value: undefined)
  - Option: sortBy (value: undefined)
  - Option: sortOrder (value: undefined)
- **filtersJson** (json): Filters
- **filters** (fixedCollection): Filters
  - Option: filtersUi (value: undefined)
- **id** (string): If more than one company add them separated by ,
- **title** (string): Title
- **owner** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **type** (string): This field displays activity type such as call, meeting etc
- **rawData** (boolean): Whether the data should include the fields details
- **additionalFields** (collection): Additional Fields
  - Option: description (value: undefined)
  - Option: tags (value: undefined)
  - Option: dueDate (value: undefined)
  - Option: duration (value: undefined)
  - Option: isCalendarInvite (value: undefined)
  - Option: isCompleted (value: undefined)
- **id** (string): Activity ID
- **rawData** (boolean): Whether the data should include the fields details
- **updateFields** (collection): Update Fields
  - Option: title (value: undefined)
  - Option: type (value: undefined)
  - Option: owner (value: undefined)
  - Option: description (value: undefined)
  - Option: tags (value: undefined)
  - Option: dueDate (value: undefined)
  - Option: duration (value: undefined)
  - Option: isCalendarInvite (value: undefined)
  - Option: isCompleted (value: undefined)
- **id** (string): Activity ID
- **rawData** (boolean): Whether the data should include the fields details
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **jsonParameters** (boolean): JSON Parameters
- **options** (collection): Options
  - Option: fields (value: undefined)
  - Option: sortBy (value: undefined)
  - Option: sortOrder (value: undefined)
- **filtersJson** (json): Filters
- **filters** (fixedCollection): Filters
  - Option: filtersUi (value: undefined)
- **id** (string): If more than one activity add them separated by ,
- **title** (string): Title
- **owner** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **primaryContact** (options): Primary contact for the deal. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **pipeline** (options): Pipeline
  - Option: Sales (value: Sales)
- **status** (options): Status
  - Option: Open (value: Open)
  - Option: Close (value: Close)
  - Option: Lost (value: Lost)
- **stage** (options): Stage
  - Option: New (Untouched) (value: New (Untouched))
  - Option: Contacted (value: Contacted)
  - Option: Qualified (value: Qualified)
  - Option: In Negotiation (value: In Negotiation)
  - Option: Proposal Presented (value: Proposal Presented)
- **currency** (string): Currency
- **rawData** (boolean): Whether the data should include the fields details
- **additionalFields** (collection): Additional Fields
  - Option: description (value: undefined)
  - Option: tags (value: undefined)
  - Option: primaryCompany (value: undefined)
  - Option: source (value: undefined)
  - Option: estimatedCloseDate (value: undefined)
  - Option: dealValue (value: undefined)
  - Option: priority (value: undefined)
- **id** (string): Deal ID
- **rawData** (boolean): Whether the data should include the fields details
- **updateFields** (collection): Update Fields
  - Option: title (value: undefined)
  - Option: owner (value: undefined)
  - Option: primaryContact (value: undefined)
  - Option: pipeline (value: undefined)
  - Option: status (value: undefined)
  - Option: stage (value: undefined)
  - Option: currency (value: undefined)
  - Option: description (value: undefined)
  - Option: tags (value: undefined)
  - Option: primaryCompany (value: undefined)
  - Option: source (value: undefined)
  - Option: estimatedCloseDate (value: undefined)
  - Option: dealValue (value: undefined)
  - Option: priority (value: undefined)
- **id** (string): Deal ID
- **rawData** (boolean): Whether the data should include the fields details
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **jsonParameters** (boolean): JSON Parameters
- **options** (collection): Options
  - Option: fields (value: undefined)
  - Option: sortBy (value: undefined)
  - Option: sortOrder (value: undefined)
- **filtersJson** (json): Filters
- **filters** (fixedCollection): Filters
  - Option: filtersUi (value: undefined)
- **id** (string): If more than one deal add them separated by ,
