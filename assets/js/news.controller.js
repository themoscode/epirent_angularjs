
app.controller('newsController',['$scope','$rootScope','$routeParams','$location','$http','services',function($scope, $rootScope,$routeParams,$location,$http,services){  
  
  //coDnsole.log("HELLO");
   var lang = $scope.$parent.lang;
   
   $scope.currentPage = 1;
   $scope.pageSize = 5;
   
  $scope.ooogetNews = function(lang){
        
  		services.getNews(lang)
  				.then(function (result) {
  		         
  		         $scope.news = result;
  		                         
  		});
  		
  }

  $scope.getNews = function(lang){
    
    $scope.news = [

      {
        "day":"21",
        "month":"12",
        "year":"2018",
        "title":"epirent 6 ist da!",
        "html":"Nach langen Umbaumaßnahmen, epirent 6 ist da. Version 6.10192 jetzt in unserem Downloadbereich https://epi.rent/downloads verfügbar. Wir haben an vielen Stellen gearbeitet, optimiert und neu gebaut. Alle Infos zu den Baustellen sind wie immer unter folgendem Link zu finden: https://epi.rent/releases"

      },
      {
        "day":"30",
        "month":"5",
        "year":"2018",
        "title":"Neues epirent Update ist da",
        "html":"Endlich wieder ein epirent Update. Version 5.9800 jetzt in unserem Downloadbereich https://epi.rent/downloads verfügbar. Endlich ist unser Modul 'epimobile reader', das epirent für die Hosentasche, verfügbar. Alle weiteren Infos zum Release sind wie immer unter folgendem Link zu finden: https://epi.rent/releases"

      },
      {
        "day":"1",
        "month":"3",
        "year":"2018",
        "title":"Neues Update veröffentlicht",
        "html":"Version 5.9635 jetzt in unseren Downloads verfügbar. Alle Infos zum Release sind unter diesem Link zu finden."

      },
      {
        "day":"1",
        "month":"3",
        "year":"2018",
        "title":"Neues Jahr, neues epirent Update",
        "html":"Version 5.9570 jetzt in unseren Downloads verfügbar. Alle Infos zum Release sind unter diesem Link zu finden."

      },

    ];
}

  $scope.twoDigits = function(num){

    return services.twoDigits(num);

  }

  ////////////////////////////////////////////////////////////////////////////////////////
   
  
  $scope.getNews(lang);  
      
   
   
   ///////////////////////////////////////////////////////////////
   
     
  
}]);