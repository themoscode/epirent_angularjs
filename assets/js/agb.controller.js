
app.controller('agbController',['$scope','$rootScope','$routeParams','$location','$http','services',function($scope, $rootScope,$routeParams,$location,$http,services){  
  
  //coDnsole.log("HELLO");
   var lang = $scope.$parent.lang;
   
   

  $scope.backtoShop = false;

  ////////////////////////////////////////////////////////////////////////////////////////
   
  if ($routeParams.topage){
        
       
        $scope.backtoShop = true;
}
  
      
   
   
   ///////////////////////////////////////////////////////////////
   
     
  
}]);