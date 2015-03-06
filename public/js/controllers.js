'use strict';

/* Controllers */

var weathermanControllers = angular.module('weathermanControllers', []);

weathermanControllers.controller('HomeCtrl', ['$scope', '$http', 'geolocation',
    function($scope, $http, geolocation) {
    	$scope.loaded = false;
        geolocation.getLocation().then(function(data) {
            $scope.coords = {
                lat: data.coords.latitude,
                long: data.coords.longitude
            };

            $http.get('/api/conditions/' + data.coords.latitude + "," + data.coords.longitude).
            success(function(data, status, headers, config) {
                $scope.conditions = data.current_observation;
                $scope.loaded = true;
            }).
            error(function(data, status, headers, config) {
                console.log(data);
            });
        });
    }
]);
