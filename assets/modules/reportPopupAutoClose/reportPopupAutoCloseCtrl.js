app.controller('reportPopupAutoCloseCtrl', ['$scope','$uibModalInstance','dataToModal','services' ,function ($scope, $uibModalInstance,dataToModal,services) {
	
	
	if (dataToModal.lang != "") {
	
		
		services.get_reportText(dataToModal.lang,dataToModal.text)
			.then(function (result) {
			    
			    $scope.text = result;
			    
			});
	
	
	}
	else {
	
		 $scope.text = dataToModal.text;
	
	}
	
	
	setTimeout(function(){ $uibModalInstance.close(); }, 2000);
	
	   
   
}]);