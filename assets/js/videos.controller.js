
app.controller('videosController',['$scope','$interval','$routeParams','services',function($scope,$interval,$routeParams,services){  
    
    
    $scope.showGallery = false;

   
    $scope.youtubePlayer = {
        videoId: '',
        player: null,
        vars: {
            controls: 1,
            showinfo: 0
        }
    };

     $scope.$on('youtube.player.ready', function ($event, player) {
        // play it again
        console.log("player.ready");
        
      });
    
      $scope.$on('youtube.player.ended', function ($event, player) {
        
        console.log("video.ended");

        if ($scope.playlistName!="complete") {

            var index=$scope.playlistIndex;index++;
            if (index == $scope.currentPlaylist.length) index=0;
            $scope.playVideo(index);

        }
        
        
      }); 

     
    $scope.startGallery = function(playlistName){
        $scope.showGallery = true;
        $scope.getPlaylist(playlistName);
    }

    $scope.loadVideo = function(index){
        
        $scope.playlistIndex = index;
        $scope.youtubePlayer.videoId = $scope.currentPlaylist[index].id;
                 
    }

    $scope.playVideo = function(index){
        
        $scope.loadVideo(index);
        
        setTimeout(function () {
            $scope.youtubePlayer.player.playVideo();
            document.getElementById("vid-list-container").scrollTop = index*75;
        }, 1000);

               
    }




    $scope.getPlaylist = function(playlistName){
        
        $scope.playlistName = playlistName;
        $scope.playlistIndex = 0;
        $scope.currentPlaylist = $scope.playlists[playlistName];
        $scope.loadVideo($scope.playlistIndex);
            
    }

     /***************************************************************************************/

    $scope.playlists = {
                   
                    complete:[
                        {
                        id:"GChNCWXy6xs",
                        title:"entdecke epirent"
                    }
                ],  
                  
                   workflow:[
                        {
                        id:"-qoxgnHO3Oo",
                        title:"Die Toolbar"
                        },
                        {
                        id:"ldz99Qj3cm0",
                        title:"Das Angebot"
                        },
                        {
                        id:"tW2ovPq3bv8",
                        title:"Der Auftrag"
                        },
                        {
                        id:"ozgknjzrZs0",
                        title:"Der Packschein"
                        },
                        {
                        id:"j8LVJFOA3kk",
                        title:"Die Rechnung"
                        },
                        {
                        id:"JId_TJ2-35w",
                        title:"Die TeamAgenda"
                        },
                        {
                        id:"8Q4Shtcc_Z8",
                        title:"Vermietung mit Barcode"
                        },
                        {
                        id:"wQbQBZLz-_Y",
                        title:"Vermietung ohne Barcode"
                        },
                        {
                        id:"-Kx8hgA5YEw",
                        title:"epirent Kalender"
                        },
                        {
                        id:"GCR1AZFtZvA",
                        title:"epirent Mandant"
                        },
                        {
                        id:"zyHL_OYa3I8",
                        title:"Das Ampelsystem"
                        },
                        {
                        id:"5eiQyPgO5sg",
                        title:"Die Fehlliste"
                        },
                        {
                        id:"6-LIjzTiIwk",
                        title:"Die Fremdanmietung"
                        },
                        {
                        id:"Ov95KO35-mA",
                        title:"Die Kapitelfunktion"
                        },
                        {
                        id:"ORshdXT8J_0",
                        title:"Die Mitarbeiterdisposition"
                        },
                        {
                        id:"S_zPZ6w74do",
                        title:"Fremdanmietung angekommen"
                        },
                        {
                        id:"KqbFcxe-q6Y",
                        title:"Individuelle Listendarstellung"
                        },
                        {
                        id:"9EoVmVvvcDg",
                        title:"Kundenbeziehungen"
                        }
                    ],
                    usefulFunctions:[
                        {
                        id:"mUvwKNgemFY",
                        title:"Der DailyDrop"
                        },
                        {
                        id:"5bwEbfxZiCw",
                        title:"Die Artikelpreisanpassung"
                        },
                        {
                        id:"xyLjps8a64g",
                        title:"Die Dokumentvorlagen"
                        },
                        {
                        id:"-1M3Guon9xA",
                        title:"Die Inventur"
                        },
                        {
                        id:"kktDn3m7X38",
                        title:"Die Wandlung von Mengen in Einzelartikel"
                        },
                        {
                        id:"CTJicsTan_8",
                        title:"Die Werkstatt"
                        },
                        {
                        id:"I8RCRbwOid0",
                        title:"Ein Mietartikel wird zum Verkaufsartikel"
                        },
                        {
                        id:"lsZzUU1Cr2Q",
                        title:"Einen Artikel dem Packschein hinzufügen"
                        },
                        {
                        id:"sQwZL6AZzYE",
                        title:"Einen Packschein löschen"
                        },
                        {
                        id:"PUgS-LZB4QM",
                        title:"Qualitätsmanagement"
                        },
                        {
                        id:"XSvDX_iiV94",
                        title:"Rechnungen stornieren"
                        }
                    ],
                    setUp:[
                        {
                            id:"OGXWxsRWg9Y",
                            title:"Das Barcodesystem"
                            },
                            {
                            id:"L_ZJToe8R24",
                            title:"Das Mahnwesen"
                            },
                            {
                            id:"gtrN8z2FrJM",
                            title:"Der Barcode"
                            },
                            {
                            id:"n6PtnrjczaA",
                            title:"Der Importassistent"
                            },
                            {
                            id:"e27Kz-yJCB4",
                            title:"Der Transport"
                            },
                            {
                            id:"VenawzriBOs",
                            title:"Der Wareneingang"
                            },
                            {
                            id:"mT71uRIm3-U",
                            title:"Die Adressen"
                            },
                            {
                            id:"OSZ4xTuSymA",
                            title:"Die Benutzerrechte"
                            },
                            {
                            id:"FQjNfLQk1l0",
                            title:"Die Dateiablage"
                            },
                            {
                            id:"j9v7VDi_xqw",
                            title:"Die E Mail Einrichtung"
                            },
                            {
                            id:"uj1HRZWw2dk",
                            title:"Die Eingangsrechnung"
                            },
                            {
                            id:"o2MYQHK8C74",
                            title:"Die Erweiterungsfelder"
                            },
                            {
                            id:"jZjhM63hUKw",
                            title:"Die Staffelpreise & Zeitfaktoren"
                            },
                            {
                            id:"J9P39Eu9dJA",
                            title:"Die vorbereitende Buchhaltung"
                            },
                            {
                            id:"kpP4sVt56F0",
                            title:"Die Zahlungskonditionen"
                            },
                            {
                            id:"DhpME_K6kzQ",
                            title:"PDF Möglichkeiten"
                            },
                            {
                            id:"0GVTU-YVRDo",
                            title:"Personal hinzufügen"
                            },
                            {
                            id:"VaOVkUBFE7s",
                            title:"Service hinzufügen"
                            }
                    ]
    }


    /***************************************************************************************/
    
    if ($routeParams.playlist != undefined){//load a specific video
        
        if($scope.playlists.hasOwnProperty($routeParams.playlist)){
            /////
            $scope.startGallery($routeParams.playlist);
            var videoIndex = services.arrayObjectIndexOf($scope.playlists[$routeParams.playlist], $routeParams.videoCode, "id");
            //console.log("index="+videoIndex);
            
            if (videoIndex!=-1) {
            
                $scope.loadVideo(videoIndex);

                if ($routeParams.playlist != 'complete') {

                    setTimeout(function () {
                        document.getElementById("vid-list-container").scrollTop = videoIndex*75;
                    }, 1000);

                }

            }
            /////
        }
	
	}
    
    
  }]);