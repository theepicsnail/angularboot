'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAppApp
 */
angular.module('angularbootApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    $scope.settings = {
      red:{value: 10, type:'danger'},
      green:{value:20, type:'success'},
      blue:{value: 40, type:'info'}
    };
 
    $scope.$watch('settings', function (newValue) {
      $rootScope.background = 'rgb(' +
        newValue.red.value + "," +    
        newValue.green.value + "," +    
        newValue.blue.value + ")" 
    },true);
});

