app.controller('textPopupCtrl',['$scope','$uibModal',function($scope,$uibModal){
	
  //content/'+lang+'/'+textFile

  $scope.open = function (file,size) {
    
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'content/'+$scope.lang+'/'+file,
      controller: 'textPopupCtrlInstance',
      size: size
      
    });
  
  };
  
}]);


// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

app.controller('textPopupCtrlInstance', ['$scope','$uibModalInstance' ,function ($scope, $uibModalInstance) {
	  
   // setTimeout(function(){ $scope.close(); }, 3000);
	
    $scope.close = function($event) {
  
        $uibModalInstance.close();
    };
       
   
}]);


