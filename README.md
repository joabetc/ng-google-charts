# ng-google-charts

## What is it?

An AngularJS Component for [Google Charts](https://developers.google.com/chart/).
This component uses Google's [ChartWrapper](https://developers.google.com/chart/interactive/docs/drawing_charts#chartwrapper) to draw charts.

## Installation

with bower:
```console
bower install ng-google-charts --production
```

with npm:
````console
npm install ng-google-charts --save
````

## Usage requirement

1. Declare the following dependency in your index.html or equivalent:

````html
<script src="https://www.gstatic.com/charts/loader.js"></script>
````

2. Also add the following declaration to your index.html or equivalent:

````html
<script src="libs/ng-google-charts/dist/ng-google-charts.js"></script>
````

3. Declare `ngGoogleCharts` dependency in your main module.

````javascript
angular
  .module('yourModule', ['ngGoogleCharts'])...
````

4. Insert the component where you want to use it:

````html
<ng-google-charts data="chartOptions"></ng-google-charts>
````
5. Format your data like this:

````javascript
this.chartOptions = {
    chartType: 'Gantt',
    dataTable: [
      ['Task ID', 'TaskName', 'Resource', 'Start Date', 'End Date', 'Duration', 'Percent Complete', 'Dependencies'],
      ['Research', 'Find sources', 'teste', new Date(2015, 12, 1), new Date(2016, 3, 5), 0,  100,  null],
      ['Test', 'Find Test', 'run', new Date(2016, 1, 2), new Date(2016, 10, 5), 0,  100,  null]
    ]
  };
````
  The chartType should be one of the following values:
  * AnnotationChart
  * AreaChart
  * Bar
  * BarChart
  * BubbleChart
  * Calendar
  * CandlestickChart
  * ColumnChart
  * ComboChart
  * PieChart
  * Gantt
  * Gauge
  * GeoChart
  * Histogram
  * Line
  * LineChart
  * Map
  * OrgChart
  * Sankey
  * Scatter
  * ScatterChart
  * SteppedAreaChart
  * Table
  * Timeline
  * TreeMap
  * WordTree

  The dataTable content should follow [ChartWrapper](https://developers.google.com/chart/interactive/docs/drawing_charts#chartwrapper) format.
  
## Development

1. Clone the repo or [download]().
2. ``npm install && bower install``
3. Setup E2E testing environment: ``npm install -g protractor && webdriver-manager update --standalone``
4. Run ``gulp watch`` and open [http://localhost:8080/demo/index.html](http://localhost:8080/demo/index.html)
5. Use ``gulp test-unit`` or ``gulp test-e2e`` to execute your tests
6. Finally, be sure that selenium driver is up: ``webdriver-manager start`` and run ``gulp build``

## License

MIT
