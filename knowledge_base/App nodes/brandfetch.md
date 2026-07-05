# Node: Brandfetch

**Name**: Brandfetch
**Category**: output
**Description**: Consume Brandfetch API
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
  - Option: Color (value: color)
  - Option: Company (value: company)
  - Option: Font (value: font)
  - Option: Industry (value: industry)
  - Option: Logo (value: logo)
- **domain** (string): The domain name of the company
- **download** (boolean): Name of the binary property to which to write the data of the read file
- **imageTypes** (multiOptions): Image Type
  - Option: Icon (value: icon)
  - Option: Logo (value: logo)
- **imageFormats** (multiOptions): The image format in which the logo should be returned as
  - Option: PNG (value: png)
  - Option: SVG (value: svg)
