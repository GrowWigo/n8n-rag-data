# Node: Agile CRM

**Name**: agileCrm
**Category**: transform
**Description**: Consume Agile CRM API
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
  - Option: Company (value: company)
  - Option: Contact (value: contact)
  - Option: Deal (value: deal)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **contactId** (string): Unique identifier for a particular contact
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filterType** (options): Filter
  - Option: None (value: none)
  - Option: Build Manually (value: manual)
  - Option: JSON (value: json)
- **matchType** (options): Must Match
  - Option: Any Filter (value: anyFilter)
  - Option: All Filters (value: allFilters)
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **filters** (fixedCollection): Filters
  - Option: conditions (value: undefined)
- **jsonNotice** (notice): See <a href="https://github.com/agilecrm/rest-api#121-get-contacts-by-dynamic-filter" target="_blank">Agile CRM guide</a> to creating filters
- **filterJson** (string): Filters (JSON)
- **options** (collection): Options
  - Option: sort (value: undefined)
- **jsonParameters** (boolean): JSON Parameters
- **additionalFieldsJson** (json): Object of values to set as described <a href="https://github.com/agilecrm/rest-api#1-contacts---companies-api">here</a>
- **additionalFields** (collection): Additional Fields
  - Option: addressOptions (value: undefined)
  - Option: company (value: undefined)
  - Option: emailOptions (value: undefined)
  - Option: firstName (value: undefined)
  - Option: lastName (value: undefined)
  - Option: leadScore (value: undefined)
  - Option: starValue (value: undefined)
  - Option: phoneOptions (value: undefined)
  - Option: tags (value: undefined)
  - Option: title (value: undefined)
  - Option: websiteOptions (value: undefined)
  - Option: customProperties (value: undefined)
- **contactId** (string): ID of contact to delete
- **contactId** (string): Unique identifier for a particular contact
- **jsonParameters** (boolean): JSON Parameters
- **additionalFieldsJson** (json): Object of values to set as described <a href="https://github.com/agilecrm/rest-api#1-contacts---companies-api">here</a>
- **additionalFields** (collection): Additional Fields
  - Option: addressOptions (value: undefined)
  - Option: company (value: undefined)
  - Option: emailOptions (value: undefined)
  - Option: firstName (value: undefined)
  - Option: lastName (value: undefined)
  - Option: leadScore (value: undefined)
  - Option: starValue (value: undefined)
  - Option: phoneOptions (value: undefined)
  - Option: tags (value: undefined)
  - Option: title (value: undefined)
  - Option: websiteOptions (value: undefined)
  - Option: customProperties (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **companyId** (string): Unique identifier for a particular company
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filterType** (options): Filter
  - Option: None (value: none)
  - Option: Build Manually (value: manual)
  - Option: JSON (value: json)
- **matchType** (options): Must Match
  - Option: Any Filter (value: anyFilter)
  - Option: All Filters (value: allFilters)
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **filters** (fixedCollection): Filters
  - Option: conditions (value: undefined)
- **jsonNotice** (notice): See <a href="https://github.com/agilecrm/rest-api#121-get-contacts-by-dynamic-filter" target="_blank">Agile CRM guide</a> to creating filters
- **filterJson** (string): Filters (JSON)
- **options** (collection): Options
  - Option: sort (value: undefined)
- **jsonParameters** (boolean): JSON Parameters
- **additionalFieldsJson** (json): Object of values to set as described <a href="https://github.com/agilecrm/rest-api#1-companys---companies-api">here</a>
- **additionalFields** (collection): Additional Fields
  - Option: addressOptions (value: undefined)
  - Option: email (value: undefined)
  - Option: name (value: undefined)
  - Option: phone (value: undefined)
  - Option: starValue (value: undefined)
  - Option: tags (value: undefined)
  - Option: websiteOptions (value: undefined)
  - Option: customProperties (value: undefined)
- **companyId** (string): ID of company to delete
- **companyId** (string): Unique identifier for a particular company
- **jsonParameters** (boolean): JSON Parameters
- **additionalFieldsJson** (json): Object of values to set as described <a href="https://github.com/agilecrm/rest-api#1-companys---companies-api">here</a>
- **additionalFields** (collection): Additional Fields
  - Option: addressOptions (value: undefined)
  - Option: email (value: undefined)
  - Option: starValue (value: undefined)
  - Option: tags (value: undefined)
  - Option: name (value: undefined)
  - Option: phone (value: undefined)
  - Option: websiteOptions (value: undefined)
  - Option: customProperties (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **dealId** (string): Unique identifier for a particular deal
- **limit** (number): Max number of results to return
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **closeDate** (dateTime): Closing date of deal
- **expectedValue** (number): Expected Value of deal
- **milestone** (string): Milestone of deal
- **name** (string): Name of deal
- **probability** (number): Expected probability
- **jsonParameters** (boolean): JSON Parameters
- **additionalFieldsJson** (json): Object of values to set as described <a href="https://github.com/agilecrm/rest-api#1-deals---companies-api">here</a>
- **additionalFields** (collection): Additional Fields
  - Option: contactIds (value: undefined)
  - Option: customData (value: undefined)
- **dealId** (string): ID of deal to delete
- **dealId** (string): ID of deal to update
- **jsonParameters** (boolean): JSON Parameters
- **additionalFieldsJson** (json): Object of values to set as described <a href="https://github.com/agilecrm/rest-api#1-deals---companies-api">here</a>
- **additionalFields** (collection): Additional Fields
  - Option: expectedValue (value: undefined)
  - Option: name (value: undefined)
  - Option: probability (value: undefined)
  - Option: contactIds (value: undefined)
  - Option: customData (value: undefined)
