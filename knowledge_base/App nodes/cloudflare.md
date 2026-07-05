# Node: Cloudflare

**Name**: cloudflare
**Category**: input
**Description**: Consume Cloudflare API
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
  - Option: Zone Certificate (value: zoneCertificate)
- **operation** (options): Operation
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getMany)
  - Option: Upload (value: upload)
- **zoneId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **certificate** (string): The zone's leaf certificate
- **privateKey** (string): Private Key
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: status (value: undefined)
- **certificateId** (string): Certificate ID
