
app.controller('carouselController',['$scope','$rootScope','$routeParams','$location','$http','services',function($scope, $rootScope,$routeParams,$location,$http,services){  
  
  //coDnsole.log("HELLO");
  var lang = $scope.$parent.lang;
  var demoMode = $scope.$parent.demoMode;
  var param2 = ""; 


   $scope.myInterval = 6000;
   
   $scope.getCarousel = function(){

      services.getCarousel(lang,param2)
			.then(function (result) {
		        
            $scope.slides = false;

            if (typeof(result) == "object") {
                $scope.slides = result;
            }
		        
            
            console.log("slides=");
            console.dir($scope.slides);

            //console.log($scope.carouselPageHTML);
		            		        
		    });

  } 

 

   console.log("demoMode="+$scope.$parent.demoMode);
/*/////////////////////////////////*/
   
  if (demoMode) {
       param2 = "demo";
  }

  
  $scope.getCarousel();
  

  
  
  
  
}]);