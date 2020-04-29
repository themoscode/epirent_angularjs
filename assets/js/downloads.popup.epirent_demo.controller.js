app.controller('popupEpirentDemoCtrl', ['$scope','$uibModalInstance',function ($scope, $uibModalInstance) {
	
    $scope.close = function($event) {
  
        $uibModalInstance.close();
    };
       
   
}]);