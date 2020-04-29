
app.controller('eshopController',['$scope','$rootScope','$routeParams','$location','$http','services','$confirm','$route',function($scope, $rootScope,$routeParams,$location,$http,services,$confirm,$route){  
  
 
   var lang = $scope.$parent.lang;
  
  if (localStorage.sessionUserData) {
          var user_id = JSON.parse(localStorage.sessionUserData)["uid"];
  }
   

 
 $scope.sendOrder =  function() {
    
    services.eshop_sendOrder(user_id,lang)
    .then(function (result) {

           //console.dir(result);

           if (result == true) {

                services.openReportPopup("ORDER_SENT",lang);
                $scope.getBasketQuantity(user_id);
           }
           
           else {

               services.openReportPopupAutoClose("ORDER_NOT_SENT",lang);
               $route.reload();
           }

    });

 }


  
 $scope.productToBasket = function(product_id,product_price_id) {
    
    services.eshop_productToBasket(product_id,product_price_id,user_id)
    .then(function (result) {
            
            $scope.basketQuantity = result.getBasketQuantity;

          //  console.dir(result);
            $scope.getBasketItems(lang,user_id);
            services.openReportPopupAutoClose("BASKET_UPDATED",lang);

    });

 }


  $scope.getBasketQuantity = function(user_id){

    services.eshop_getBasketQuantity(user_id)
    .then(function (result) {
            
            $scope.basketQuantity = result;

           // console.log("basketQuantity="+$scope.basketQuantity);

    });

  }

   $scope.getCategories = function(lang){
        
		services.eshop_getCategories(lang)
			.then(function (result) {
		        
		        $scope.categories = result;
             
             
                angular.forEach($scope.categories, function(obj){
                    
                    //console.log("id="+obj.id);
                    
                     $scope.getProducts(obj.id,lang);   

                    });


               // console.dir(result);

		    });


  }

$scope.getProducts = function(catID,lang){
        
        $scope.products = [];

		services.eshop_getProducts(catID,lang)
			.then(function (result) {
		         
                 $scope.products[catID] = result;

             //    console.log("product=");
             //    console.dir(result);

		    });


  }

$scope.getCurrencySymbol = function(){

    services.getCurrencySymbol()
    .then(function (result) {
            
            $scope.currencySymbol = result;

    });

}

$scope.deleteBasketItem = function(obj){


        $confirm({text: 'Sind Sie sicher?', title: 'Artikel löschen', ok: 'Ja', cancel: 'Nein'})
	        .then(function() {
	          /////
	          		
			services.eshop_deleteBasketItem(obj.basket_id,user_id)
                        .then(function (result) {
                                
                        $scope.basketQuantity = result.getBasketQuantity;
                        $scope.getBasketItems(lang,user_id);

                        });        
			
	          /////
	        });


       


}

$scope.getBasketItems = function(lang,user_id) {

     services.eshop_getBasketItems(lang,user_id)
    .then(function (result) {
            
            $scope.basketItems = result;
            //  console.log("basketItems");
            //  console.dir($scope.basketItems);

            
            $scope.totalPrice = 0;

             angular.forEach($scope.basketItems, function(obj){
                    
                    //console.log("id="+obj.id);
                    
                     obj.rowPrice = obj.price * obj.quantity;  
                     $scope.totalPrice =  $scope.totalPrice + obj.rowPrice;  
                    });

    });

}


$scope.updateBasketProductQuantity = function (obj,direction) {

   //var user_id = JSON.parse(localStorage.sessionUserData)["uid"];

        if (direction == "+") {obj.quantity++;}
        else {obj.quantity--;}
        if (obj.quantity < 1) {obj.quantity = 1;}

        services.eshop_updateBasketProductQuantity(user_id,obj.basket_id,obj.quantity)
        .then(function (result) {
                
           $scope.basketQuantity = result.getBasketQuantity;
           $scope.getBasketItems(lang,user_id); 

        });



}
 ////////////////////////////////////////////////////



if ($scope.$parent.userLogged) {

     $scope.basketStatus = true;   
     $scope.getCurrencySymbol();
     $scope.getCategories(lang);    
     $scope.getBasketQuantity(JSON.parse(localStorage.sessionUserData)["uid"]); 
     $scope.getBasketItems(lang,JSON.parse(localStorage.sessionUserData)["uid"]); 
}

else {

    services.openReportPopupAutoClose("LOGIN_TO_USE_SERVICE",lang);
    $scope.navigateTo("/home/"+lang+"/redirect/eshop");
}



}]);