angular.module("bookApp").controller('AddCtrl',function($scope,dataService){
$scope.add={};
$scope.add.favorite=false;


//$scope.showMe=false; 
    $scope.AddData=function()
    {
          

        dataService.Post($scope.add).then(function(){
 
            });
  
           $scope.showMe; 

    }





});