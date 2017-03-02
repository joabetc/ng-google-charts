'use strict';

describe('ngGoogleCharts', function() {

  beforeEach(module('ngGoogleCharts'));

  var scope,
    rootScope,
    controller;

  describe('TestController', function() {

    beforeEach(function() {
      inject(function($injector, _$rootScope_, _$controller_) {
        rootScope = _$rootScope_;
        controller = _$controller_;
        scope = _$rootScope_.$new();

        controller('TestController', {
          $scope: scope,
          $rootScope: rootScope
        });
      });
    });

    it('initial values should be set', function() {
      expect(scope.message).toBe('Hello world!');
    });
  });
});
