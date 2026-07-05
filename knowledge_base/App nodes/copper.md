# Node: Copper

**Name**: copper
**Category**: transform
**Description**: Consume the Copper API
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
  - Option: Customer Source (value: customerSource)
  - Option: Lead (value: lead)
  - Option: Opportunity (value: opportunity)
  - Option: Person (value: person)
  - Option: Project (value: project)
  - Option: Task (value: task)
  - Option: User (value: user)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **name** (string): Name of the company to create
- **additionalFields** (collection): Additional Fields
  - Option: address (value: undefined)
  - Option: details (value: undefined)
  - Option: email_domain (value: undefined)
  - Option: phone_numbers (value: undefined)
- **companyId** (string): ID of the company to delete
- **companyId** (string): ID of the company to retrieve
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filterFields** (collection): Filters
  - Option: country (value: undefined)
  - Option: name (value: undefined)
- **companyId** (string): ID of the company to update
- **updateFields** (collection): Update Fields
  - Option: address (value: undefined)
  - Option: details (value: undefined)
  - Option: name (value: undefined)
  - Option: phone_numbers (value: undefined)
- **operation** (options): Operation
  - Option: Get Many (value: getAll)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **name** (string): Name of the lead to create
- **additionalFields** (collection): Additional Fields
  - Option: address (value: undefined)
  - Option: email (value: undefined)
  - Option: phone_numbers (value: undefined)
- **leadId** (string): ID of the lead to delete
- **leadId** (string): ID of the lead to retrieve
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filterFields** (collection): Filters
  - Option: country (value: undefined)
  - Option: name (value: undefined)
- **leadId** (string): ID of the lead to update
- **updateFields** (collection): Update Fields
  - Option: address (value: undefined)
  - Option: details (value: undefined)
  - Option: email (value: undefined)
  - Option: name (value: undefined)
  - Option: phone_numbers (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **name** (string): Name of the opportunity to create
- **customerSourceId** (string): ID of the customer source that generated this opportunity
- **primaryContactId** (string): ID of the primary company associated with this opportunity
- **opportunityId** (string): ID of the opportunity to delete
- **opportunityId** (string): ID of the opportunity to retrieve
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filterFields** (collection): Filters
  - Option: company_ids (value: undefined)
  - Option: customer_source_ids (value: undefined)
- **opportunityId** (string): ID of the opportunity to update
- **updateFields** (collection): Update Fields
  - Option: customer_source_id (value: undefined)
  - Option: name (value: undefined)
  - Option: primary_contact_id (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **name** (string): Name of the person to create
- **additionalFields** (collection): Additional Fields
  - Option: address (value: undefined)
  - Option: details (value: undefined)
  - Option: email_domain (value: undefined)
  - Option: emails (value: undefined)
  - Option: phone_numbers (value: undefined)
- **personId** (string): ID of the person to delete
- **personId** (string): ID of the person to retrieve
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filterFields** (collection): Filters
  - Option: name (value: undefined)
- **personId** (string): ID of the person to update
- **updateFields** (collection): Update Fields
  - Option: address (value: undefined)
  - Option: details (value: undefined)
  - Option: email_domain (value: undefined)
  - Option: emails (value: undefined)
  - Option: name (value: undefined)
  - Option: phone_numbers (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **name** (string): Name of the project to create
- **additionalFields** (collection): Additional Fields
  - Option: assignee_id (value: undefined)
  - Option: details (value: undefined)
  - Option: status (value: undefined)
- **projectId** (string): ID of the project to delete
- **projectId** (string): ID of the project to retrieve
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filterFields** (collection): Filters
  - Option: name (value: undefined)
- **projectId** (string): ID of the project to update
- **updateFields** (collection): Update Fields
  - Option: assignee_id (value: undefined)
  - Option: details (value: undefined)
  - Option: name (value: undefined)
  - Option: status (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **name** (string): Name
- **additionalFields** (collection): Additional Fields
  - Option: assignee_id (value: undefined)
  - Option: details (value: undefined)
  - Option: priority (value: undefined)
  - Option: status (value: undefined)
- **taskId** (string): ID of the task to delete
- **taskId** (string): ID of the task to retrieve
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filterFields** (collection): Filters
  - Option: assignee_ids (value: undefined)
  - Option: project_ids (value: undefined)
- **taskId** (string): ID of the task to update
- **updateFields** (collection): Update Fields
  - Option: assignee_id (value: undefined)
  - Option: details (value: undefined)
  - Option: name (value: undefined)
  - Option: priority (value: undefined)
  - Option: status (value: undefined)
- **operation** (options): Operation
  - Option: Get Many (value: getAll)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
