
app.controller('supportController',['$scope','$rootScope','$routeParams','$location','$http','services',function($scope, $rootScope,$routeParams,$location,$http,services){  
  
  //coDnsole.log("HELLO");


  //window.open('http://wiki.epirent.de/', '_blank');

   var lang = $scope.$parent.lang;

  $scope.voteResult = function (answer,obj){
      

    	services.support_voteResult(answer,obj.id)
   		   .then(function (result) {
            	obj.votedResult = result;
             
   		     });

  }

  $scope.ooogetSearchResults = function(){

    if (!$scope.searchFaqForm) {return;}
    if (!$scope.searchFaqForm.searchText) {return;}
    var searchText = $scope.searchFaqForm.searchText;

  
   		services.support_getSearchResults(searchText,lang)
   		   .then(function (result) {
             
             $scope.searchDone = true;
              // console.dir(result);

             if (typeof(result) == "object") {   

                $scope.searchResults = result;

             }
   		       
              else {

                  $scope.searchResults = false;

              }
   		      
   		     });
   		
   }

   $scope.getSearchResults = function(){
    
        if (!$scope.searchFaqForm) {return;}
        if (!$scope.searchFaqForm.searchText) {return;}
        var searchText = $scope.searchFaqForm.searchText;
    
        $scope.searchDone = true;
        $scope.searchResults = [
          {
            "question":"Ich möchte meine Adresse in einer Rechnung ändern!",
            "answer":"Die Rechnung öffnen und im Kontextmenü über der Adresse auf die Auftragsadresse wechseln. Hier kann nun wieder auf die Adressdatenbank zugegriffen werden. <br>Die Rechnung darf nicht gebucht sein.",
            "votedResult":false
          },
          {
            "question":"Ich möchte eine Anzahlungsrechnung erstellen!",
            "answer":"Über die Auftragsliste den Auftrag auswählen und über Abrechnungsbutton die Anzahlungsrechnung erstellen. Eine Akonto-Zahlung ist über den Geldsack-Button möglich.",
            "votedResult":false
          },
          {
            "question":"Ich möchte mehrsprachige Textvorlagen erstellen.",
            "answer":"In den Dokumentvorlagen die gewünschte Vorlage auswählen und in den Editor wechseln. Dort finden sich in der rechten Leiste die mehrsprachigen Textbausteine. Hier können die Dokumentvorlagen mehrsprachig erstellt werden. Die Auswahl der gewünschten Sprache kann dann über den Auftrag ausgewählt werden.",
            "votedResult":false
          },
          {
            "question":"Ich möchte im Angebot oder Auftrag Spalten zur Kalkulation hinzufügen.",
            "answer":"In der mittleren Leiste auf der rechten Seite befindet sich der Button für die Spalten. Nach Klicken öffnet sich ein weiteres Fenster aus dem die Spalten über die Checkbox hinzufügt werden können. Alle neu hinzugefügten Spalten befinden sich in der Gesamtliste auf der rechten Seite und können beliebig angeordnet werden.",
            "votedResult":false
          },
          {
            "question":"Ich möchte eine andere Auftragsversion aktuell schalten.",
            "answer":"In der Auftragliste den Auftrag auswählen und über das Zahnrad auf „aktuell“ schalten.",
            "votedResult":false
          },
        ];
           
       }

  

 
   ///////////////////////////////////////////////////////////////
   

   
  
  
  
}]);