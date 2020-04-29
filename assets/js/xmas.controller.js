
app.controller('xmasController',['$scope','$rootScope','$routeParams','$location','$http','services',function($scope, $rootScope,$routeParams,$location,$http,services){  
  
  //coDnsole.log("HELLO");
   var lang = $scope.$parent.lang;
   
   $scope.xmasForm = {};
   
   $scope.submit_xmasForm = function() {
    
       services.submit_xmasForm($scope.xmasForm,lang)
           .then(function (result) {
               
              sessionStorage.removeItem("answer");
              sessionStorage.removeItem("firma");
              sessionStorage.removeItem("name");
              sessionStorage.removeItem("email");

               $scope.xmasForm.answer="";
               $scope.xmasForm.firma="";
               $scope.xmasForm.name="";
               $scope.xmasForm.email="";

               services.openReportPopupAutoClose(result,"");

             
                               
       });
  

} 

$scope.goToTerms = function(){

    sessionStorage.answer = $scope.xmasForm.answer;
    sessionStorage.firma = $scope.xmasForm.firma;
    sessionStorage.name = $scope.xmasForm.name;
    sessionStorage.email = $scope.xmasForm.email;

    $scope.navigateTo('xmas/terms/'+lang);


}

//console.log("session storage");
//console.dir(sessionStorage);



if (sessionStorage.answer!='undefined') $scope.xmasForm.answer=sessionStorage.answer;
if (sessionStorage.firma!='undefined') $scope.xmasForm.firma=sessionStorage.firma;
if (sessionStorage.name!='undefined') $scope.xmasForm.name=sessionStorage.name;
if (sessionStorage.email!='undefined') $scope.xmasForm.email=sessionStorage.email;

 
    
    
    

  
      
   
   
   ///////////////////////////////////////////////////////////////
   
     
  
}]);