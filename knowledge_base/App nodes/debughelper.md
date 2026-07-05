# Node: DebugHelper

**Name**: debugHelper
**Category**: output
**Description**: Causes problems intentionally and generates useful data for debugging
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **category** (options): Category
  - Option: Do Nothing (value: doNothing)
  - Option: Throw Error (value: throwError)
  - Option: Out Of Memory (value: oom)
  - Option: Generate Random Data (value: randomData)
- **throwErrorType** (options): Error Type
  - Option: NodeApiError (value: NodeApiError)
  - Option: NodeOperationError (value: NodeOperationError)
  - Option: Error (value: Error)
- **throwErrorMessage** (string): The message to send as part of the error
- **memorySizeValue** (number): The approximate amount of memory to generate. Be generous...
- **randomDataType** (options): Data Type
  - Option: Address (value: address)
  - Option: Coordinates (value: latLong)
  - Option: Credit Card (value: creditCard)
  - Option: Email (value: email)
  - Option: IPv4 (value: ipv4)
  - Option: IPv6 (value: ipv6)
  - Option: MAC (value: macAddress)
  - Option: NanoIds (value: nanoid)
  - Option: URL (value: url)
  - Option: User Data (value: user)
  - Option: UUID (value: uuid)
  - Option: Version (value: semver)
- **nanoidAlphabet** (string): The alphabet to use for generating the nanoIds
- **nanoidLength** (string): The length of each nanoIds
- **randomDataSeed** (string): If set, seed to use for generating the data (same seed will generate the same data)
- **randomDataCount** (number): The number of random data items to generate into an array
- **randomDataSingleArray** (boolean): Whether to output a single array instead of multiple items
