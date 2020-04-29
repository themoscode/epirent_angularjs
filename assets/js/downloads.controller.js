
app.controller('downloadsController',['$scope','$rootScope','$routeParams','$location','$http','services','$uibModal',function($scope, $rootScope,$routeParams,$location,$http,services,$uibModal){  
  
  //coDnsole.log("HELLO");
   var lang = $scope.$parent.lang;
   
   $scope.userCanDownload = false;
   
   
   if (localStorage.sessionUserData){

     var userData = JSON.parse(localStorage.sessionUserData);
     //console.log(userData.usergroup);
     if (userData.usergroup != "1") {
        $scope.userCanDownload = true;
     }

   } 
  
  console.log($scope.userCanDownload);

  ////////////////////////////////////////////////////////////////////////////////////////

  $scope.msg = function(){

    services.openReportPopupAutoClose('ONLY_CLIENTS_CAN_DOWNLOAD',lang); 

  }


  $scope.redirect = function(){

    services.openReportPopupAutoClose("LOGIN_TO_USE_SERVICE",lang);
    $scope.navigateTo('home/'+lang+'/redirect/downloads');

  }
  
  $scope.openEpiDemoPopup = function(os) {
		
		//alert(lang);
		
		var modalInstance = $uibModal.open({
		          animation: true,
		          templateUrl: "content/"+lang+"/downloads/popup_epirent_demo/"+os+".html",
		          controller: "popupEpirentDemoCtrl"
		          
		        });
	}
      
   
   
   ///////////////////////////////////////////////////////////////
   
     
  
}]);