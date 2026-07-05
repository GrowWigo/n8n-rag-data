# Node: Ldap

**Name**: ldap
**Category**: transform
**Description**: Interact with LDAP servers
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **operation** (options): Operation
  - Option: Compare (value: compare)
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Rename (value: rename)
  - Option: Search (value: search)
  - Option: Update (value: update)
- **nodeDebug** (boolean): Debug
- **dn** (string): The distinguished name of the entry to compare
- **dn** (string): The distinguished name of the entry to create
- **dn** (string): The distinguished name of the entry to delete
- **dn** (string): The distinguished name of the entry to rename
- **dn** (string): The distinguished name of the entry to modify
- **dn** (string): The distinguished name of the entry to update
- **id** (options): The ID of the attribute to compare
- **value** (string): The value to compare
- **targetDn** (string): The new distinguished name for the entry
- **attributes** (fixedCollection): Attributes to add to the entry
  - Option: attribute (value: undefined)
- **attributes** (fixedCollection): Update entry attributes
  - Option: add (value: undefined)
  - Option: replace (value: undefined)
  - Option: delete (value: undefined)
- **baseDN** (string): The distinguished name of the subtree to search in
- **searchFor** (options): Directory object class to search for
- **customFilter** (string): Custom LDAP filter. Escape these chars * ( ) \ with a backslash "\".
- **attribute** (options): Attribute to search for
- **searchText** (string): Text to search for, Use * for a wildcard
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: attributes (value: undefined)
  - Option: pageSize (value: undefined)
  - Option: scope (value: undefined)
