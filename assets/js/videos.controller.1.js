
app.controller('videosController',['$scope','$interval','$sce',function($scope,$interval,$sce){  
    
    
    $scope.showGallery = false;

    /*****************YOUTUBE API*********************************/
    
    

    var elementExists = document.getElementById("youtube_api");
    
     if (elementExists == null) {

        console.log("create element");

        var tag = document.createElement('script');
        tag.id="youtube_api";
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        
     }
        
        window.onYouTubeIframeAPIReady = function() {
          $scope.player = new YT.Player('vid_frame', {
              events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
              },
              playerVars: { 
                'autoplay': 0
                
              }
          });
        }

     

      

   
    

    function onPlayerReady(event) {
        
        $scope.playerReady = true;
        console.log("player ready");
        
    }
    
    function onPlayerStateChange(event) {
      //0 :ended
      //1 :playing
      //2 :paused  
      //3 :buffering
      //5 :cued
      if (event.data == 0) { //video ended
        
        var index=$scope.playlistIndex;index++;
        if (index == $scope.currentPlaylist.length) index=0;
        $scope.playVideo(index);
       
      }

    }
   
    
    $scope.playVideo = function(index){
        
          setTimeout(function () {
            $scope.$apply(function () {
              
              $scope.playlistIndex = index;
              console.log("$scope.playlistIndex="+$scope.playlistIndex);
              $scope.player.loadVideoById({videoId:$scope.currentPlaylist[index].id});
              document.getElementById("vid-list-container").scrollTop = index*75;
              
            });
        }, 100);
           
    }


    $scope.loadVideo = function(index){

        $scope.playlistIndex = index;
        $scope.player.cueVideoById({videoId:$scope.currentPlaylist[index].id});
         
     }

    $scope.checkPlayerReady = function(){
        
        if ( $scope.playerReady == true) {
            $interval.cancel($scope.timer);
            $scope.loadVideo($scope.playlistIndex);
        }
    }

    $scope.startGallery = function(playlistName){
      $scope.showGallery = true;
      $scope.getPlaylist(playlistName);
    }

    $scope.getPlaylist = function(playlistName){

        
        $scope.playlistName = playlistName;

        $scope.playlistIndex = 0;
        $scope.currentPlaylist = $scope.playlists[playlistName];
        
        $scope.timer=$interval(function() {
            $scope.checkPlayerReady();
          }, 100);
        
        

    }

     /***************************************************************************************/

    $scope.playlists = {
                   
                    complete:[
                        {
                        id:"vmDDOFXSgAs",
                        title:"complete_title1"
                    }
                ],  
                  
                   workflow:[
                        {
                        id:"hvvme-WMzQM",
                        title:"workflow_title1"
                        },
                        {
                        id:"vmDDOFXSgAs",
                        title:"workflow_title2"
                        },
                        {
                        id:"vmDDOFXSgAs",
                        title:"workflow_title3"
                        },
                        {
                        id:"vmDDOFXSgAs",
                        title:"workflow_title4"
                        },
                        {
                        id:"hvvme-WMzQM",
                        title:"workflow_title1"
                        },
                        {
                        id:"vmDDOFXSgAs",
                        title:"workflow_title2"
                        },
                        {
                        id:"vmDDOFXSgAs",
                        title:"workflow_title3"
                        },
                        {
                        id:"vmDDOFXSgAs",
                        title:"workflow_title4"
                        }
                    ],
                    usefulFunctions:[
                        {
                        id:"vmDDOFXSgAs",
                        title:"usefulFunctions_title1"
                        },
                        {
                        id:"vmDDOFXSgAs",
                        title:"usefulFunctions_title2"
                        },
                        {
                        id:"vmDDOFXSgAs",
                        title:"usefulFunctions_title3"
                        },
                        {
                        id:"vmDDOFXSgAs",
                        title:"usefulFunctions_title4"
                        }
                    ],
                    setUp:[
                        {
                        id:"vmDDOFXSgAs",
                        title:"setUp_title1"
                        },
                        {
                        id:"vmDDOFXSgAs",
                        title:"setUp_title2"
                        },
                        {
                        id:"vmDDOFXSgAs",
                        title:"setUp_title3"
                        },
                        {
                        id:"vmDDOFXSgAs",
                        title:"setUp_title4"
                        }
                    ]
    }


    /***************************************************************************************/
    
    //$scope.getPlaylist("complete");
    
    
  }]);