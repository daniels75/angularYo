'use strict';

describe('Controller: SamplesCtrl', function () {

  // load the controller's module
  beforeEach(module('angularYoApp'));

  var SamplesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SamplesCtrl = $controller('SamplesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
