# Node: OpenWeatherMap

**Name**: openWeatherMap
**Category**: input
**Description**: Gets current and future weather information
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
  - Option: Current Weather (value: currentWeather)
  - Option: 5 Day Forecast (value: 5DayForecast)
- **format** (options): The format in which format the data should be returned
  - Option: Imperial (value: imperial)
  - Option: Metric (value: metric)
  - Option: Scientific (value: standard)
- **locationSelection** (options): How to define the location for which to return the weather
  - Option: City Name (value: cityName)
  - Option: City ID (value: cityId)
  - Option: Coordinates (value: coordinates)
  - Option: Zip Code (value: zipCode)
- **cityName** (string): The name of the city to return the weather of
- **cityId** (number): The ID of city to return the weather of. List can be downloaded here: http://bulk.openweathermap.org/sample/.
- **latitude** (string): The latitude of the location to return the weather of
- **longitude** (string): The longitude of the location to return the weather of
- **zipCode** (string): The ID of city to return the weather of. List can be downloaded here: http://bulk.openweathermap.org/sample/.
- **language** (string): The two letter language code to get your output in (eg. en, de, ...).
