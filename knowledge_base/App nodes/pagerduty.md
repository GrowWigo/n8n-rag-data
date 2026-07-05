# Node: PagerDuty

**Name**: pagerDuty
**Category**: output
**Description**: Consume PagerDuty API
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
  - Option: API Token (value: apiToken)
  - Option: OAuth2 (value: oAuth2)
- **resource** (options): Resource
  - Option: Incident (value: incident)
  - Option: Incident Note (value: incidentNote)
  - Option: Log Entry (value: logEntry)
  - Option: User (value: user)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **title** (string): A succinct description of the nature, symptoms, cause, or effect of the incident
- **serviceId** (options): The incident will be created on this service. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **email** (string): The email address of a valid user associated with the account making the request
- **additionalFields** (collection): Additional Fields
  - Option: escalationPolicyId (value: undefined)
  - Option: details (value: undefined)
  - Option: incidentKey (value: undefined)
  - Option: priorityId (value: undefined)
  - Option: urgency (value: undefined)
- **conferenceBridgeUi** (fixedCollection): Conference Bridge
  - Option: conferenceBridgeValues (value: undefined)
- **incidentId** (string): Unique identifier for the incident
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: dateRange (value: undefined)
  - Option: incidentKey (value: undefined)
  - Option: include (value: undefined)
  - Option: serviceIds (value: undefined)
  - Option: since (value: undefined)
  - Option: sortBy (value: undefined)
  - Option: statuses (value: undefined)
  - Option: teamIds (value: undefined)
  - Option: timeZone (value: undefined)
  - Option: until (value: undefined)
  - Option: urgencies (value: undefined)
  - Option: userIds (value: undefined)
- **incidentId** (string): Unique identifier for the incident
- **email** (string): The email address of a valid user associated with the account making the request
- **updateFields** (collection): Update Fields
  - Option: escalationLevel (value: undefined)
  - Option: escalationPolicyId (value: undefined)
  - Option: priorityId (value: undefined)
  - Option: resolution (value: undefined)
  - Option: status (value: undefined)
  - Option: title (value: undefined)
  - Option: urgency (value: undefined)
- **conferenceBridgeUi** (fixedCollection): Conference Bridge
  - Option: conferenceBridgeValues (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get Many (value: getAll)
- **incidentId** (string): Unique identifier for the incident
- **content** (string): The note content
- **email** (string): The email address of a valid user associated with the account making the request
- **incidentId** (string): Unique identifier for the incident
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **logEntryId** (string): Unique identifier for the log entry
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: include (value: undefined)
  - Option: isOverview (value: undefined)
  - Option: since (value: undefined)
  - Option: timeZone (value: undefined)
  - Option: until (value: undefined)
- **operation** (options): Operation
  - Option: Get (value: get)
- **userId** (string): Unique identifier for the user
