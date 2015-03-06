'use strict';

/* App Module */

var weatherMan = angular.module('weathermanApp', [
  'ngRoute',
  'weathermanControllers',
  'weathermanDirectives',
  'weathermanFilters',
  'weathermanServices'
]);

weatherMan.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
