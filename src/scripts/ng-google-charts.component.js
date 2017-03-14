(function(window, angular, undefined) {
  'use strict';

  angular
        .module('ngGoogleCharts')
        .component('ngGoogleCharts', {
			templateUrl: 'ng-google-charts.template.html',
			controller: ngGoogleChartsController,
			bindings: {
				data: '<'
				}
			});

    ngGoogleChartsController.$inject = ['$scope','googleChartsLoaderService'];

    function ngGoogleChartsController($scope, googleChartsLoaderService) {
        
        var vm = angular.extend(this, {
        	wrapper: null,
        	dat: this.data,
        	id: $scope.$id
        });

	    vm.$onChanges = (changesObj) => {
	        if (vm.data != null) {
	            vm.dat = vm.data;
	        }
	        if (vm.dat != null) {
	        
	            googleChartsLoaderService.load(this.dat.chartType).then(function(response) {
	                if (vm.wrapper == null) {
	                    vm.wrapper = new google.visualization.ChartWrapper(vm.dat);
	                    vm.wrapper.setDataTable(vm.dat.dataTable);
	                    vm.wrapper.setOptions(vm.dat.options);
	                    vm.wrapper.draw(document.querySelector('#googleChartDiv_' + vm.id));
	                }
	            }, function(error) {
	                console.log(error);
	            });
	        }
	    }
    }
})(window, window.angular);