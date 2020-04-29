app.controller('videoPopupCtrl',['$scope','$uibModal',function($scope,$uibModal){
	
  

  $scope.open = function (file) {
    
    
   
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'modules/videoPopup/index.html',
      controller: 'videoPopupCtrlInstance',
      size: 'lg',
      resolve:{
      	dataToModal: {
      		
      		videoFile:file,
      		lang:$scope.lang
      	}
      }
    });
  
  };
  
}]);


// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

app.controller('videoPopupCtrlInstance', ['$scope','$uibModalInstance','dataToModal' ,function ($scope, $uibModalInstance,dataToModal) {
	
	
	
	$scope.videoFile = dataToModal.videoFile;
	$scope.lang = dataToModal.lang;
	
	//alert($scope.videoFile);
	

    $scope.close = function($event) {
  
        $uibModalInstance.close();
    };
       
   
}]);