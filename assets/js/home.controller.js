
app.controller('homeController',['$scope','$rootScope','$routeParams','$location','$http','services','$timeout',function($scope, $rootScope,$routeParams,$location,$http,services,$timeout){  
  
  //coDnsole.log("HELLO");
   var lang = $scope.$parent.lang;
   
   $scope.editProfile = false;

  ///////////////////////////////FORUM////////////////////////////////////////////////////////

 $scope.getUserType = function(){

	if ($scope.userData.usergroup == "1") {$scope.userType = "Interessent";}
	if ($scope.userData.usergroup == "2") {$scope.userType = "Kunde";}
	if ($scope.userData.usergroup == "9") {$scope.userType = "Admin";}

 } 

$scope.editProfileStatus = function(val){

	$scope.editProfile = val;
	//console.log ($scope.editProfile);

}
  

  $scope.getLogForumStatus = function(username,email){
        
		services.getLogForumStatus(username,email)
			.then(function (result) {
		        
				result = JSON.parse(result);

		        $scope.is_forum_registered = result;

			  	console.log("username="+username+",email="+email);

			  	console.log("is_forum_registered=");

			  	console.log($scope.is_forum_registered);   

				if (result == false) {
					
					//$scope.userData.sub_decoded = "";
					
				}

				


		    });


  }


$scope.forum_form_register = function(){

	//$scope.is_forum_registered = "true";
	services.username_password_exists($scope.userData.username,$scope.registerForumForm.password)
			.then(function (result) {
               
			   result = JSON.parse(result);

			 //    console.log("RRRRRresult="+result);

		       if (result == false) { 

					services.openReportPopup("WRONG_PASSWORD",lang);

			   }
			   else {

					services.forum_update_fe_users_sub($scope.userData,$scope.registerForumForm.password)
						.then(function (result) {
							
							result = JSON.parse(result);	

							if (result == false) {

										services.openReportPopup("forum_update_fe_users_sub-ERROR","");

							  }

							  else {

										
										services.forum_add($scope.userData,$scope.registerForumForm.password,lang)
												.then(function (result) {
													
													console.log("isNaN"+isNaN(result)); 

													if (!isNaN(result)) {
                                                         
												 // 		console.log("END RESULT!!!!!");
												 // 		console.dir(result);    
														$scope.userData.sub_decoded = $scope.registerForumForm.password;
														$scope.is_forum_registered = true;
														$timeout( function(){
															$('#submit_form_forum_login').trigger('click');
															}, 1000 );
													}

													
												});
												

							  }
							
												
						});

			   }

					        
		    });

}



  ///////////////////////////////FORUM/////////////////////////////////////////////////////////
   
   
   $scope.sent_mail_registration_password = function(registerPassLink,lang){
   
	services.sent_mail_registration_password(registerPassLink,lang)
			.then(function (result) {
		        
		        services.openReportPopup(result,"");
		        $scope.navigateTo("/home/"+lang);
		            		        
		    });
   
   }
   
   $scope.sent_mail_new_password = function(changePassLink,lang) {
   
   		services.sent_mail_new_password(changePassLink,lang)
   			.then(function (result) {
   		        
                var msg = result;

				services.get_per_link(changePassLink).then(function (result) {
		        
		        	var username = result.username;
					var new_password = result.sub_decoded;

					services.forum_changePass(username,new_password)
					.then(function (result) {
						
						if (result == true) {

							services.openReportPopup(msg,"");
							$scope.navigateTo("/home/"+lang);

						}

						else {

							services.openReportPopup("ERROR","");

						}

						
											
					});
		            		        
		        });
   		            		        
   		    });
   
   }
   
   
   $scope.check_userLogged = function(){
        
        var username = $scope.loginForm.username;
        var password = $scope.loginForm.password;
         
        //   console.log("username="+username+",pass="+password);
		  
		  services.getPP_timestamp().then(function(result){
			  
			  var pp_timestamp = JSON.parse(result);
			  console.log("pp_timestamp",pp_timestamp);
			  
			  localStorage.pp_timestamp = pp_timestamp;
			  ////////////////////////////////////////////////////

			  services.check_userLogged(username,password)
  			.then(function (result) {
  	            
				  if (typeof(result) == "object") {
						
						console.log("result");
						console.dir(result);	  
						
						$scope.userData = result;
						console.log("$scope.userData");
						console.dir($scope.userData);	 

  	               		localStorage.sessionUserData = JSON.stringify(result);
  	               		console.log("localStorage.sessionUserData");
						console.dir(JSON.parse(localStorage.sessionUserData));
						
						$scope.registerForumForm = {
							"password":$scope.userData.sub_decoded
						}
							
						console.log("---timestamp_pp_accepted",result['timestamp_pp_accepted']);
						console.log("---lastlogin",result['lastlogin']);

						var timestamp_pp_accepted = JSON.parse(result['timestamp_pp_accepted']);
						localStorage.timestamp_pp_accepted = timestamp_pp_accepted;
						 
						console.log("localStorage.timestamp_pp_accepted:",typeof(localStorage.timestamp_pp_accepted)+":"+localStorage.timestamp_pp_accepted);
						console.log("localStorage.pp_timestamp:",typeof(localStorage.pp_timestamp)+":"+localStorage.pp_timestamp);

						 console.log("timestamp_pp_accepted:",typeof(timestamp_pp_accepted)+":"+timestamp_pp_accepted);
						 console.log("pp_timestamp:",typeof(pp_timestamp)+":"+pp_timestamp);

						 
						
						if ($scope.userData.usergroup != "9" && (timestamp_pp_accepted < pp_timestamp) ){
							$scope.navigateTo("/dataProtection/agree/"+lang);
							
						} else{

							if ($scope.userData.usergroup == "1" && $scope.userData.questions_answered == "0" ) {
						
								$scope.navigateTo("/products/start/questions/"+lang);
							  }
							 else {

								$scope.$parent.userLogged = true;

								$scope.editProfile = false;

								$scope.getUserType();

								$scope.getLogForumStatus($scope.userData.username,$scope.userData.email);	 

								
					
							
								if ($routeParams.topage){

									$scope.navigateTo("/"+$routeParams.topage+"/"+lang);
		
								}
								
								
								

							 }

						}
	
  	               		
  	               } // if (typeof(result) == "object")
  	               
  	               else {
  	               
  	               		//alert(services.get_reportText('de','WRONG_LOGIN'));
  	               		
  	               		services.openReportPopup('WRONG_LOGIN',lang); 
  	               		
  	               }
  	            
  	        });
   		  //////////////////////////////////////////////////////////////////////////////
		  })
		  
   }
   
   
   
   $scope.sent_mail_confirmPasswordChange = function(username,email,lang,obj){
   
   		
   		services.sent_mail_confirmPasswordChange(username,email,lang,obj)
   		   .then(function (result) {
   		         
   		       
   		        services.openReportPopup(result,"");
   		        
   		        
   		         
   		     });
   		
   		
   
   }
   
   
   
   $scope.check_forgotPassword = function(){
        
        var username = $scope.forgotPasswordForm.username;
        var email = $scope.forgotPasswordForm.email;
         
                
   		  services.check_userExists(username,email)
   			.then(function (result) {
   	            
   	            if (typeof(result) == "object") {
   	                     
   	                    //   console.log("user found:");
   	                   //    console.dir(result);
   	                    // console.log(JSON.parse(result));
   	                     
   	                     $scope.sent_mail_confirmPasswordChange(result.username,result.email,lang,result);
   	                     
   	               		
   	               }
   	               
   	               else {
   	               
   	               	 // 	console.log("user NOT found:");
   	               		 //    console.dir(result);
   	               		 //    console.log(result);
   	               		   
   	               		services.openReportPopup('INVALID_USER_MAIL_PASS',lang);
   	               		 
   	               		
   	               }
   	            
   	        });
   		  
   }
   
   
   $scope.check_register = function(){
   
   		
   		var name = $scope.registerForm.name;
   		var address = $scope.registerForm.address;
        var email = $scope.registerForm.email;
        var username = $scope.registerForm.username;
        
        services.sent_mail_confirmRegistration(name,address,email,username,lang)
        		.then(function (result) {
                 
                 services.openReportPopup(result,"");
                                 
        });
        
   
   }
   
   
   $scope.logOutUser = function(){

		localStorage.removeItem("timestamp_pp_accepted");
		localStorage.removeItem("pp_timestamp");

   		localStorage.sessionUserData = false;
   		$scope.$parent.userLogged = false;
   
   }
   
   
   $scope.myData_save_userdata = function(){
   
   		var username = $scope.userData.username;
   		var company = $scope.userData.company;
   		var name = $scope.userData.name;
   		var address = $scope.userData.address;
   		var telephone = $scope.userData.telephone;
   		var fax = $scope.userData.fax;
   		var email = $scope.userData.email;
   		var country = $scope.userData.country;
   		var www = $scope.userData.www;
   		
   		
   		services.myData_save_userdata(username,company,name,address,telephone,fax,email,country,www,lang)
   				.then(function (result) {
   		         
   		         services.openReportPopupAutoClose(result,"");
   		         
   		         services.getUserPerUsername(username).then(function (result){
   		         
   		         	localStorage.sessionUserData = JSON.stringify(result);
   		         	$scope.userData = JSON.parse(localStorage.sessionUserData);
   		         	
   		         	//$scope.editProfile = false;
   		         
   		         });
   		         
   		                         
   		});
   
   }
   
   
   $scope.myData_save_pass = function(){
   
   		var username = $scope.userData.username;
   		var password = $scope.changePassForm.password;
   				
   		
   		services.myData_save_pass(username,password,lang)
   				.then(function (result) {
   		         
				if (result == true)	{

					services.forum_changePass(username,password)
						.then(function (result) {
							
							if (result == true) {

								services.openReportPopupAutoClose("NEW_PASS_SAVED",lang);
								$scope.userData.sub_decoded = password;
								localStorage.sessionUserData = JSON.stringify($scope.userData);
								$scope.is_forum_registered = "true";

								//$scope.editProfile = false;
								
							}
							else {

								services.openReportPopup("NO_DATA_SAVE",lang);	

							}
							
					});

				}

				else {

					services.openReportPopup("NO_DATA_SAVE2","");

				}
	                    
   		});
   
   }
   
   
   
   ///////////////////////////////////////////////////////////////
   


   if ($scope.$parent.userLogged && localStorage.getItem("timestamp_pp_accepted")) {
		
		//var ls = JSON.parse(localStorage);

		//console.log("prop exist",ls.hasOwnProperty('timestamp_pp_accepted'));
		console.log("prop exist",localStorage.getItem("timestamp_pp_accepted")); 


		console.log("localStorage.timestamp_pp_accepted:",typeof(localStorage.timestamp_pp_accepted)+":"+localStorage.timestamp_pp_accepted);
		console.log("localStorage.pp_timestamp:",typeof(localStorage.pp_timestamp)+":"+localStorage.pp_timestamp);

		var timestamp_pp_accepted = JSON.parse(localStorage.timestamp_pp_accepted);
		var pp_timestamp = JSON.parse(localStorage.pp_timestamp);

		$scope.userData = JSON.parse(localStorage.sessionUserData);

		$scope.registerForumForm = {
			"password":$scope.userData.sub_decoded
		}

		
		console.log("2.$scope.userData",$scope.userData);
		
		if ($scope.userData.usergroup != "9" && (timestamp_pp_accepted < pp_timestamp) ){
			
			$scope.navigateTo("/dataProtection/agree/"+lang);
			
		}

		else{


			if ($scope.userData.usergroup == "1" && $scope.userData.questions_answered == "0" ) {
						
				$scope.navigateTo("/products/start/questions/"+lang);
			  }
			else {

				
				$scope.getLogForumStatus($scope.userData.username,$scope.userData.email);
				$scope.getUserType();
				$scope.editProfile = false;

				
				
			}

			

		}
		 
   
   }

   else { // user must logout, user has an old localstorage
	$scope.logOutUser();
   }
   
   
   if ($routeParams.changePassLink){
   
   		//alert("changePassLink="+$routeParams.changePassLink);
		$scope.sent_mail_new_password($routeParams.changePassLink,lang);
   }
   
   if ($routeParams.registerPassLink){
   
   		//alert("registerPassLink="+$routeParams.registerPassLink);
   		$scope.sent_mail_registration_password($routeParams.registerPassLink,lang);
   }
  
  
}]);