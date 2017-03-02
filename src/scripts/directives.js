(function(window, angular, undefined) {
  'use strict';

  angular
    .module('ngGoogleCharts.directives', [
      'ngGoogleCharts.controllers'
    ])
    .directive('testDirective', [
      function() {
        return {
          restrict: 'E',
          controller: 'TestController',
          scope: {},
          template: '<div class="ng-google-charts">{{message}}</div>'
        };
      }
    ]);

})(window, window.angular);
