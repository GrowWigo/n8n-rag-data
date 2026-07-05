# Node: Git

**Name**: git
**Category**: transform
**Description**: Control git.
**Version**: 1, 1.1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **authentication** (options): The way to authenticate
  - Option: Authenticate (value: gitPassword)
  - Option: None (value: none)
- **operation** (options): Operation
  - Option: Add (value: add)
  - Option: Add Config (value: addConfig)
  - Option: Clone (value: clone)
  - Option: Commit (value: commit)
  - Option: Fetch (value: fetch)
  - Option: List Config (value: listConfig)
  - Option: Log (value: log)
  - Option: Pull (value: pull)
  - Option: Push (value: push)
  - Option: Push Tags (value: pushTags)
  - Option: Reflog (value: reflog)
  - Option: Status (value: status)
  - Option: Switch Branch (value: switchBranch)
  - Option: Tag (value: tag)
  - Option: User Setup (value: userSetup)
- **repositoryPath** (string): Local path of the git repository to operate on
- **repositoryPath** (string): Local path to which the git repository should be cloned into
- **pathsToAdd** (string): Comma-separated list of paths (absolute or relative to Repository Path) of files or folders to add
- **key** (options): Name of the key to set
  - Option: user.email (value: user.email)
  - Option: user.name (value: user.name)
  - Option: remote.origin.url (value: remote.origin.url)
- **key** (string): Name of the key to set
- **value** (string): Value of the key to set
- **options** (collection): Options
  - Option: mode (value: undefined)
- **sourceRepository** (string): The URL or path of the repository to clone
- **message** (string): The commit message to use
- **options** (collection): Options
  - Option: branch (value: undefined)
  - Option: pathsToAdd (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: file (value: undefined)
- **options** (collection): Options
  - Option: branch (value: undefined)
  - Option: targetRepository (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: reference (value: undefined)
- **branchName** (string): The name of the branch to switch to
- **options** (collection): Options
  - Option: createBranch (value: undefined)
  - Option: startPoint (value: undefined)
  - Option: force (value: undefined)
  - Option: setUpstream (value: undefined)
  - Option: remoteName (value: undefined)
- **name** (string): The name of the tag to create
