(function(window, angular, undefined) {
  'use strict';

  angular
        .module('ngGoogleCharts')
        .component('ngGoogleCharts', {
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

	    vm.$onInit = () => {

	        if (vm.dat === null || vm.dat === undefined) {
	            vm.dat = vm.data;
	        }
	        googleChartsLoaderService.load(vm.dat.chartType).then(function(response) {
	        	console.log(response);
	            if (vm.wrapper === null) {
	                vm.wrapper = new google.visualization.ChartWrapper(vm.dat);
	            } else {
	                vm.wrapper.setDataTable(vm.dat.dataTable);
	                vm.wrapper.setOptions(vm.dat.options);
	            }
	            vm.wrapper.draw(document.getElementById("googleChartDiv"));
	        }, function(error) {
	            console.log(error);
	        });
	    };

	    vm.$onChanges = (changesObj) => {
	        vm.dat = vm.data;
	    	vm.height = (vm.dat.dataTable.length * 42) + 42;
	    };
    }
})(window, window.angular);