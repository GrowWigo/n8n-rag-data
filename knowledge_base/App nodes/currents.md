# Node: Currents

**Name**: currents
**Category**: transform
**Description**: Interact with the Currents API for test orchestration and analytics
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
  - Option: Action (value: action)
  - Option: Instance (value: instance)
  - Option: Project (value: project)
  - Option: Run (value: run)
  - Option: Signature (value: signature)
  - Option: Spec File (value: specFile)
  - Option: Test (value: test)
  - Option: Test Result (value: testResult)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Disable (value: disable)
  - Option: Enable (value: enable)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **actionId** (string): The ID of the action
- **projectId** (resourceLocator): The Currents project
- **projectId** (resourceLocator): The Currents project
- **filters** (collection): Filters
  - Option: search (value: undefined)
  - Option: status (value: undefined)
- **name** (string): The name of the action (1-255 characters)
- **actionType** (options): Action Type
  - Option: Quarantine (value: quarantine)
  - Option: Skip (value: skip)
  - Option: Tag (value: tag)
- **actionTags** (string): Comma-separated list of tags to apply
- **matcherType** (options): How to match tests for this action
  - Option: Spec File Contains (value: specContains)
  - Option: Spec File Equals (value: specEquals)
  - Option: Test Signature (value: signature)
  - Option: Test Title Contains (value: titleContains)
  - Option: Test Title Equals (value: titleEquals)
- **matcherValue** (string): The value to match against (test title, spec file path, or signature)
- **createOptions** (collection): Options
  - Option: description (value: undefined)
  - Option: expiresAfter (value: undefined)
- **updateFields** (collection): Update Fields
  - Option: name (value: undefined)
  - Option: description (value: undefined)
  - Option: expiresAfter (value: undefined)
- **operation** (options): Operation
  - Option: Get (value: get)
- **instanceId** (string): The ID of the spec file execution instance
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Get Insights (value: getInsights)
- **projectId** (resourceLocator): The Currents project
- **limit** (number): Max number of results to return
- **dateStart** (dateTime): Start date for metrics (ISO 8601 format)
- **dateEnd** (dateTime): End date for metrics (ISO 8601 format)
- **options** (collection): Options
  - Option: authors (value: undefined)
  - Option: branches (value: undefined)
  - Option: groups (value: undefined)
  - Option: resolution (value: undefined)
  - Option: tags (value: undefined)
- **operation** (options): Operation
  - Option: Cancel (value: cancel)
  - Option: Cancel by GitHub CI (value: cancelGithub)
  - Option: Delete (value: delete)
  - Option: Find (value: find)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Reset (value: reset)
- **runId** (string): The ID of the run
- **machineIds** (string): Comma-separated list of machine identifiers to reset (1-63 items)
- **resetOptions** (collection): Options
  - Option: isBatchedOr8n (value: undefined)
- **githubRunId** (string): The GitHub Actions workflow run ID
- **githubRunAttempt** (number): The GitHub Actions workflow attempt number
- **cancelGithubOptions** (collection): Options
  - Option: projectId (value: undefined)
  - Option: ciBuildId (value: undefined)
- **projectId** (resourceLocator): The Currents project
- **filters** (collection): Filters
  - Option: branch (value: undefined)
  - Option: ciBuildId (value: undefined)
  - Option: tags (value: undefined)
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: authors (value: undefined)
  - Option: branches (value: undefined)
  - Option: completionState (value: undefined)
  - Option: dateEnd (value: undefined)
  - Option: dateStart (value: undefined)
  - Option: search (value: undefined)
  - Option: status (value: undefined)
  - Option: tags (value: undefined)
  - Option: tagOperator (value: undefined)
- **options** (collection): Options
  - Option: startingAfter (value: undefined)
  - Option: endingBefore (value: undefined)
- **operation** (options): Operation
  - Option: Generate (value: generate)
- **projectId** (resourceLocator): The Currents project
- **specFilePath** (string): The complete path to the spec file
- **testTitle** (string): The test title. For nested describe blocks, use " > " as separator (e.g., "Login > should login with valid credentials").
- **operation** (options): Operation
  - Option: Get Many (value: getAll)
- **projectId** (resourceLocator): The Currents project
- **dateStart** (dateTime): Start date for metrics (ISO 8601 format)
- **dateEnd** (dateTime): End date for metrics (ISO 8601 format)
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: authors (value: undefined)
  - Option: branches (value: undefined)
  - Option: groups (value: undefined)
  - Option: specNameFilter (value: undefined)
  - Option: tags (value: undefined)
- **options** (collection): Options
  - Option: includeFailedInDuration (value: undefined)
  - Option: order (value: undefined)
  - Option: dir (value: undefined)
  - Option: page (value: undefined)
- **operation** (options): Operation
  - Option: Get Many (value: getAll)
- **projectId** (resourceLocator): The Currents project
- **dateStart** (dateTime): Start date for metrics (ISO 8601 format)
- **dateEnd** (dateTime): End date for metrics (ISO 8601 format)
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: authors (value: undefined)
  - Option: branches (value: undefined)
  - Option: groups (value: undefined)
  - Option: minExecutions (value: undefined)
  - Option: spec (value: undefined)
  - Option: tags (value: undefined)
  - Option: testState (value: undefined)
  - Option: title (value: undefined)
- **options** (collection): Options
  - Option: order (value: undefined)
  - Option: dir (value: undefined)
  - Option: page (value: undefined)
  - Option: metric_settings (value: undefined)
- **operation** (options): Operation
  - Option: Get Many (value: getAll)
- **signature** (string): The unique test signature. Use the Signature resource to generate this from project ID, spec file path, and test title.
- **dateStart** (dateTime): Start date for results (ISO 8601 format)
- **dateEnd** (dateTime): End date for results (ISO 8601 format)
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: branches (value: undefined)
  - Option: authors (value: undefined)
  - Option: groups (value: undefined)
  - Option: status (value: undefined)
  - Option: tags (value: undefined)
- **options** (collection): Options
  - Option: startingAfter (value: undefined)
  - Option: endingBefore (value: undefined)
