# Node: GitLab

**Name**: gitlab
**Category**: input
**Description**: Retrieve data from GitLab API
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
  - Option: Access Token (value: accessToken)
  - Option: OAuth2 (value: oAuth2)
- **resource** (options): Resource
  - Option: File (value: file)
  - Option: Issue (value: issue)
  - Option: Release (value: release)
  - Option: Repository (value: repository)
  - Option: User (value: user)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Create Comment (value: createComment)
  - Option: Edit (value: edit)
  - Option: Get (value: get)
  - Option: Lock (value: lock)
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Issues (value: getIssues)
- **operation** (options): Operation
  - Option: Get Repositories (value: getRepositories)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Edit (value: edit)
  - Option: Get (value: get)
  - Option: List (value: list)
- **owner** (string): User, group or namespace of the project
- **repository** (string): The name of the project
- **title** (string): The title of the issue
- **body** (string): The body of the issue
- **due_date** (dateTime): Due Date for issue
- **labels** (collection): Labels
  - Option: label (value: undefined)
- **assignee_ids** (collection): Assignees
  - Option: assignee (value: undefined)
- **issueNumber** (number): The number of the issue on which to create the comment on
- **body** (string): The body of the comment
- **issueNumber** (number): The number of the issue edit
- **editFields** (collection): Edit Fields
  - Option: title (value: undefined)
  - Option: description (value: undefined)
  - Option: state (value: undefined)
  - Option: labels (value: undefined)
  - Option: assignee_ids (value: undefined)
  - Option: due_date (value: undefined)
- **issueNumber** (number): The number of the issue get data of
- **issueNumber** (number): The number of the issue to lock
- **lockReason** (options): The reason to lock the issue
  - Option: Off-Topic (value: off-topic)
  - Option: Too Heated (value: too heated)
  - Option: Resolved (value: resolved)
  - Option: Spam (value: spam)
- **releaseTag** (string): The tag of the release
- **additionalFields** (collection): Additional Fields
  - Option: name (value: undefined)
  - Option: description (value: undefined)
  - Option: ref (value: undefined)
- **projectId** (string): The ID or URL-encoded path of the project
- **tag_name** (string): The Git tag the release is associated with
- **projectId** (string): The ID or URL-encoded path of the project
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Additional Fields
  - Option: order_by (value: undefined)
  - Option: sort (value: undefined)
- **projectId** (string): The ID or URL-encoded path of the project
- **tag_name** (string): The Git tag the release is associated with
- **additionalFields** (collection): Additional Fields
  - Option: name (value: undefined)
  - Option: description (value: undefined)
  - Option: milestones (value: undefined)
  - Option: released_at (value: undefined)
- **getRepositoryIssuesFilters** (collection): Filters
  - Option: assignee_username (value: undefined)
  - Option: author_username (value: undefined)
  - Option: search (value: undefined)
  - Option: labels (value: undefined)
  - Option: updated_after (value: undefined)
  - Option: state (value: undefined)
  - Option: order_by (value: undefined)
  - Option: sort (value: undefined)
- **filePath** (string): The file path of the file. Has to contain the full path or leave it empty for root folder.
- **filePath** (string): The path of the folder to list
- **page** (number): Page of results to display
- **additionalParameters** (collection): Additional fields to add
  - Option: ref (value: undefined)
  - Option: recursive (value: undefined)
- **asBinaryProperty** (boolean): Whether to set the data of the file as binary property instead of returning the raw API response
- **binaryPropertyName** (string): Put Output File in Field
- **additionalParameters** (collection): Additional fields to add
  - Option: reference (value: undefined)
- **binaryData** (boolean): Whether the data to upload should be taken from binary field
- **fileContent** (string): The text content of the file
- **binaryPropertyName** (string): Input Binary Field
- **commitMessage** (string): Commit Message
- **branch** (string): Name of the new branch to create. The commit is added to this branch.
- **additionalParameters** (fixedCollection): Additional fields to add
  - Option: branchStart (value: undefined)
  - Option: author (value: undefined)
  - Option: encoding (value: undefined)
