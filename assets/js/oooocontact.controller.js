
app.controller('contactController',['$scope','$rootScope','$routeParams','$location','$http','services','vcRecaptchaService',function($scope, $rootScope,$routeParams,$location,$http,services,vcRecaptchaService){  
  
  //coDnsole.log("HELLO");
   var lang = $scope.$parent.lang;
   
   $scope.contactForm = {};

   $scope.contactForm.publicKey = "6LfwXCMUAAAAAChodd3osAAVKm7D1cW2luN903b2";


   $scope.submit_contactForm = function() {
          //alert(vcRecaptchaService.getResponse());
          
          var recaptchaResponse = vcRecaptchaService.getResponse();
          
          
          if(recaptchaResponse === ""){ //if string is empty
                  alert("Please resolve the captcha and submit!");
          }
          else {
         
          services.solve_recaptcha(recaptchaResponse,lang)
            .then(function (result) {
                
                console.dir(result)
                                
          });

        
        }

   } 

   /*
   $scope.ooooosubmit_contactForm = function(){
        
      if (!$scope.contactForm.tel) {$scope.contactForm.tel="";} 
          
  		services.submit_contactForm($scope.contactForm,lang)
  				.then(function (result) {
  		         
  		         services.openReportPopup(result,"");
  		                         
  		});
  		
  }
  */
   
  ////////////////////////////////////////////////////////////////////////////////////////
   
   
      
   
   
   ///////////////////////////////////////////////////////////////
   
     
  
}]);