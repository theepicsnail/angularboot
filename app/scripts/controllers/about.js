'use strict';

/**
 * @ngdoc function
 * @name angularbootApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularbootApp
 */
angular.module('angularbootApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
