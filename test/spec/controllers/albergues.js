'use strict';

describe('Controller: AlberguesCtrl', function () {

  // load the controller's module
  beforeEach(module('adoptApp'));

  var AlberguesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AlberguesCtrl = $controller('AlberguesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AlberguesCtrl.awesomeThings.length).toBe(3);
  });
});
