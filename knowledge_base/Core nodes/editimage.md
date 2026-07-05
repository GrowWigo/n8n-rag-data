# Node: Edit Image

**Name**: editImage
**Category**: transform
**Description**: Edits an image like blur, resize or adding border and text
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
  - Option: Blur (value: blur)
  - Option: Border (value: border)
  - Option: Composite (value: composite)
  - Option: Create (value: create)
  - Option: Crop (value: crop)
  - Option: Draw (value: draw)
  - Option: Get Information (value: information)
  - Option: Multi Step (value: multiStep)
  - Option: Resize (value: resize)
  - Option: Rotate (value: rotate)
  - Option: Shear (value: shear)
  - Option: Text (value: text)
  - Option: Transparent (value: transparent)
- **dataPropertyName** (string): Name of the binary property in which the image data can be found
- **operations** (fixedCollection): The operations to perform
  - Option: operations (value: undefined)
- **backgroundColor** (color): The background color of the image to create
- **width** (number): The width of the image to create
- **height** (number): The height of the image to create
- **primitive** (options): The primitive to draw
  - Option: Circle (value: circle)
  - Option: Line (value: line)
  - Option: Rectangle (value: rectangle)
- **color** (color): The color of the primitive to draw
- **startPositionX** (number): X (horizontal) start position of the primitive
- **startPositionY** (number): Y (horizontal) start position of the primitive
- **endPositionX** (number): X (horizontal) end position of the primitive
- **endPositionY** (number): Y (horizontal) end position of the primitive
- **cornerRadius** (number): The radius of the corner to create round corners
- **text** (string): Text to write on the image
- **fontSize** (number): Size of the text
- **fontColor** (color): Color of the text
- **positionX** (number): X (horizontal) position of the text
- **positionY** (number): Y (vertical) position of the text
- **lineLength** (number): Max amount of characters in a line before a line-break should get added
- **blur** (number): How strong the blur should be
- **sigma** (number): The sigma of the blur
- **borderWidth** (number): The width of the border
- **borderHeight** (number): The height of the border
- **borderColor** (color): Color of the border
- **dataPropertyNameComposite** (string): The name of the binary property which contains the data of the image to composite on top of image which is found in Property Name
- **operator** (options): The operator to use to combine the images
  - Option: Add (value: Add)
  - Option: Atop (value: Atop)
  - Option: Bumpmap (value: Bumpmap)
  - Option: Copy (value: Copy)
  - Option: Copy Black (value: CopyBlack)
  - Option: Copy Blue (value: CopyBlue)
  - Option: Copy Cyan (value: CopyCyan)
  - Option: Copy Green (value: CopyGreen)
  - Option: Copy Magenta (value: CopyMagenta)
  - Option: Copy Opacity (value: CopyOpacity)
  - Option: Copy Red (value: CopyRed)
  - Option: Copy Yellow (value: CopyYellow)
  - Option: Difference (value: Difference)
  - Option: Divide (value: Divide)
  - Option: In (value: In)
  - Option: Minus (value: Minus)
  - Option: Multiply (value: Multiply)
  - Option: Out (value: Out)
  - Option: Over (value: Over)
  - Option: Plus (value: Plus)
  - Option: Subtract (value: Subtract)
  - Option: Xor (value: Xor)
- **positionX** (number): X (horizontal) position of composite image
- **positionY** (number): Y (vertical) position of composite image
- **width** (number): Crop width
- **height** (number): Crop height
- **positionX** (number): X (horizontal) position to crop from
- **positionY** (number): Y (vertical) position to crop from
- **width** (number): New width of the image
- **height** (number): New height of the image
- **resizeOption** (options): How to resize the image
  - Option: Ignore Aspect Ratio (value: ignoreAspectRatio)
  - Option: Maximum Area (value: maximumArea)
  - Option: Minimum Area (value: minimumArea)
  - Option: Only if Larger (value: onlyIfLarger)
  - Option: Only if Smaller (value: onlyIfSmaller)
  - Option: Percent (value: percent)
- **rotate** (number): How much the image should be rotated
- **backgroundColor** (color): The color to use for the background when image gets rotated by anything which is not a multiple of 90
- **degreesX** (number): X (horizontal) shear degrees
- **degreesY** (number): Y (vertical) shear degrees
- **color** (color): The color to make transparent
- **options** (collection): Options
  - Option: destinationKey (value: undefined)
  - Option: fileName (value: undefined)
  - Option: font (value: undefined)
  - Option: format (value: undefined)
  - Option: quality (value: undefined)
