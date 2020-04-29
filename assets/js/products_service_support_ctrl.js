
app.controller('products_service_support_ctrl',['$scope','$timeout',function($scope,$timeout){  
  
   
   var lang = $scope.$parent.lang;


/*****************ANIMATION*****************************************/ 
    


   function getMidX( obj ){
    return ( $(obj).parent().width()/2 ) - $(obj).width()/2;
  }

  $(window).on("scroll resize", function() {
					
    var scrollTop = $(window).scrollTop();		
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();


    var scrollPercent = (scrollTop) / (documentHeight - windowHeight); 	
    
    console.log("scrollPercent",scrollPercent)
    

    
    if (scrollPercent > 0.02) {
        
        var tl = new TimelineLite();

        tl.to(".products_pages.service_support .anim1", 1, { x: getMidX(".products_pages.service_support .anim1") } );
         
    }

      if (scrollPercent > 0.107) {
              
        TweenMax.to(".products_pages.service_support .anim2", 2, {opacity:1});
    }

    if (scrollPercent > 0.117) {
              
      TweenMax.to(".products_pages.service_support .anim3", 2, {opacity:1});
    }

    if (scrollPercent > 0.170) {
              
      TweenMax.to(".products_pages.service_support .anim4", 2, {opacity:1});
     }
     
     if (scrollPercent > 0.268) {
              
      TweenMax.to(".products_pages.service_support .anim5", 2, {opacity:1});
     }

     if (scrollPercent > 0.300) {
              
      TweenMax.to(".products_pages.service_support .anim6", 2, {opacity:1});
     }

     if (scrollPercent > 0.413) {
              
      TweenMax.staggerTo(".products_pages.service_support .anim7", 0.5, {rotation:360,opacity:1,onComplete:function(){
        TweenMax.staggerTo(".products_pages.service_support .anim7_1_1", 1, {opacity:1}, 0.5);
      }}, 0.2);
      TweenMax.to(".products_pages.service_support .anim7_1", 2, {opacity:1});
     }

     if (scrollPercent > 0.45) {
         
      //TweenMax.staggerTo(".products_pages.service_support .anim7_1_1", 1, {opacity:1}, 0.5);
 
      }

     if (scrollPercent > 0.479) {
         
      TweenMax.to(".products_pages.service_support .anim8", 2, {opacity:1});

     }

     if (scrollPercent > 0.53) {
         
      TweenMax.staggerTo(".products_pages.service_support .anim8_1", 1, {opacity:1}, 0.5);
 
      }

      if (scrollPercent > 0.61) {
         
        TweenMax.to(".products_pages.service_support .anim8_2", 2, {opacity:1});
   
        }

      if (scrollPercent > 0.65) {
         
          TweenMax.staggerTo(".products_pages.service_support .anim8_2_1", 1, {opacity:1}, 0.5);
     
          } 

      
     if (scrollPercent > 0.722) {
              
      TweenMax.to(".products_pages.service_support .anim9", 2, {opacity:1});
     }

     if (scrollPercent > 0.80) {

      TweenMax.to(".products_pages.service_support .anim10", 2, {opacity:1});

     }

     if (scrollPercent > 0.85) {

      TweenMax.to(".products_pages.service_support .anim11", 2, {opacity:1});
      
     }

     if (scrollPercent > 0.89) {

      TweenMax.to(".products_pages.service_support .anim12", 2, {opacity:1});
      
     }

     if (scrollPercent > 0.94) {
              
     TweenMax.to(".products_pages.service_support .anim12_1", 1, {rotation:360});

     /*
      TweenMax.to(".products_pages.service_support .anim12_1", 0.2, {rotation:30,onComplete:function(){ 

        TweenMax.to(".products_pages.service_support .anim12_1", 0.2, {rotation:-30,onComplete:function(){

          TweenMax.to(".products_pages.service_support .anim12_1", 0.2, {rotation:0});

        }});

      }}); */
      
     }


     if (scrollPercent > 0.93) {

      TweenMax.to(".products_pages.service_support .anim13", 2, {opacity:1});
      
     }

     

});	

/*****************ANIMATION END*****************************************/ 


  $scope.choosePacket = function(index_show){
        
        $scope.selectedPacket = $scope.packets[index_show].title;

        angular.forEach($scope.packets, function (value, index) {
         if (index_show != index)
                $scope.packets[index].show = false;
        });
        
        $timeout(function () {
                $scope.packets[index_show].show = true;
                
        }, 400);
   } 

   $scope.packets=[

        {
          "title":"Der Standardservice",
          "show":true      
        },
        {
          "title":"epirent GURU",
          "show":false      
        },
        {
          "title":"epirent GURU +",
          "show":false      
        },
        {
          "title":"epirent GURU WE",
          "show":false      
        },
        {
          "title":"epirent GURU WE+",
          "show":false      
        },
        {
          "title":"epirent GURU +1",
          "show":false      
        }
   ];

   $scope.selectedPacket = $scope.packets[0].title;

}]);