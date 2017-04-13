/**
 * ng-google-charts v0.1.1 ()
 * Copyright 2017 Joabe Costa <joabetc@hotmail.com> (https://github.com/joabetc)
 * Licensed under MIT
 */
'use strict';

(function (window, angular, undefined) {
  'use strict';

  angular.module('ngGoogleCharts', []);
})(window, window.angular);

module.exports = angular.module('ngGoogleCharts').name;
'use strict';

(function (window, angular, undefined) {
    'use strict';

    angular.module('ngGoogleCharts').factory('googleChartsLoaderService', googleChartsLoaderService);

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
        };

        var service = {
            load: load
        };

        return service;

        function load(chartType) {
            return $q(function (resolve, reject) {
                google.charts.load('45', {
                    packages: [chartPackage[chartType]],
                    callback: resolve
                });
            });
        }
    }
})(window, window.angular);
'use strict';

(function (window, angular, undefined) {
				'use strict';

				angular.module('ngGoogleCharts').component('ngGoogleCharts', {
								template: '<div id="googleChartDiv_{{::$id}}"></div>',
								controller: ngGoogleChartsController,
								bindings: {
												data: '<'
								}
				});

				ngGoogleChartsController.$inject = ['$scope', 'googleChartsLoaderService'];

				function ngGoogleChartsController($scope, googleChartsLoaderService) {
								var _this = this;

								var vm = angular.extend(this, {
												wrapper: null,
												dat: this.data,
												id: $scope.$id
								});

								vm.$onChanges = function (changesObj) {
												if (vm.data != null) {
																vm.dat = vm.data;
												}
												if (vm.dat != null) {

																googleChartsLoaderService.load(_this.dat.chartType).then(function (response) {
																				if (vm.wrapper == null) {
																								vm.wrapper = new google.visualization.ChartWrapper(vm.dat);
																								vm.wrapper.setDataTable(vm.dat.dataTable);
																								vm.wrapper.setOptions(vm.dat.options);
																								vm.wrapper.draw(document.querySelector('#googleChartDiv_' + vm.id));
																				}
																}, function (error) {
																				console.log(error);
																});
												}
								};
				}
})(window, window.angular);