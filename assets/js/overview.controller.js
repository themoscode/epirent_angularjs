
app.controller('overviewController',['$scope','$route','$rootScope','$routeParams','$location','$http','services',function($scope, $route ,$rootScope,$routeParams,$location,$http,services){  
  
  //coDnsole.log("HELLO");

   var lang = $scope.$parent.lang;
   
   console.log("$route.current.params.demo="+$route.current.params.demo);

   if ($route.current.params.demo == "demo") {

      $scope.demoMode = true;

   }
  
}]);