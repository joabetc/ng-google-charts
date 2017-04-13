(function () {
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
            ['Research', 'Find sources', null, new Date(2015, 0, 1), new Date(2015, 0, 5), null,  100,  null],
            ['Write', 'Write paper', 'write', null, new Date(2015, 0, 9), daysToMilliseconds(3), 25, 'Research,Outline'],
            ['Cite', 'Create bibliography', 'write', null, new Date(2015, 0, 7), daysToMilliseconds(1), 20, 'Research'],
            ['Complete', 'Hand in paper', 'complete', null, new Date(2015, 0, 10), daysToMilliseconds(1), 0, 'Cite,Write'],
            ['Outline', 'Outline paper', 'write', null, new Date(2015, 0, 6), daysToMilliseconds(1), 100, 'Research']
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

      function daysToMilliseconds(days) {
        return days * 24 * 60 * 60 * 1000;
      }
    });

})();