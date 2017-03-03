/**
 * ng-google-charts v0.1.0 ()
 * Copyright 2017 Joabe Costa
 * Licensed under MIT
 */
'use strict';

(function (window, angular, undefined) {
  'use strict';

  angular.module('ngGoogleCharts.controllers', []).controller('TestController', ['$scope', function ($scope) {
    var message = 'Hello world!';
    $scope.message = message;
  }]);
})(window, window.angular);
'use strict';

(function (window, angular, undefined) {
  'use strict';

  angular.module('ngGoogleCharts.directives', ['ngGoogleCharts.controllers']).directive('testDirective', [function () {
    return {
      restrict: 'E',
      controller: 'TestController',
      scope: {},
      template: '<div class="ng-google-charts">{{message}}</div>'
    };
  }]);
})(window, window.angular);
'use strict';

(function (window, angular, undefined) {
  'use strict';

  angular.module('ngGoogleCharts', ['ngGoogleCharts.controllers', 'ngGoogleCharts.directives']);
})(window, window.angular);