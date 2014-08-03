'use strict';

/**
 * @ngdoc directive
 * @name angularbootApp.directive:settingBar
 * @description
 * # settingBar
 */
angular.module('angularbootApp')
  .directive('settingBar', function () {
    return {
      templateUrl: 'views/settingBar.html'
      /*restrict: 'E',
      /*link: function postLink(scope, element, attrs) {
        element.text('this is the settingBar directive');
      }*/
    };
  });
