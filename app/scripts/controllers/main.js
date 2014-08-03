'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAppApp
 */
angular.module('angularbootApp')
  .controller('MainCtrl', function ($scope) {
    $scope.settings = {
      red:{value: 10},
      green:{value:20},
      blue:{value: 40}
    };
  
  /*  $scope.progressbar = {}
    $scope.progressbar.value = 0
    $scope.progressbar.type = "danger"
*/
});

