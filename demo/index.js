'use strict';

angular
  .module('demoApp', [
    'ngGoogleCharts'
  ])
  .controller('demoMainController', function() {

  	var vm = this;

  	vm.ganttChartOptions= {
        chartType: 'Gantt',
        dataTable: [
          [
            'Task ID', 
            'TaskName', 
            'Resource', 
            'Start Date', 
            'End Date', 
            'Duration', 
            'Percent Complete', 
            'Dependencies'
          ],
          ['Research', 'Find sources', 'teste',
         new Date(2015, 0, 1), new Date(2015, 0, 5), 0,  100,  null]
        ]
      };

  });
