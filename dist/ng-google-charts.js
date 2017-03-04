/**
 * ng-google-charts v0.1.0 ()
 * Copyright 2017 Joabe Costa
 * Licensed under MIT
 */
'use strict';

(function (window, angular, undefined) {
	'use strict';

	angular.module('ngGoogleCharts').component('ngGoogleCharts', {
		templateUrl: '/src/scripts/ng-google-charts.template.html',
		controller: ngGoogleChartsController,
		bindings: {
			data: '<',
			lines: '@'
		}
	});

	ngGoogleChartsController.$inject = ['$document', 'googleChartsLoaderService'];

	/* @ngInject */
	function ngGoogleChartsController($document, googleChartsLoaderService) {
		var vm = this;

		vm.wrapper = null;

		vm.$onInit = function () {

			if (vm.dat === null || vm.dat === undefined) {
				vm.dat = vm.data;
			}
			googleChartsLoaderService.load(vm.dat.chartType).then(function (response) {
				console.log(response);
				if (vm.wrapper === null) {
					vm.wrapper = new google.visualization.ChartWrapper(vm.dat);
				} else {
					vm.wrapper.setDataTable(vm.dat.dataTable);
					vm.wrapper.setOptions(vm.dat.options);
				}
				vm.wrapper.draw(document.getElementById("googleChartDiv"));
			}, function (error) {
				console.log(error);
			});
		};

		vm.$onChanges = function (changesObj) {
			vm.dat = vm.data;
			vm.height = vm.dat.dataTable.length * 42 + 42;
		};
	}
})(window, window.angular);
'use strict';

(function (window, angular, undefined) {
  'use strict';

  angular.module('ngGoogleCharts', []);
})(window, window.angular);
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