
app.controller('contactController',['$scope','$rootScope','$routeParams','$location','$http','services','vcRecaptchaService',function($scope, $rootScope,$routeParams,$location,$http,services,vcRecaptchaService){  
  
   //coDnsole.log("HELLO");
   var lang = $scope.$parent.lang;

   $scope.userData = false;
  
   if ($scope.userLogged) {

        console.log("sessionUserData="+localStorage.sessionUserData);
        $scope.userData = JSON.parse(localStorage.sessionUserData);
   }

   $scope.contactForm = {office:"support"};
   $scope.disabledSelect=false; 


   if ($routeParams.office){
        $scope.disabledSelect=true;    
        $scope.contactForm = {office:$routeParams.office};
   }


   $scope.contactForm.agreeTerms = false;
   $scope.contactForm.agreeAGB = false;

   if ($scope.userData) {
        $scope.contactForm.name = $scope.userData.name;
        $scope.contactForm.email = $scope.userData.email;
        $scope.contactForm.tel = $scope.userData.telephone;
   }

   //$scope.contactForm.publicKey = "6LfwXCMUAAAAAChodd3osAAVKm7D1cW2luN903b2"; //themos

   $scope.contactForm.publicKey = "6LfqoCMUAAAAADXGPGdbNROWXrgl3ZIyNbikOdul"; //epi
 


   $scope.submit_contactForm = function() {
         
          
            if (!$scope.contactForm.tel) {$scope.contactForm.tel="";} 
          
            services.submit_contactForm($scope.contactForm,lang)
                .then(function (result) {
                    
                    $scope.contactForm.subject="";
                    $scope.contactForm.mailText="";

                    services.openReportPopupAutoClose(result,"");

                    $scope.navigateTo('overview/'+lang);
                                    
            });

          

   } 


   
     
  
}]);