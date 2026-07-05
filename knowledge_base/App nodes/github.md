# Node: GitHub

**Name**: github
**Category**: input
**Description**: Consume GitHub API
**Version**: 1, 1.1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **authentication** (options): Authentication
  - Option: Access Token (value: accessToken)
  - Option: OAuth2 (value: oAuth2)
- **resource** (options): Resource
  - Option: File (value: file)
  - Option: Issue (value: issue)
  - Option: Organization (value: organization)
  - Option: Release (value: release)
  - Option: Repository (value: repository)
  - Option: Review (value: review)
  - Option: User (value: user)
  - Option: Workflow (value: workflow)
- **operation** (options): Operation
  - Option: Get Repositories (value: getRepositories)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Create Comment (value: createComment)
  - Option: Edit (value: edit)
  - Option: Get (value: get)
  - Option: Lock (value: lock)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Edit (value: edit)
  - Option: Get (value: get)
  - Option: List (value: list)
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Issues (value: getIssues)
  - Option: Get License (value: getLicense)
  - Option: Get Profile (value: getProfile)
  - Option: Get Pull Requests (value: getPullRequests)
  - Option: List Popular Paths (value: listPopularPaths)
  - Option: List Referrers (value: listReferrers)
- **operation** (options): Operation
  - Option: Get Repositories (value: getRepositories)
  - Option: Get Issues (value: getUserIssues)
  - Option: Invite (value: invite)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **operation** (options): Operation
  - Option: Disable (value: disable)
  - Option: Dispatch (value: dispatch)
  - Option: Dispatch and Wait for Completion (value: dispatchAndWait)
  - Option: Enable (value: enable)
  - Option: Get (value: get)
  - Option: Get Usage (value: getUsage)
  - Option: List (value: list)
- **webhookNotice** (notice): Your execution will pause until a webhook is called. This URL will be generated at runtime and passed to your Github workflow as a resumeUrl input.
- **owner** (resourceLocator): Repository Owner
- **repository** (resourceLocator): Repository Name
- **workflowId** (resourceLocator): The workflow to dispatch
- **ref** (string): The git reference for the workflow dispatch (branch or tag name)
- **ref** (resourceLocator): The git reference for the workflow dispatch (branch, tag, or commit SHA)
- **inputs** (json): JSON object with input parameters for the workflow
- **filePath** (string): The file path of the file. Has to contain the full path.
- **filePath** (string): The path of the folder to list
- **binaryData** (boolean): Whether the data to upload should be taken from binary field
- **fileContent** (string): The text content of the file
- **binaryPropertyName** (string): Input Binary Field
- **commitMessage** (string): Commit Message
- **additionalParameters** (fixedCollection): Additional fields to add
  - Option: author (value: undefined)
  - Option: branch (value: undefined)
  - Option: committer (value: undefined)
- **asBinaryProperty** (boolean): Whether to set the data of the file as binary property instead of returning the raw API response
- **binaryPropertyName** (string): Put Output File in Field
- **additionalParameters** (collection): Additional fields to add
  - Option: reference (value: undefined)
- **title** (string): The title of the issue
- **body** (string): The body of the issue
- **labels** (collection): Labels
  - Option: label (value: undefined)
- **assignees** (collection): Assignees
  - Option: assignee (value: undefined)
- **issueNumber** (number): The number of the issue on which to create the comment on
- **body** (string): The body of the comment
- **issueNumber** (number): The number of the issue edit
- **editFields** (collection): Edit Fields
  - Option: assignees (value: undefined)
  - Option: body (value: undefined)
  - Option: labels (value: undefined)
  - Option: state (value: undefined)
  - Option: state_reason (value: undefined)
  - Option: title (value: undefined)
- **issueNumber** (number): The issue number to get data for
- **issueNumber** (number): The issue number to lock
- **lockReason** (options): The reason for locking the issue
  - Option: Off-Topic (value: off-topic)
  - Option: Too Heated (value: too heated)
  - Option: Resolved (value: resolved)
  - Option: Spam (value: spam)
- **releaseTag** (string): The tag of the release
- **additionalFields** (collection): Additional Fields
  - Option: name (value: undefined)
  - Option: body (value: undefined)
  - Option: draft (value: undefined)
  - Option: prerelease (value: undefined)
  - Option: target_commitish (value: undefined)
- **release_id** (string): Release ID
- **additionalFields** (collection): Additional Fields
  - Option: body (value: undefined)
  - Option: draft (value: undefined)
  - Option: name (value: undefined)
  - Option: prerelease (value: undefined)
  - Option: tag_name (value: undefined)
  - Option: target_commitish (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **getRepositoryIssuesFilters** (collection): Filters
  - Option: assignee (value: undefined)
  - Option: creator (value: undefined)
  - Option: mentioned (value: undefined)
  - Option: labels (value: undefined)
  - Option: since (value: undefined)
  - Option: state (value: undefined)
  - Option: sort (value: undefined)
  - Option: direction (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return. Maximum value is <a href="https://docs.github.com/en/rest/pulls/pulls?apiVersion=2022-11-28#list-pull-requests">100</a>.
- **getRepositoryPullRequestsFilters** (collection): Filters
  - Option: state (value: undefined)
  - Option: sort (value: undefined)
  - Option: direction (value: undefined)
- **pullRequestNumber** (number): The number of the pull request
- **reviewId** (string): ID of the review
- **pullRequestNumber** (number): The number of the pull request
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **pullRequestNumber** (number): The number of the pull request to review
- **event** (options): The review action you want to perform
  - Option: Approve (value: approve)
  - Option: Request Change (value: requestChanges)
  - Option: Comment (value: comment)
  - Option: Pending (value: pending)
- **body** (string): The body of the review (required for events Request Changes or Comment)
- **additionalFields** (collection): Additional Fields
  - Option: commitId (value: undefined)
- **body** (string): The body of the review
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **organization** (string): The GitHub organization that the user is being invited to
- **email** (string): The email address of the invited user
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **getUserIssuesFilters** (collection): Filters
  - Option: mentioned (value: undefined)
  - Option: labels (value: undefined)
  - Option: since (value: undefined)
  - Option: state (value: undefined)
  - Option: sort (value: undefined)
  - Option: direction (value: undefined)
