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
    $scope.progressbar = {}
    $scope.progressbar.value = 0
    $scope.progressbar.type = "danger"

    $scope.updatePercentage = function(value) {
      var newVal = $scope.progressbar.value + value
      if (newVal < 0) {
        newVal = 0;
      }
     /* else if(newVal > 40 && newVal < 80) {
        $scope.progressbar.type = 'alert'
      }
      else if(newVal > 80 && newVal < 100) {
        $scope.progressbar.type = 'success'
      }*/
      else if(newVal > 100) {
        newVal = 100
      }
      $scope.progressbar.value = newVal
    }
  });

