
app.controller('supportForumCtrl',['$scope','$rootScope','$routeParams','$location','$http','services','$timeout',function($scope, $rootScope,$routeParams,$location,$http,services,$timeout){  
  
 

   var lang = $scope.$parent.lang;

  console.log("$scope.$parent.userLogged",$scope.$parent.userLogged);


  $scope.goToForum = function(){

    var ms=0;
    if (arguments.length > 0) {
        ms = arguments[0];
    }

    if ($scope.$parent.userLogged) { //if user is logged
        $scope.userData = JSON.parse(localStorage.sessionUserData);
        console.dir($scope.userData);
        
        services.getLogForumStatus($scope.userData.username,$scope.userData.email)
          .then(function (result) {
            
            result = JSON.parse(result);

            console.log("is_forum_registered",result);
            console.log("1.$scope.userData.usergroup",$scope.userData.usergroup);

            if (result == true && $scope.userData.usergroup == "2"){ //if registered in Forum and he is Kunde -> go to Forum

                $timeout( function(){
                  $('#submit_form_forum_login').trigger('click');
                }, ms );

            }
            else { //if NOT registered in Forum -> go to forum.epi.rent
                
                $scope.navigateToNewTab('http://forum.epi.rent/'); 
            }

          });

       
    }
    else{ //if user NOT logged --> go to forum.epi.rent
     // localStorage.goToForum = "true";
      $scope.navigateToNewTab('http://forum.epi.rent/');
    }
  
   
  }
   
  $scope.goToForum(1000);
 
   ///////////////////////////////////////////////////////////////
   

   
  
  
  
}]);