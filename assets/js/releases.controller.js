
app.controller('releasesController',['$scope','$rootScope','$routeParams','$location','$http','services',function($scope, $rootScope,$routeParams,$location,$http,services){  
  
  //coDnsole.log("HELLO");
   var lang = $scope.$parent.lang;
   
   $scope.currentPage = 1;
   $scope.pageSize = 1;
   
  $scope.getReleases = function(lang){
        
  		services.getReleases(lang)
  				.then(function (result) {
  		         
  		         $scope.releases = result;

              //   console.dir($scope.releases);
  		                         
  		});
  		
  }

  $scope.twoDigits = function(num){

    return services.twoDigits(num);

  }

  ////////////////////////////////////////////////////////////////////////////////////////
   
  
  $scope.getReleases(lang);  
      
   
   
   ///////////////////////////////////////////////////////////////
   
     
  
}]);