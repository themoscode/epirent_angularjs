
app.controller('products_start_questions_ctrl',['$scope','$http','services','$timeout',function($scope,$http,services,$timeout){  
  

    var lang = $scope.$parent.lang;
    $scope.isNumber = angular.isNumber;
    
    if (!JSON.parse(localStorage.sessionUserData)){
        $scope.navigateTo("/home/"+lang);
    }
    else{
        $scope.$parent.userLogged = true;
        $scope.userAllData = JSON.parse(localStorage.sessionUserData);
        if ($scope.userAllData.usergroup == "9" && $scope.userAllData.questions_answered == "1" ) {
						
			$scope.navigateTo("/home/"+lang);
			
		}
    }

    console.log("$scope.userData=",$scope.userAllData);
    $scope.userData = {

        "name":$scope.userAllData.name,
        "email":$scope.userAllData.email,
        "firma":$scope.userAllData.company,
        "userID":$scope.userAllData.uid
   }



  
   
   
    $scope.logOutUser = function(){
        
        localStorage.removeItem("timestamp_pp_accepted");
        localStorage.removeItem("pp_timestamp");
        localStorage.sessionUserData = false;
        $scope.$parent.userLogged = false;
        $scope.navigateTo("/home/"+lang);
        
    }

   

$scope.questions = [{
    //0
    "type": "multiple",
    "show": false,
    "question": "Möchtest Du epirent Mieten oder Kaufen?",
    "answer": "",
    "title": "Miete / Kauf",
    "answers": ["Miete", "Kauf"]
},
{
    //1
    "type": "multiple",
    "show": false,
    "question": "Wird epirent auf einem Server oder als Einzelplatz genutzt?",
    "answer": "",
    "title": "Server / Einzel",
    "answers": ["Server", "Einzelplatz"]
},

{
    //2
    "type": "multiple",
    "show": false,
    "question": "Sollen wir die Installation von epirent für Dich übernehmen?",
    "answer": "",
    "title": "Installation",
    "answers": ["Ja", "Nein"]
},

{
    //3
    "type": "number",
    "min":1,
    "show": false,
    "question": "Wieviele Mitarbeiter sollen gleichzeitig mit epirent arbeiten können?",
    "answer": "",
    "title": "epirent Clients"
},

{
    //4
    "type": "number",
    "min":0,
    "show": false,
    "question": "Wieviele Arbeitsplätze sollen mobil über unsere Webanwendung betrieben werden?",
    "answer": "",
    "title": "epirent mobile",
    "guide_page":2
},

{
    //5
    "type": "multiple",
    "show": false,
    "question": "Eine gute Datenbank braucht Stammdaten. Willst Du Dir bei der Datenmigration von einem alten System wie z.B. Excel, Lexware oder easyJob von uns helfen lassen?",
    "answer": "",
    "title": "Datenmigration",
    "answers": ["Ja", "Nein"]
},

{
    //6
    "type": "multiple",
    "show": false,
    "question": "Wir können für Dich individuell die Dokumentvorlagen für z.B. Aufträge oder Rechnungen etc. erstellen. Damit sparst Du viel Zeit und Geld und kannst sofort mit epirent loslegen. Sollen wir uns darum kümmern?",
    "answer": "",
    "title": "Dokumentvorlagen",
    "answers": ["Ja", "Nein"]
},

{
    //7
    "type": "multiple",
    "show": false,
    "question": "Wir empfehlen ein professionelles Unternehmer-Training für epirent, damit der Start reibungslos funktioniert. Diesen gibt es beim Kauf von epirent vergünstigt. Möchtest Du dieses Training nutzen?",
    "answer": "",
    "title": "TRAINING",
    "answers": ["1 Stunde", "2 Stunden","4 Stunden","8 Stunden","Nein"],
    "guide_page":3
},

{   
    //8
    "type": "multiple",
    "show": false,
    "question": "Möchtest Du Kalenderabos für Termine, Mitarbeiter oder Aufträge auf das Smartphone o.ä. übertragen?",
    "answer": "",
    "title": "KALENDER",
    "answers": ["Ja", "Nein"]
},

{   
    //9
    "type": "multiple",
    "show": false,
    "question": "Brauchst Du eine Anbindung an Deine Telefonanlage?",
    "answer": "",
    "title": "TELEFON",
    "answers": ["Ja", "Nein"]
},

{   
    //10
    "type": "multiple",
    "show": false,
    "question": "Möchtest Du die vorbereitenden Buchhaltungsdaten im DATEV Format übermitteln?",
    "answer": "",
    "title": "DATEV Pro",
    "answers": ["Ja", "Nein"]
},

{
    //11
    "type": "multiple",
    "show": false,
    "question": "Möchtest Du DGUV Prüfprotokolle aus FLUKE oder SECUTEST in epirent importieren und aus Aufträgen Protokolle ausgeben?",
    "answer": "",
    "title": "DGUV",
    "answers": ["FLUKE", "SECUTEST", "Nein"]
},

{
    //12
    "type": "multiple",
    "show": false,
    "question": "Möchtest Du einen eigenen hochwertigen Artikelkatalog für Deine Kunden erstellen?",
    "answer": "",
    "title": "KATALOGREPORT",
    "answers": ["Ja", "Nein"]
},

{
    //13
    "type": "number",
    "min":0,
    "show": false,
    "question": "Arbeitest Du aktuell oder in Zukunft mit einer oder mehr Firmen zusammen und möchtest epirent dabei als Hauptdatenbank nutzen?. Mit wievielen Firmen möchtest du zusammenarbeiten?",
    "answer": "",
    "title": "MANDANT"
},

{
    //14
    "type": "multiple",
    "show": false,
    "question": "Möchtest Du für Deine Produkte einen erweiterten QR-Code zum Hinterlegen von Benutzerhandbüchern oder Internetseiten generieren?",
    "answer": "",
    "title": "QR Code",
    "answers": ["Ja", "Nein"]
},

{
    //15
    "type": "multiple",
    "show": false,
    "question": "Möchtest Du zur Steigerung der Qualität Deines Unternehmens Dein epirent um ein Ticketsystem nach DIN9001 Norm zertifizieren?",
    "answer": "",
    "title": "QM",
    "answers": ["Ja", "Nein"]
},

{
    //16
    "type": "multiple",
    "show": false,
    "question": "Möchtest Du Vertragsabschlüsse inklusive Laufzeiten für Deine Kunden in epirent registrieren?",
    "answer": "",
    "title": "VERTRAG",
    "answers": ["Ja", "Nein"],
    "guide_page":4
},

{
    //17
    "type": "multiple",
    "show": false,
    "question": "Möchtest Du in den Genuss eines erweiterten Services von uns kommen und bei Supportanfragen an erster Stelle stehen?",
    "answer": "",
    "title": "GURU",
    "answers": ["Ja", "Nein"]
},

{
    //18
    "type": "multiple",
    "show": false,
    "question": "Willst Du uns auch ausserhalb der Servicezeiten bzgl. Support erreichen?",
    "answer": "",
    "title": "GURU+",
    "answers": ["Ja", "Nein"]
},

{
    //19
    "type": "multiple",
    "show": false,
    "question": "Brauchst Du unseren Service auch am Wochenende?",
    "answer": "",
    "title": "GURU WE",
    "answers": ["Ja", "Nein"]
},

{
    //20
    "type": "multiple",
    "show": false,
    "question": "Für größere Unternehmen ist die erweiterte Erreichbarkeit von 7-19 Uhr am Wochenende sehr hilfreich. Spielt das für Dich eine wichtige Rolle?",
    "answer": "",
    "title": "GURU WE+",
    "answers": ["Ja", "Nein"]
},

{
    //21
    "type": "number",
    "min":0,
    "show": false,
    "question": "Möchtest Du Dein monatliches Zeitkontingent für Service erhöhen?",
    "answer": "",
    "title": "GURU +1",
    
},

{
    //22
    "type": "multiple",
    "show": false,
    "question": "Wir können Dein System ausserhalb Deiner Geschäftszeiten updaten. Möchtest Du das von uns machen lassen?",
    "answer": "",
    "title": "Update Service Basis",
    "answers": ["Ja", "Nein"] //if no jump to question 26 
},

{
    //23
    "type": "multiple",
    "show": false,
    "question": "Sollen wir gleich Deine Datenbank mit auf Fehlerfreiheit prüfen und ggf. reparieren?",
    "answer": "",
    "title": "Update Service Business",
    "answers": ["Ja", "Nein"]
},
{
    //24
    "type": "multiple",
    "show": false,
    "question": "Für größere Unternehmen ist eine Hochleistungsverfügbarkeit wichtig, sollen wir uns zu 100% um den epirent Server kümmern?",
    "answer": "",
    "title": "Update Service Premium",
    "answers": ["Ja", "Nein"]
},
{
    //25
    "type": "multiple",
    "show": false,
    "question": "In welchem Zeitraum planst Du Deinen Start mit epirent?",
    "answer": "",
    "title": "Zeitraum",
    "answers": ["1 Monat", "3 Monate", "6 Monate"],
    "guide_page":5
}




];

   $scope.guide_page = 0;
   $scope.current_question = 0; 
   $scope.questions_finished = false;

   $scope.show_question = function(question_index){

        $scope.guide_page = 0;
        $scope.current_question = question_index+1; 

        angular.forEach($scope.questions, function (value, index) {
            $scope.questions[index].show = false;
        });

        $timeout(function () {
            $scope.questions[question_index].show = true;
            
        }, 500);

        

    }

    $scope.postData = function () {

        $http.post('php/index.php?action=submit_products_start_form', {dataSend:$scope.questions,lang:lang,userData:$scope.userData}).success(
          function(result){
            $scope.response = result;

            $scope.userAllData.questions_answered = '1';
            localStorage.sessionUserData = JSON.stringify($scope.userAllData);


            services.openReportPopupAutoClose(result,"");
            $scope.navigateTo("/home/"+lang);

          })
    }


    


    $scope.answer = function(question_index,answer){

        //console.log("$scope.questions[question_index].guide_page",$scope.questions[question_index].guide_page)
        console.log("question_index",question_index);
        
        $scope.questions[question_index].answer = answer;
        if ($scope.questions[question_index].guide_page == undefined) {
            
            if (question_index == 2 && $scope.questions[1].answer!="Server"){
                $scope.show_question(5);
            }

            else if (question_index == 12 && $scope.questions[1].answer!="Server"){
                $scope.show_question(14);
            }

            else if (question_index == 17 && answer!="Ja"){
                $scope.show_question(22);
            }

            else if (question_index == 19 && answer!="Ja"){
                $scope.show_question(22);
            }

            else if (question_index == 22 && answer!="Ja"){
                $scope.show_question(25);
            }

            else if (question_index == 23 && answer!="Ja"){
                $scope.show_question(25);
            }

            else {
                if (question_index < ($scope.questions.length-1)){
                    $scope.show_question(question_index+1);
                }
            }

            
        }

        else {
           
            $scope.questions[question_index].show = false;
            $scope.guide_page = $scope.questions[question_index].guide_page;
            $scope.current_question=-1;
            //$scope.current_question = $scope.questions[question_index].next_question;
        }

        
    }

}]);