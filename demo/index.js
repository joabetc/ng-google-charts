'use strict';

angular
  .module('demoApp', [
    'ngGoogleCharts'
  ])
  .controller('demoMainController', function() {

  	var vm = this;

  	vm.ganttChartOptions = {
        chartType: 'Gantt',
        dataTable: [
          ['Task ID', 'TaskName', 'Resource', 'Start Date', 'End Date', 'Duration', 'Percent Complete', 'Dependencies'],
          ['Research', 'Find sources', 'teste', new Date(2015, 12, 1), new Date(2016, 3, 5), 0,  100,  null],
          ['Test', 'Find Test', 'run', new Date(2016, 1, 2), new Date(2016, 10, 5), 0,  100,  null]
        ]
      };

      vm.columnChartOptions = {
        chartType: 'ColumnChart',
        dataTable: [
          ['', 'Germany', 'USA', 'Brazil', 'Canada', 'France', 'RU'],
          ['', 700, 300, 400, 500, 600, 800]],
        options: {'title': 'Countries'}
      };

      vm.pieChartOptions = {
        chartType: 'PieChart',
        dataTable: [
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ],
        options: {title: 'My Daily Activities'}
      }
  });
