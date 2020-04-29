

var app = angular.module('myApp', ['ngRoute','ui.bootstrap','ngSanitize','ngAnimate','angular-confirm','angularUtils.directives.dirPagination','vcRecaptcha','youtube-embed','ng.deviceDetector']);
  

app.run(function($rootScope) {
    /*
    $rootScope.$on("$locationChangeStart", function(event, next, current) { 
        console.log("locationChangeStart");
        console.dir(current);
        console.dir(next);  
        $(window).scrollTop();
    });
    */
    $rootScope.$on('$locationChangeSuccess', function () {
        console.log('$locationChangeSuccess changed!', new Date());
        window.scrollTo(0, 0);
    });

});




  