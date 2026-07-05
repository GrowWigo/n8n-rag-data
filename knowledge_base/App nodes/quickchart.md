# Node: QuickChart

**Name**: quickChart
**Category**: output
**Description**: Create a chart via QuickChart
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **chartType** (options): The type of chart to create
  - Option: Bar Chart (value: bar)
  - Option: Doughnut Chart (value: doughnut)
  - Option: Line Chart (value: line)
  - Option: Pie Chart (value: pie)
  - Option: Polar Chart (value: polarArea)
- **labelsMode** (options): Add Labels
  - Option: Manually (value: manually)
  - Option: From Array (value: array)
- **labelsUi** (fixedCollection): Labels to use in the chart
  - Option: labelsValues (value: undefined)
- **labelsArray** (string): The array of labels to be used in the chart
- **data** (json): Data to use for the dataset, documentation and examples <a href="https://quickchart.io/documentation/chart-types/" target="_blank">here</a>
- **output** (string): The binary data will be displayed in the Output panel on the right, under the Binary tab
- **chartOptions** (collection): Chart Options
  - Option: backgroundColor (value: undefined)
  - Option: devicePixelRatio (value: undefined)
  - Option: format (value: undefined)
  - Option: height (value: undefined)
  - Option: horizontal (value: undefined)
  - Option: width (value: undefined)
- **datasetOptions** (collection): Dataset Options
  - Option: backgroundColor (value: undefined)
  - Option: borderColor (value: undefined)
  - Option: fill (value: undefined)
  - Option: label (value: undefined)
  - Option: pointStyle (value: undefined)
