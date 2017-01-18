
var app = angular.module("bookApp", ["ngRoute"]);
    app.config(['$routeProvider',function($routeProvider) {
    $routeProvider


      .when ("/welcome",{
          templateUrl: "welcome.html "
      })
     

    .when("/booklist", {
        templateUrl : "booklist.html",
         controller : "BookCtrl"
       
    })
     .when("/add", {
         templateUrl : "add.html",
         controller : "AddCtrl"

     })
    
    /*
    .when("/editBook:id", {
        templateUrl : "editBook.html",
        controller : "EditCtrl"

    });
   */

    .when("/edit/", {
        templateUrl : "edit.html",
        controller : "EditCtrl"

    });

    }]);


function Route1Controller($scope, $routeParams) {
    $scope.id = $routeParams.id;
}