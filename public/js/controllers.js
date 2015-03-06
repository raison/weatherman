'use strict';

/* Controllers */

var weathermanControllers = angular.module('weathermanControllers', []);

weathermanControllers.controller('HomeCtrl', ['$scope', '$http', 'geolocation',
    function($scope, $http, geolocation) {
    	$scope.loading = true;
        geolocation.getLocation().then(function(data) {

            $http.get('/api/conditions/' + data.coords.latitude + "," + data.coords.longitude).
            success(function(data, status, headers, config) {
                $scope.conditions = data.current_observation;
                $scope.loading = false;
            }).
            error(function(data, status, headers, config) {
                console.log(data);
            });
        });
    }
]);
