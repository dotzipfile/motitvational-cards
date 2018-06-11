/*
 *  Frontend initialisation script
 */

// Define Angular module
var app = angular.module('motCards', ['ngRoute']);

// Setup module configuration
app.config(function($routeProvider) {

  // Define routes
  $routeProvider.when('/', {
    templateUrl: 'app/components/home/home.html',
    controller: 'homeController'
  });
});

// Define homepage controller
app.controller('homeController', function($scope) {
  $scope.title = "Create a motivational card!";
  $scope.cardTitle = "";
  $scope.cardMessage = "";
});
