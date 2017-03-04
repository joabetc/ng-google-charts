(function(window, angular, undefined) {
  'use strict';

  angular
        .module('ngGoogleCharts')
        .factory('googleChartsLoaderService', googleChartsLoaderService);

    googleChartsLoaderService.inject = ['$q'];

    function googleChartsLoaderService($q) {

        var chartPackage = {
            AnnotationChart: 'annotationchart',
            AreaChart: 'corechart',
            Bar: 'bar',
            BarChart: 'corechart',
            BubbleChart: 'corechart',
            Calendar: 'calendar',
            CandlestickChart: 'corechart',
            ColumnChart: 'corechart',
            ComboChart: 'corechart',
            PieChart: 'corechart',
            Gantt: 'gantt',
            Gauge: 'gauge',
            GeoChart: 'geochart',
            Histogram: 'corechart',
            Line: 'line',
            LineChart: 'corechart',
            Map: 'map',
            OrgChart: 'orgChart',
            Sankey: 'sankey',
            Scatter: 'scatter',
            ScatterChart: 'corechart',
            SteppedAreaChart: 'corechart',
            Table: 'table',
            Timeline: 'timeline',
            TreeMap: 'treemap',
            WordTree: 'wordtree'
        }

        var service = {
            load:load
        };
        
        return service;

        function load(chartType) {
            return $q(function(resolve, reject) {
                google.charts.load('45', {
                    packages: [chartPackage[chartType]],
                    callback: resolve
                });
            });
        }
    }
})(window, window.angular);