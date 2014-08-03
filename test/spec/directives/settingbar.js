'use strict';

describe('Directive: settingBar', function () {

  // load the directive's module
  beforeEach(module('angularbootApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<setting-bar></setting-bar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the settingBar directive');
  }));
});
