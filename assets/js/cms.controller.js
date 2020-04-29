
app.controller('cmsController',['$scope','$rootScope','$route','$routeParams','$location','$http','services',function($scope,$rootScope,$route,$routeParams,$location,$http,services){  
  
  //coDnsole.log("HELLO");
   var lang = $scope.$parent.lang;
   
//$scope.video = "../content/de/_media/videos/epi-story.mp4";

   $scope.getPage = function(page){
	   		
	   		services.getCMSPage(page,lang)
          .then(function (result) {
                

              if (typeof(result) == "object") {

                   $scope.pageRows = result;
                   console.dir($scope.pageRows);

              }
              else {
                
                 console.log("noPage");
                 $scope.navigateTo('overview/'+lang);

              }


               
                                
         });
	   	
	}; 
   
  
  //alert($route.current.params.page);
      
   
   
   ///////////////////////////////////////////////////////////////
   
    $scope.getPage($route.current.params.page); 
  
}]);