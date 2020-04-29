
app.controller('supportGuidanceCtrl',['$scope','$rootScope','$routeParams','$location','$http','services','$timeout',function($scope, $rootScope,$routeParams,$location,$http,services,$timeout){  
  
 


 $timeout( function(){
    $scope.navigateToNewTab('http://wiki.epirent.de/')
  }, 3000 );


 

  ///////////////////////////////////////////////////////////////
  

 
}]);