
    
    
    angular.module("bookApp").controller('EditCtrl',function($scope,dataService){
$scope.data=[];


    $scope.GetData=function()
    {
        dataService.Get().then(function(response){
            $scope.data=response.data; });
    }


$scope.GetData();
$scope.modify = function(detail){

				$scope.modifyField = true;
				$scope.viewField = true;
			};


 $scope.UpdateData=function(detail)
    {       $scope.data=detail;
        	$scope.modifyField = false;
            $scope.viewField = false;
            $scope.GetData();
				
                 
        dataService.Update($scope.data).then(function(data){
            
            detail=$scope.data;
            return detail;
           
            });
    }

});