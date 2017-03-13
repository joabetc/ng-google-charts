# ng-google-charts

## What is it?

An AngularJS Component for [Google Charts](https://developers.google.com/chart/).
This component uses Google's [ChartWrapper](https://developers.google.com/chart/interactive/docs/drawing_charts#chartwrapper) to draw charts.

## Installation

```console
bower install ng-google-charts --production
```

## Usage requirement

Declare the following dependency in your index.html or equivalent:

````
<script src="https://www.gstatic.com/charts/loader.js"></script>
````

## Development

1. Clone the repo or [download]().
2. ``npm install && bower install``
3. Setup E2E testing environment: ``npm install -g protractor && webdriver-manager update --standalone``
4. Run ``gulp watch`` and open [http://localhost:8080/demo/index.html](http://localhost:8080/demo/index.html)
5. Use ``gulp test-unit`` or ``gulp test-e2e`` to execute your tests
6. Finally, be sure that selenium driver is up: ``webdriver-manager start`` and run ``gulp build``

## License

MIT
