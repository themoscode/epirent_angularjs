
app.controller('dataProtectionCtrl',['$scope','$rootScope','$routeParams','$location','$http','services','$uibModal',function($scope, $rootScope,$routeParams,$location,$http,services,$uibModal){  
  
  //coDnsole.log("HELLO");
   var lang = $scope.$parent.lang;
   $scope.$parent.userLogged = true;

   $scope.showButtons = true;
  
   $scope.agree = function(){

    $scope.userData = JSON.parse(localStorage.sessionUserData);

        //set privacy_policy_agree
        services.set_privacy_policy_agree($scope.userData.uid)
			.then(function (result) {
                
                result = JSON.parse(result);
                console.log(typeof(result),result);

                if (result) {
                    $scope.userData.timestamp_pp_accepted=result;
                    localStorage.timestamp_pp_accepted = result;

                    localStorage.sessionUserData = JSON.stringify($scope.userData);			
                    
                    $scope.navigateTo("/home/"+lang);
                }

               
							
		});
       

        
   }

   $scope.logout = function(){

        localStorage.removeItem("timestamp_pp_accepted");
        localStorage.removeItem("pp_timestamp");
        

        localStorage.sessionUserData = false;
        $scope.$parent.userLogged = false;
        $scope.navigateTo("/home/"+lang);
  }
  
  
  
  
   
   
   ///////////////////////////////////////////////////////////////
   
     
  
}]);