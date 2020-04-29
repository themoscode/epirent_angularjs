
app.service('services',['$q','$uibModal','$timeout','$http','deviceDetector',function($q,$uibModal,$timeout,$http,deviceDetector){
	
	var _this = this;
	
	
	_this.isMobileDevice = function(){
		
		if (deviceDetector.os == "ios" || deviceDetector.os == "android" || deviceDetector.os == "windows-phone" ) {
			return true;
		}
		
		
		return false;
	}


	_this.twoDigits = function(num){

		if (num.length == 1) {

		return "0"+num;

		} 

		return num;

  }


	_this.getLogStatus = function(){
	
		$result = false;
		
		if (localStorage.sessionUserData != undefined && localStorage.sessionUserData != "false") {
		
				$result = true;
		}
		
		return $result;
	
	}
	
	_this.getSessionUserData = function(property){
		    	
	    	if (localStorage.sessionUserData !="" ) {
	    		return JSON.parse(localStorage.sessionUserData)[property];
	    	}
	    	
	    	
	    }
	
	
	
		
	_this.openReportPopup = function(text,lang) {
		
		//alert(lang);
		
		var modalInstance = $uibModal.open({
		          animation: true,
		          templateUrl: "modules/reportPopup/index.html",
		          controller: "reportPopupCtrl",
		          resolve:{
		          	dataToModal: {
		          		
		          		text:text,
		          		lang:lang
		          		
		          	}
		          }
		        });
	}

    _this.openReportPopupAutoClose = function(text,lang) {
		
		var modalInstance = $uibModal.open({
		          animation: true,
		          templateUrl: "modules/reportPopupAutoClose/index.html",
		          controller: "reportPopupAutoCloseCtrl",
		          resolve:{
		          	dataToModal: {
		          		
		          		text:text,
		          		lang:lang
						  
		          		
		          	}
		          }
		        });
	}

	_this.set_privacy_policy_agree = function(uid) {
	
		var deferred = $q.defer();	
		
		  $http.get("php/index.php?action=set_privacy_policy_agree&uid="+uid).then(function (response) {
		      
		     // console.log('response.data====='+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		   return deferred.promise;	
	
	}
	
	
	_this.sent_mail_registration_password = function(registerPassLink,lang) {
	
		var deferred = $q.defer();	
		
		  $http.get("php/index.php?action=sent_mail_registration_password&registerPassLink="+registerPassLink+"&lang="+lang).then(function (response) {
		      
		     // console.log('response.data====='+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		   return deferred.promise;	
	
	}
	
	_this.sent_mail_new_password = function(changePassLink,lang){
	
		
		  var deferred = $q.defer();	
		
		  $http.get("php/index.php?action=sent_mail_new_password&changePassLink="+changePassLink+"&lang="+lang).then(function (response) {
		      
		     // console.log('response.data====='+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		   return deferred.promise;	
	
	
	}
	
	_this.sent_mail_confirmPasswordChange = function(username,email,lang,obj){
		  
		  var deferred = $q.defer();	
	
		  $http.get("php/index.php?action=sent_mail_confirmPasswordChange&username="+username+"&email="+email+"&lang="+lang+"&obj="+obj).then(function (response) {
		      
		     // console.log('response.data====='+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		   return deferred.promise;	
	}
	
	_this.sent_mail_confirmRegistration = function(name,address,email,username,lang){
	
		var deferred = $q.defer();	
		
			  $http.get("php/index.php?action=sent_mail_confirmRegistration&name="+name+"&address="+address+"&email="+email+"&username="+username+"&lang="+lang).then(function (response) {
			      
			     // console.log('response.data====='+response.data);
			      deferred.resolve(response.data);
			  })
			  .catch(function (error) {
				  console.error(error);
				});
			  		   		
			   
			   return deferred.promise;	
	
	
	}
	
	_this.getUserPerUsername = function(username) {
	
	
			var deferred = $q.defer();	
		
			  $http.get("php/index.php?action=getUserPerUsername&username="+username).then(function (response) {
			      
			      //console.log('response.data'+response.data);
			      deferred.resolve(response.data);
			  })
			  .catch(function (error) {
				  console.error(error);
				});
			  		   		
			   
			   return deferred.promise;	
	
	
	}
	
	_this.check_userLogged = function(username,password){
		  
		  var deferred = $q.defer();	
	
		  $http.get("php/index.php?action=check_userLogged&username="+username+"&password="+password).then(function (response) {
		      
		      //console.log('response.data'+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		   return deferred.promise;	
	}
	
	
	_this.check_userExists = function(username,email){
		  
		  var deferred = $q.defer();	
	
		  $http.get("php/index.php?action=check_userExists&username="+username+"&email="+email).then(function (response) {
		      
		      //console.log('response.data'+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		   return deferred.promise;	
	}
	
	
	_this.check_forgotPassword = function(username,email){
		  
		  var deferred = $q.defer();	
	
		  $http.get("php/index.php?action=check_forgotPassword&username="+username+"&email="+email).then(function (response) {
		      
		      //console.log('response.data'+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		   return deferred.promise;	
	}
	
	
	_this.arrayObjectIndexOf = function(myArray, searchTerm, property){
				   	     
	   	     if (myArray == undefined) {return -1;}
	   	     
	   		 if (myArray.length > 0) {
	   		 
			   		 for(var i = 0, len = myArray.length; i < len; i++) {
						   if (myArray[i][property] === searchTerm) return i;
				     }
				    
			}	    
				    
		     return -1;
	   	
	   }
	
	
	   	
	_this.get_reportText  = function(lang,search) { 
				
	   	  var deferred = $q.defer();	
	   		
		  $http.get("php/index.php?action=get_reportText&search="+search+"&lang="+lang).then(function (response) {
		      
		      //console.log('response.data'+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		   return deferred.promise;	
	   		
	   	}	


	  
	   	
	_this.myData_save_userdata = function(username,company,name,address,telephone,fax,email,country,www,lang) {
	
	
		var deferred = $q.defer();	
				
		$http.get("php/index.php?action=myData_save_userdata&username="+username+"&company="+company+"&name="+name+"&address="+address+"&telephone="+telephone+"&fax="+fax+"&email="+email+"&country="+country+"&www="+www+"&lang="+lang).then(function (response) {
		    
		    //console.log('response.data'+response.data);
		    deferred.resolve(response.data);
		})
		.catch(function (error) {
			  console.error(error);
			});
				   		
		 
		 return deferred.promise;	
	
	}  	 
	
	_this.myData_save_pass = function(username,password,lang) {
	
	
		var deferred = $q.defer();	
				
		$http.get("php/index.php?action=myData_save_pass&username="+username+"&password="+password+"&lang="+lang).then(function (response) {
		    
		    //console.log('response.data'+response.data);
		    deferred.resolve(response.data);
		})
		.catch(function (error) {
			  console.error(error);
			});
				   		
		 
		 return deferred.promise;	
	
	}  	 
	
    _this.solve_recaptcha = function(recaptchaResponse,lang){

		var deferred = $q.defer();	
				
		$http.get("php/index.php?action=solve_recaptcha&recaptchaResponse="+recaptchaResponse+"&lang="+lang).then(function (response) {
		    
		    //console.log('response.data'+response.data);
		    deferred.resolve(response.data);
		})
		.catch(function (error) {
			  console.error(error);
			});
				   		
		 
		 return deferred.promise;

	}


	_this.submit_xmasForm = function(obj,lang) {
		
			var deferred = $q.defer();	
					
			$http.get("php/index.php?action=submit_xmasForm&answer="+obj.answer+"&firma="+obj.firma+"&name="+obj.name+"&email="+obj.email+"&lang="+lang).then(function (response) {
				
				//console.log('response.data'+response.data);
				deferred.resolve(response.data);
			})
			.catch(function (error) {
				  console.error(error);
				});
							   
			 
			 return deferred.promise;
			
		
		}


	

	_this.submit_contactForm = function(obj,lang) {
		
			var deferred = $q.defer();	
					
			$http.get("php/index.php?action=submit_contactForm&name="+obj.name+"&email="+obj.email+"&tel="+obj.tel+"&subject="+obj.subject+"&mailText="+obj.mailText+"&lang="+lang+"&office="+obj.office).then(function (response) {
				
				//console.log('response.data'+response.data);
				deferred.resolve(response.data);
			})
			.catch(function (error) {
				  console.error(error);
				});
							   
			 
			 return deferred.promise;
			
		
		}



	
	_this.getNews = function(lang){
		  
		  var deferred = $q.defer();	
	
		  $http.get("php/index.php?action=getNews&lang="+lang).then(function (response) {
		      
		      //console.log('response.data'+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		   return deferred.promise;	
	}

	_this.getReleases = function(lang){
		  
		  var deferred = $q.defer();	
	
		  $http.get("php/index.php?action=getReleases&lang="+lang).then(function (response) {
		      
		      //console.log('response.data'+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		   return deferred.promise;	
	}

	/////////////////FORUM//////////////////////////////
	

    _this.getLogForumStatus = function(username,email){
		  
		  var deferred = $q.defer();	
	
		  $http.get("php/index.php?action=getLogForumStatus&username="+username+"&email="+email).then(function (response) {
		      
		      ////console.log('response.data'+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		   return deferred.promise;	
	}
     
_this.username_password_exists = function(username,password){
    
		var deferred = $q.defer();	
	
		  $http.get("php/index.php?action=username_password_exists&username="+username+"&password="+password).then(function (response) {
		      
		      ////console.log('response.data'+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		   return deferred.promise;	



}

_this.forum_update_fe_users_sub = function(obj,password){

		var deferred = $q.defer();	
	
		  $http.get("php/index.php?action=forum_update_fe_users_sub&username="+obj.username+"&password="+password).then(function (response) {
		      
		      ////console.log('response.data'+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		return deferred.promise;	


}


_this.forum_add = function(obj,password,lang){

		 console.log("FORUM_PASSWORD="+password);

		var deferred = $q.defer();	
	
		  $http.get("forum/phpbb3/_user_add.php?action=_user_add&username="+obj.username+"&password="+password+"&email_address="+obj.email+"&language="+lang).then(function (response) {
		      
		      ////console.log('response.data'+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		return deferred.promise;	


}


_this.forum_changePass = function(username, newPassword){

		var deferred = $q.defer();	
	
		  $http.get("forum/phpbb3/_user_changePass.php?action=_user_changePass&username="+username+"&newPassword="+newPassword).then(function (response) {
		      
		      ////console.log('response.data'+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		return deferred.promise;	


}

_this.get_per_link	= function(link){

	var deferred = $q.defer();	
	
		  $http.get("php/index.php?action=get_per_link&link="+link).then(function (response) {
		      
		      ////console.log('response.data'+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		return deferred.promise;


}

////////////////////////////////////////////////////

_this.eshop_deleteBasketItem = function(basket_id,user_id) {


	var deferred = $q.defer();	
	
		$http.get("php/index.php?action=eshop_deleteBasketItem&basket_id="+basket_id+"&user_id="+user_id).then(function (response) {
			
			////console.log('response.data'+response.data);
			deferred.resolve(response.data);
		})
		.catch(function (error) {
			console.error(error);
		});
					
		
	return deferred.promise;


}


_this.eshop_updateBasketProductQuantity = function(user_id,basket_id,quantity) {


	var deferred = $q.defer();	
	
		$http.get("php/index.php?action=eshop_updateBasketProductQuantity&user_id="+user_id+"&basket_id="+basket_id+"&quantity="+quantity).then(function (response) {
			
			////console.log('response.data'+response.data);
			deferred.resolve(response.data);
		})
		.catch(function (error) {
			console.error(error);
		});
					
		
	return deferred.promise;


}


_this.eshop_getCategories = function(lang) {

	var deferred = $q.defer();	
	
		  $http.get("php/index.php?action=eshop_getCategories&lang="+lang).then(function (response) {
		      
		      ////console.log('response.data'+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		return deferred.promise;


}


_this.eshop_getProducts = function(catID,lang) {


	var deferred = $q.defer();	
	
		  $http.get("php/index.php?action=eshop_getProducts&catID="+catID+"&lang="+lang).then(function (response) {
		      
		      ////console.log('response.data'+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		return deferred.promise;

}


_this.eshop_productToBasket = function(product_id,product_price_id,user_id) {


	var deferred = $q.defer();	
	
		  $http.get("php/index.php?action=eshop_productToBasket&product_id="+product_id+"&product_price_id="+product_price_id+"&user_id="+user_id).then(function (response) {
		      
		      ////console.log('response.data'+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		return deferred.promise;

}


_this.eshop_getBasketQuantity = function(user_id) {

	var deferred = $q.defer();	
	
		  $http.get("php/index.php?action=eshop_getBasketQuantity&user_id="+user_id).then(function (response) {
		      
		      ////console.log('response.data'+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		return deferred.promise;


}

_this.eshop_getBasketItems = function(lang,user_id){


	var deferred = $q.defer();	
	
		  $http.get("php/index.php?action=eshop_getBasketItems&user_id="+user_id+"&lang="+lang).then(function (response) {
		      
		      ////console.log('response.data'+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		return deferred.promise;

}

_this.eshop_sendOrder = function(user_id,lang){


	var deferred = $q.defer();	
	
		  $http.get("php/index.php?action=eshop_sendOrder&user_id="+user_id+"&lang="+lang).then(function (response) {
		      
		      ////console.log('response.data'+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		return deferred.promise;

}

_this.support_getSearchResults = function(searchText,lang){

	var deferred = $q.defer();	
	
		  $http.get("php/index.php?action=support_getSearchResults&searchText="+searchText+"&lang="+lang).then(function (response) {
		      
		      ////console.log('response.data'+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		return deferred.promise;

}


_this.support_voteResult = function(answer,id){

	var deferred = $q.defer();	
	
		  $http.get("php/index.php?action=support_voteResult&answer="+answer+"&id="+id).then(function (response) {
		      
		      ////console.log('response.data'+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		return deferred.promise;

}




_this.getCurrencySymbol = function(){

	var deferred = $q.defer();	
	
		  $http.get("php/index.php?action=getCurrencySymbol").then(function (response) {
		      
		      ////console.log('response.data'+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		return deferred.promise;


}


_this.getCMSPage = function(page,lang){

	var deferred = $q.defer();	
	
		  $http.get("php/index.php?action=getCMSPage&page="+page+"&lang="+lang).then(function (response) {
		      
		      ////console.log('response.data'+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		return deferred.promise;


}


_this.getCarousel = function(lang,param2){

	var deferred = $q.defer();	
	
		  $http.get("php/index.php?action=getCarousel&lang="+lang+"&param2="+param2).then(function (response) {
		      
		      ////console.log('response.data'+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		return deferred.promise;


}

_this.getPP_timestamp = function(){

	var deferred = $q.defer();	
	
		  $http.get("php/index.php?action=getPP_timestamp").then(function (response) {
		      
		      ////console.log('response.data'+response.data);
		      deferred.resolve(response.data);
		  })
		  .catch(function (error) {
			  console.error(error);
			});
		  		   		
		   
		return deferred.promise;


}


	////////////////////////////////////////////////////
	
	
 }]);