'use strict';

/**
 * @ngdoc overview
 * @name angularbootApp
 * @description
 * # angularbootApp
 *
 * Main module of the application.
 */
angular
  .module('angularbootApp', [
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($rootScope) {
    $rootScope.background='rgb(0,100,200)';
  })
  ;
