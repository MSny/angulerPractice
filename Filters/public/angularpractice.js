

// angular.module wraps the whole app
// we call it and create a new module called angularpractice
// $scope similar to el from backbone
angular.module('angularpractice', ['ngRoute'/* equivalent to requires */])
    .controller('testcontroller', function($scope) {
        $scope.dinner = ["turkey roast", "deviled eggs", "mashed potatoes", "Chilean Seabass"];
        $scope.clicked = function() {
        	$scope.newitem = $scope.newitem + "bring it on!"
        };
        
        $scope.addtoList = function() {
            $scope.dinner.push($scope.newitem);
        };
    })





    .controller('apéritifcontroller', function($scope) {
        $scope.liquors = ['Amontillado','Dry Sherry','Red Dubonnet'];
    })

// setting up the routing to load the partials with this function:
    .config(function($routeProvider) { 
        $routeProvider
            .when('/apéritifs', {
                templateUrl: 'partials/apéritifs.html',
                controller: 'apéritifcontroller'
            })

    });