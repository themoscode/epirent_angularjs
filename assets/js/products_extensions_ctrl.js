
app.controller('products_extensions_ctrl',['$scope',function($scope){  
  
   
    function getMidX( obj ){
        return ( $(obj).parent().width()/2 ) - $(obj).width()/2 - 20;
      }


    $(window).on("scroll resize", function() {
					
        var scrollTop = $(window).scrollTop();		
        var documentHeight = $(document).height();
        var windowHeight = $(window).height();


        var scrollPercent = (scrollTop) / (documentHeight - windowHeight); 	
        
        //Find out more about TimelineMax at http://api.greensock.com/js/com/greensock/TimelineMax.html
        //timeline.progress(scrollPercent).pause()

        console.log("scrollPercent",scrollPercent)
        

        

        if (scrollPercent > 0.030) {
            
            TweenMax.to(".products_pages.extensions .anim_img1", 2, {opacity:1});
        }
        if (scrollPercent > 0.14) {
            
            TweenMax.to(".products_pages.extensions .anim_img2", 2, {opacity:1});
        }
        if (scrollPercent > 0.28) {
            
            TweenMax.to(".products_pages.extensions .anim_img3", 2, {opacity:1});
        }
        if (scrollPercent > 0.35) {
            
            TweenMax.to(".products_pages.extensions .anim_img4", 2, {opacity:1});
        }
        if (scrollPercent > 0.44) {
            
            TweenMax.to(".products_pages.extensions .anim_img5", 2, {opacity:1});
        }
        if (scrollPercent > 0.59) {
            
            TweenMax.to(".products_pages.extensions .anim_img6", 2, {opacity:1});
        }
        if (scrollPercent > 0.69) {
            
            TweenMax.to(".products_pages.extensions .anim_img7", 2, {opacity:1});
        }
        if (scrollPercent > 0.77) {
            
            TweenMax.to(".products_pages.extensions .anim_img8", 2, {opacity:1});
        }
        if (scrollPercent > 0.86) {
            
            TweenMax.to(".products_pages.extensions .anim_img9", 2, {opacity:1});
        }

        if (scrollPercent > 0.95) {
            
           TweenMax.to(".products_pages.extensions .anim_button", 2, {opacity:1});


        }

        

    });	
   
  

}]);