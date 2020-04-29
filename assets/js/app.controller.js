
app.controller('rootController',['$scope','$route','$rootScope','$routeParams','$location','services','$window','$anchorScroll','deviceDetector',function($scope,$route,$rootScope,$routeParams,$location,services,$window,$anchorScroll,deviceDetector){  
  
   $scope.lang = "de";
   $scope.isMobileDevice=services.isMobileDevice();

   console.log("deviceDetector");
   console.dir($scope.deviceDetector);

   console.log("isMobileDevice",$scope.isMobileDevice);
  

   console.log("app.controller");

   angular.element(document).ready(function () {
    console.log('page loading finshed');
});

///////////////////COOKIES ACCEPT///////////////////////////////

   if (window.localStorage.cookiesAccepted == "true") {
    $scope.cookiesAccepted = true;
   }

   else {
    $scope.cookiesAccepted = false;
   }
   
   $scope.setCookiesAccepted = function(){
    window.localStorage.cookiesAccepted = "true";
    $scope.cookiesAccepted = true;
   }
//////////////////////////////////////////////////////

   $scope.changeLang = function(lang){
     $route.updateParams({lang:lang});
   }

   $scope.$on('$locationChangeSuccess', function() { 
      
      if ($route.current.params.lang == "de" ) {
      //if ($route.current.params.lang == "de" || $route.current.params.lang == "en") { activate for english
           $scope.lang = $route.current.params.lang;
      }
      else {
           $scope.changeLang("de");
      }
       
   });


   $scope.loopRange = function(min, max, step){
			    step = step || 1;
			    var input = [];
			    for (var i = min; i <= max; i += step) input.push(i);
			    return input;
		   };

   /////////////////////////////////////////////////////////////
   
   $scope.userLogged = services.getLogStatus();
   
   console.dir($scope.userLogged);

   if ($scope.userLogged) {
   
   		//console.dir(JSON.parse(localStorage.sessionUserData));
   
   }
   
   
   /////////////NAVBAR/////////////////////////////////
   
   $scope.isNavCollapsed = true;
   
   $scope.isNavMenuItemActive = function (viewLocation) { 
   
   		  	return viewLocation === $location.path();
       };
       
    /////////////NAVBAR/////////////////////////////////   
   
   $scope.navigateToNewTab = function(url){
    
    window.open(url, '_blank');

   }    

   $scope.navigateTo = function(url){
	   		
         $location.path(url);
         
         

	   	
	   };    

     
     $scope.gotoURL = function(url){
        
        var param = "_self";

        if (arguments.length > 1)   {
            param = arguments[1];
           
        } 
       
        $window.open(url,param );

     }

     $scope.scrollTo = function(scrollLocation) {

        $location.hash(scrollLocation);
        $anchorScroll.yOffset = 20;
        $anchorScroll();

  }
  
}]);