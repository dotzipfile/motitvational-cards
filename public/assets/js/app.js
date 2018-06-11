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
app.controller('homeController', function($scope, $http) {
  $scope.title = 'Create a motivational card!';
  $scope.cardTitle = '';
  $scope.cardMessage = '';

  $scope.createCard = function() {
    var req = {
      method: 'POST',
      url: '/card',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        title: $scope.cardTitle,
        message: $scope.cardMessage
      }
    };

    $http(req).then(function(success) {
      console.log(success);
    }, function(failure) {
      console.log(failure);
    });
  };
});
