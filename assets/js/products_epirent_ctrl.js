
app.controller('products_epirent_ctrl',['$scope',function($scope){  
  
   
    $(window).on("scroll resize", function() {
					
        var scrollTop = $(window).scrollTop();		
        var documentHeight = $(document).height();
        var windowHeight = $(window).height();


        var scrollPercent = (scrollTop) / (documentHeight - windowHeight); 	
        
        //Find out more about TimelineMax at http://api.greensock.com/js/com/greensock/TimelineMax.html
        //timeline.progress(scrollPercent).pause()

        console.log("scrollPercent",scrollPercent)
        
        

        if (scrollPercent > 0.78) {
            
            TweenMax.to(".products_pages.epirent .opts_img", 2, {rotation:360*5});
        }

        if (scrollPercent > 0.05) {
            
            TweenMax.to(".products_pages.epirent .head_img", 2, {opacity:1});
        }

        if (scrollPercent > 0.23) {
            
            TweenMax.to(".products_pages.epirent .anim_title1", 2, {opacity:1});
        }

        if (scrollPercent > 0.27) {
            
            TweenMax.to(".products_pages.epirent .anim_img", 2, {opacity:1});
        }

        if (scrollPercent > 0.41) {
            
            TweenMax.to(".products_pages.epirent .anim_img2", 2, {opacity:1});
        }

        if (scrollPercent > 0.98) {
            
            TweenMax.to(".products_pages.epirent .anim_title2", 2, {opacity:1});
        }

    });	
   
  

}]);