# Node: Sentry.io

**Name**: sentryIo
**Category**: output
**Description**: Consume Sentry.io API
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
  - Option: Access Token (Cloud) (value: accessToken)
  - Option: OAuth2 (Cloud) (value: oAuth2)
  - Option: Access Token (Self Hosted) (value: accessTokenServer)
- **resource** (options): Resource
  - Option: Event (value: event)
  - Option: Issue (value: issue)
  - Option: Organization (value: organization)
  - Option: Project (value: project)
  - Option: Release (value: release)
  - Option: Team (value: team)
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **organizationSlug** (options): The slug of the organization the events belong to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **projectSlug** (options): The slug of the project the events belong to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **full** (boolean): Whether the event payload will include the full event body, including the stack trace
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **organizationSlug** (options): The slug of the organization the events belong to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **projectSlug** (options): The slug of the project the events belong to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **eventId** (string): The ID of the event to retrieve (either the numeric primary-key or the hexadecimal ID as reported by the raven client)
- **operation** (options): Operation
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **issueId** (string): ID of issue to get
- **organizationSlug** (options): The slug of the organization the issues belong to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **projectSlug** (options): The slug of the project the issues belong to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Additional Fields
  - Option: query (value: undefined)
  - Option: statsPeriod (value: undefined)
  - Option: shortIdLookUp (value: undefined)
- **issueId** (string): ID of issue to get
- **additionalFields** (collection): Update Fields
  - Option: assignedTo (value: undefined)
  - Option: hasSeen (value: undefined)
  - Option: isBookmarked (value: undefined)
  - Option: isPublic (value: undefined)
  - Option: isSubscribed (value: undefined)
  - Option: status (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Additional Fields
  - Option: member (value: undefined)
  - Option: owner (value: undefined)
- **organizationSlug** (options): The slug of the organization the team should be created for. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **name** (string): The slug of the organization the team should be created for
- **agreeTerms** (boolean): Whether you agree to the applicable terms of service and privacy policy of Sentry.io
- **additionalFields** (collection): Additional Fields
  - Option: slug (value: undefined)
- **organization_slug** (options): The slug of the organization to update. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **updateFields** (collection): Update Fields
  - Option: name (value: undefined)
  - Option: slug (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **organizationSlug** (options): The slug of the organization the events belong to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **projectSlug** (options): The slug of the project to retrieve. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **teamSlug** (options): The slug of the team to create a new project for. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **name** (string): The name for the new project
- **additionalFields** (collection): Additional Fields
  - Option: slug (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **organizationSlug** (options): The slug of the organization the project belong to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **projectSlug** (options): The slug of the project to update. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **updateFields** (collection): Update Fields
  - Option: isBookmarked (value: undefined)
  - Option: digestsMaxDelay (value: undefined)
  - Option: digestsMinDelay (value: undefined)
  - Option: name (value: undefined)
  - Option: slug (value: undefined)
  - Option: team (value: undefined)
  - Option: platform (value: undefined)
- **organizationSlug** (options): The slug of the organization the project belong to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **projectSlug** (options): The slug of the project to delete. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **organizationSlug** (options): The slug of the organization the releases belong to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Additional Fields
  - Option: query (value: undefined)
- **organizationSlug** (options): The slug of the organization the release belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **version** (string): The version identifier of the release
- **organizationSlug** (options): The slug of the organization the release belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **version** (string): A version identifier for this release. Can be a version number, a commit hash etc.
- **url** (string): A URL that points to the release. This can be the path to an online interface to the sourcecode for instance.
- **projects** (multiOptions): A list of project slugs that are involved in this release. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **additionalFields** (collection): Additional Fields
  - Option: dateReleased (value: undefined)
  - Option: commits (value: undefined)
  - Option: refs (value: undefined)
- **organizationSlug** (options): The slug of the organization the release belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **version** (string): A version identifier for this release. Can be a version number, a commit hash etc.
- **updateFields** (collection): Update Fields
  - Option: commits (value: undefined)
  - Option: dateReleased (value: undefined)
  - Option: ref (value: undefined)
  - Option: refs (value: undefined)
  - Option: url (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **organizationSlug** (options): The slug of the organization for which the teams should be listed. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **organizationSlug** (options): The slug of the organization the team belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **teamSlug** (options): The slug of the team to get. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **organizationSlug** (options): The slug of the organization the team belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **name** (string): The name of the team
- **additionalFields** (collection): Additional Fields
  - Option: slug (value: undefined)
- **organizationSlug** (options): The slug of the organization the team belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **teamSlug** (options): The slug of the team to update. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **updateFields** (collection): Update Fields
  - Option: name (value: undefined)
  - Option: slug (value: undefined)
- **organizationSlug** (options): The slug of the organization the team belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **teamSlug** (options): The slug of the team to delete. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
