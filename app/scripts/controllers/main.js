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
      if(sock.readyState && !netUpdate)
        sock.send(JSON.stringify(newValue));
      netUpdate = false;
      $rootScope.background = 'rgb(' +
        newValue.red.value + "," +
        newValue.green.value + "," +
        newValue.blue.value + ")"
    },true);

    var netUpdate = false;
    var sock = new SockJS('http://theepicsnail.net:2000/sjs');
    console.log(sock);
    sock.onmessage = function(msg) {
      netUpdate = true;
      console.log("Sock:", msg);
      console.log($scope);
      $scope.settings = JSON.parse(msg.data);
      $scope.$apply();
    };

});

