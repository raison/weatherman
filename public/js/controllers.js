'use strict';

/* Controllers */

var weathermanControllers = angular.module('weathermanControllers', []);

weathermanControllers.controller('HomeCtrl', ['$scope', '$http', 'geolocation',
  function($scope, $http, geolocation) {
    geolocation.getLocation().then(function(data){
      $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
      console.log(coords);
    });
  }]);
