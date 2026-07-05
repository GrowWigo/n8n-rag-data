# Node: NASA

**Name**: nasa
**Category**: transform
**Description**: Retrieve data from the NASA API
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
  - Option: Asteroid Neo-Browse (value: asteroidNeoBrowse)
  - Option: Asteroid Neo-Feed (value: asteroidNeoFeed)
  - Option: Asteroid Neo-Lookup (value: asteroidNeoLookup)
  - Option: Astronomy Picture of the Day (value: astronomyPictureOfTheDay)
  - Option: DONKI Coronal Mass Ejection (value: donkiCoronalMassEjection)
  - Option: DONKI High Speed Stream (value: donkiHighSpeedStream)
  - Option: DONKI Interplanetary Shock (value: donkiInterplanetaryShock)
  - Option: DONKI Magnetopause Crossing (value: donkiMagnetopauseCrossing)
  - Option: DONKI Notification (value: donkiNotifications)
  - Option: DONKI Radiation Belt Enhancement (value: donkiRadiationBeltEnhancement)
  - Option: DONKI Solar Energetic Particle (value: donkiSolarEnergeticParticle)
  - Option: DONKI Solar Flare (value: donkiSolarFlare)
  - Option: DONKI WSA+EnlilSimulation (value: donkiWsaEnlilSimulation)
  - Option: Earth Asset (value: earthAssets)
  - Option: Earth Imagery (value: earthImagery)
- **operation** (options): Operation
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Get Many (value: getAll)
- **operation** (options): Operation
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Get (value: get)
- **asteroidId** (string): The ID of the asteroid to be returned
- **additionalFields** (collection): Additional Fields
  - Option: includeCloseApproachData (value: undefined)
- **download** (boolean): By default just the URL of the image is returned. When set to true the image will be downloaded.
- **binaryPropertyName** (string): Put Output File in Field
- **additionalFields** (collection): Additional Fields
  - Option: date (value: undefined)
- **additionalFields** (collection): Additional Fields
  - Option: startDate (value: undefined)
  - Option: endDate (value: undefined)
- **additionalFields** (collection): Additional Fields
  - Option: startDate (value: undefined)
  - Option: endDate (value: undefined)
  - Option: location (value: undefined)
  - Option: catalog (value: undefined)
- **lat** (number): Latitude for the location of the image
- **lon** (number): Longitude for the location of the image
- **binaryPropertyName** (string): Put Output File in Field
- **additionalFields** (collection): Additional Fields
  - Option: date (value: undefined)
  - Option: dim (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
