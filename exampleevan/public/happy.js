angular.module('happyapp', ['ngRoute'])
  .controller('ExpressionController', function($scope) {
    $scope.val1 = 5;
    $scope.val2 = 10;
  })

  .controller('RepeatController', function($scope) {
    $scope.tangosteps = ['Gancho','Sacada','Colgada','Volcada','Barrida','Giro','Parada','Crusada'];
  })

  .controller('EventsController', function($scope) {
    $scope.inputtext = "hey there";
    $scope.clicked = function(text) {
      alert(text);
    };
  })

  .controller('MyServiceExample', function($scope,happyservice) {
    $scope.happy = happyservice;
    $scope.mystring = "good morning";
    $scope.getExcited = function() {
      $scope.mystring = happyservice.addExclams($scope.mystring);
    }
  })

  .controller('MyOtherServiceExample', function($scope,happyservice) {
    $scope.happy = happyservice;
    $scope.doubleit = function() {
      happyservice.happinesslevel *= 2;
    }
  })

  .factory('happyservice', function() {
    var happinesslevel = 12;
    return {
      happinesslevel: happinesslevel,
      addExclams: function addExclams(text) {
        return text + "!!!";
      }
    };
  })

  .config(function($routeProvider) {
    $routeProvider
      .when('/expression', {
        templateUrl: 'partials/expression.html',
        controller: 'ExpressionController'
      })
      .when('/repeat', {
        templateUrl: 'partials/repeat.html',
        controller: 'RepeatController'
      })
      .when('/events', {
        templateUrl: 'partials/events.html',
        controller: 'EventsController'
      })
      .when('/service1', {
        templateUrl: 'partials/service1.html',
        controller: 'MyServiceExample',
      })
      .when('/service2', {
        templateUrl: 'partials/service2.html',
        controller: 'MyOtherServiceExample',
      })
  });