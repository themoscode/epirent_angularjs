<?php



class user {

    
   //FORUM START


   public function solve_recaptcha($captcha,$lang){

		return $captcha;

        ini_set('allow_url_fopen','1');

		

		$postdata = http_build_query(
          array(
            'secret' => '6LfwXCMUAAAAABc_myUu0bpUm3yGB-dVHZpIgC_x', //secret KEy provided by google
            'response' => $captcha,                    // g-captcha-response string sent from client
            'remoteip' => $_SERVER['REMOTE_ADDR']
          )
        );
		
		$opts = array('http' =>
          array(
            'method'  => 'POST',
            'header'  => 'Content-type: application/x-www-form-urlencoded',
            'content' => $postdata
          )
        );

		$context  = stream_context_create($opts);

		

		$response=file_get_contents("https://www.google.com/recaptcha/api/siteverify",false,$context);
        $response = json_decode($response, true);

		if($response["success"]===false) { //if user verification failed
       
        /* return error scenario to client */
        return array(
            "error" => 7,
            "message" => "Robots Not allowed (Captcha verification failed)",
            "captchaResult" => $response["success"],
            "captcahErrCodes" => $response["error-codes"]  //error codes sent buy google's siteVerify API
        );
    	
		} else {
   
             //Should be some Datatbase insertion to sign up the user
             //before you return the success response
             //Not in the scope of this tutorial.

        /* return success scenario to client */
        return array(
        "error" => 0,
        "message" => "Successfully signed up!",
            "captchaResult" => $response["success"]
        );
    }

   }


   public function forum_update_fe_users_sub($username,$password){
 
			$db = new db();
			$encoded_pass = base64_encode($password);
			
			
			$query_string = "UPDATE fe_users SET sub='".$encoded_pass."' WHERE username = '".$username."'";
			
				
			$query_go = $db->query($query_string);
			
			if ($query_go) {
				
				return true;
			
			}
			
			return false;
 
 }

  
 public function getPP_timestamp(){
 
	$db = new db();
	$query_string = "SELECT * FROM PP_Timestamp";
	$query_go = $db->query($query_string);
	$result = mysqli_fetch_array($query_go);

	return $result["unix_timestamp"];

}


   public function username_password_exists($username,$password){
 
 	
		$db = new db();
		$query_string = "SELECT * FROM `".DB_TABLE_USER."` WHERE `username`='".$username."' AND `password`='".md5($password)."';";
		$query_go = $db->query($query_string);
		if( $query_go ){
				if(mysqli_num_rows($query_go)==1){
					$result = true;
					}
				else{
					$result = false;
				}  
			}
		else {
			$result = false;
			}	
		
		return $result;  
 
 }
	


    public function is_forum_registered($username,$user_email){
 
		$db = new db();
		$query_string = "SELECT * FROM phpbb_users WHERE username='".$username."' AND user_email ='".$user_email."';";
		$query_go = $db->query($query_string);
		if( $query_go ){

			if(mysqli_num_rows($query_go)>0) {

					return true;

			}
			
			return false;

		}	
					
		return false;
 }

   //FORUM END


    private function updateLoginTimestamp($user,$pass){


		$db = new db();	
		$query_string = "UPDATE `".DB_TABLE_USER."` SET lastlogin = UNIX_TIMESTAMP() WHERE username='".$user."' AND  password = '".md5($pass)."'";
		$query_go = $db->query($query_string);

	}


	public function isLogged($user,$pass){
	    
	    $db = new db();
	    
		$query_string = "SELECT * FROM `".DB_TABLE_USER."` WHERE username='".$user."' AND  password = '".md5($pass)."'";
		$query_go = $db->query($query_string);
		if( $query_go ){
				if(mysqli_num_rows($query_go)>0){

					$this->updateLoginTimestamp($user,$pass);
					$result = mysqli_fetch_array($query_go);
					
					$result["sub_decoded"] = $pass;

					}
				else{
					$result = false;
				}  
			  }
		  else {
		  	$result = false;
		  	}	
		  
		  return $result;
	
	
	}
	
	
	


    public function get_per_uid($uid){ 
             
   	  $db = new db();
       $query_string = "SELECT * FROM `".DB_TABLE_USER."` WHERE `uid`='".$uid."';";
       $query_go = $db->query($query_string);
       if( $query_go ){
       		if(mysqli_num_rows($query_go)==1){
       			$result = mysqli_fetch_array($query_go);
       			}
       		else{
       			$result = false;
       		}  
       	  }
   	  else {
   	  	$result = false;
   	  	}	
   	  
   	  return $result;  		
   	}
	
	private function getUserIpAddr(){
		if(!empty($_SERVER['HTTP_CLIENT_IP'])){
			//ip from share internet
			$ip = $_SERVER['HTTP_CLIENT_IP'];
		}elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
			//ip pass from proxy
			$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
		}else{
			$ip = $_SERVER['REMOTE_ADDR'];
		}
		return $ip;
	}	   

	public function set_privacy_policy_agree($uid){
		
		$db = new db();

		$user_system_data = "User Real IP : ".$this->getUserIpAddr()." --- ".$_SERVER['HTTP_USER_AGENT']." --- ".$_SERVER['HTTP_ACCEPT_LANGUAGE'] ;

		$query_string = "UPDATE `".DB_TABLE_USER."` SET ";
		$query_string.= " `timestamp_pp_accepted` = UNIX_TIMESTAMP(), `user_system_data` = '".$user_system_data."'";
		$query_string.= " WHERE `uid`='".$uid."' ";
		$query_go = $db->query($query_string);
		
		if ($query_go) {
			$query_string = "SELECT * FROM `".DB_TABLE_USER."` WHERE `uid`='".$uid."'";
			$query_go = $db->query($query_string);
			$result = mysqli_fetch_array($query_go);

			return $result["timestamp_pp_accepted"];
		}
		return false;
	}   

	public function get_per_link($link){
			
			   $db = new db();
			   $query_string = "SELECT * FROM `".DB_TABLE_USER."` WHERE link='".$link."';";
			   $query_go = $db->query($query_string);
			   if( $query_go ){
	    		if(mysqli_num_rows($query_go)==1){
	    			$result = mysqli_fetch_array($query_go);
                     
					$result["sub_decoded"] = base64_decode($result["sub"]); 

	    			}
	    		else{
	    			$result = false;
	    		}  
	    	  }
	   	  else {
	   	  	$result = false;
	   	  	}	
	   	  
	   	  return $result;  	
	}
	
	
	public function get_per_username($username,$json = true){
		
		   $db = new db();
		   $query_string = "SELECT * FROM `".DB_TABLE_USER."` WHERE username='".$username."';";
		   $query_go = $db->query($query_string);
		   $result = mysqli_fetch_array($query_go);
		   
		   

		   if ($json) {
		    	return json_encode($result); 
		   }
		     
		   return $result;
		   
		}
	
	public function check_if_exists($user,$mail,$json = true){ 
	            
	  	  $db = new db();
	  	  
	      $query_string = "SELECT * FROM `".DB_TABLE_USER."` WHERE `username`='".$user."' AND `email`='".$mail."';";
	      $query_go = $db->query($query_string);
	      if( $query_go ){
	      		if(mysqli_num_rows($query_go)==1){
	      			$result = mysqli_fetch_array($query_go);
	      			}
	      		else{
	      			$result = false;
	      		}  
	      	  }
	  	  else {
	  	  	$result = false;
	  	  	}	
	  	  
	  	  
	  	  if ($json) {
	  	  	return json_encode($result); 
	  	  }
	  	   
	  	  return $result;
	  	  
	  	}
	
	
	private function calculate_user_link($username) {
			
			$link = md5('$%&ASDFMA'.$username.'AESDFvG$%');
			return $link;
		}
		
		
	private function update_user_link($username) {
		
		$db = new db();
		//$report = new report();
				
		$link = $this->calculate_user_link($username);
		
		$query_string = "UPDATE `".DB_TABLE_USER."` SET link='".$link."' WHERE username = '".$username."'";
		$query_go = $db->query($query_string);
				
		if ($query_go) {
			return $link;
		}
		
		else {
			//$report->alert('ERROR');
			return false;
		
		}
			
		
	}
	
	//na kano ta reports me php**************************************
	
	
	
	public function check_forgotPassword($username,$mail){
	
	
		$found_user = $this->check_if_exists($username,$email,false) ;
	
	    return $found_user;
	
	
	}
	
  public function check_if_username_exists($username){ 
              
    	$db = new db();
        $query_string = "SELECT * FROM `".DB_TABLE_USER."` WHERE `username`='".$username."'";
        $query_go = $db->query($query_string);
        if( $query_go ){
        		if(mysqli_num_rows($query_go)>0){
        			$result = true;
        			}
        		else{
        			$result = false;
        		}  
        	  }
    	  else {
    	  	$result = false;
    	  	}	
    	  
    	  return $result;  		
    	}	
		   	
	   	
  ///////////////////////////////////////////////
  private function insertUser_toDB($name,$address,$email,$username) {
  	
  		$db = new db();
  		
  		
  		$query_string = "INSERT INTO `".DB_TABLE_USER."` ( username, name, address,email,link,usergroup) 
  		VALUES ( '".$username."', '".$name."','".$address."', '".$email."','".$this->calculate_user_link($username)."','1' );";
  		$query_go = $db->query($query_string);
  		
  		if ($query_go) {
  		
  			return true;
  		}
  		
  		else {
  			
  			
  			return false;
  		
  		}
  		   	
  	}
  
 
  
  public function sent_mail_registration_password($registerPassLink,$lang,$reports) {
  		
  		
  		//return "1";
  			
  		
  		$found_user = $this->get_per_link($registerPassLink);
  		
  		
  		$db = new db();
  		$email_obj = new email();
  		
  		
  		$new_password = uniqid('');
  		$request_key = md5($new_password);
  		$request_key = md5("$&7." . $found_user['username'] . $request_key);
  	
		  
  	$query = "UPDATE `" . DB_TABLE_USER . "` SET `password`='".md5($new_password) . "',`request_key`='" . $request_key . "', `sub`='".base64_encode($new_password) . "', `sent_mail_registration_password`=1   WHERE `uid`='" . $found_user['uid'] . "';";
  				
  		if( $db->query($query) ){
  			
  			
			 $mailContent_kunde = sprintf($reports->get_reportText("SENT_MAIL_REGISTRATION_PASSWORD_CLIENT",$lang), $found_user['username'], $new_password,SITE_URL."/#/home/".$lang);   
  			 
  			 $mailContent_epi = sprintf($reports->get_reportText("SENT_MAIL_REGISTRATION_PASSWORD_ADMIN",$lang),$found_user['username'], $new_password);
  			 
  			 $subject = $reports->get_reportText("SENT_MAIL_REGISTRATION_PASSWORD_SUBJECT",$lang);
  			 
  			$fromOrganisation = 'EPI development';
  			$toReceiver = 'info@epi-dev.de';
  			
  			//$from_name, $from_email, $html_message, $to_email, $to_name, $subject, $text_message="", $attachment=""
  			
  			if( $email_obj->send( $fromOrganisation, $toReceiver, $mailContent_kunde, $found_user['email'], $found_user['name'], $subject, '', '')) {
  		
  				$email_obj->send( $found_user['name'], $found_user['email'], $mailContent_epi, $toReceiver, $fromOrganisation, $subject, '', '');
  				
  				return $reports->get_reportText("HELLO",$lang)." ".$found_user['username']." ".$reports->get_reportText("REGISTER_PASS_SENT",$lang);
  									
  				}
  			else {
  			
  				
  				return $reports->get_reportText("MAIL_NOT_SENT",$lang);
  									
  				//echo 'error mail';
  			}
  			
  		}else{
  			
  			
  			return $reports->get_reportText("ERROR_DB",$lang);
  			
  			//echo 'error db';
  		}
  		
  	}
  
  
  
  public function sent_mail_confirmRegistration($name,$address,$email,$username,$lang,$reports) {
  			
  		$email_obj = new email();
  		
  		
  			if ($this->check_if_username_exists($username)){
  			
  				return $reports->get_reportText("USER_EXIST",$lang);
  				//return $this->check_if_username_exists($username);
  				
  			}
  			
  			if ($this->insertUser_toDB($name,$address,$email,$username)) {
     			$link = $this->get_per_username($username,false);
     			$link = $link['link'];
     				
     			$from_name = "EPI development";
     			$from_email="info@epi-dev.de";
     		
     			$html_message = $reports->get_reportText("MAIL_HEADER",$lang).'</strong><br />'; 
     			$html_message .= $reports->get_reportText("DATA_RECIEVED_FROM_YOU",$lang).':<br /><br />';
     			$html_message .= '<table style="width:100%; max-width:600px">';
     			$html_message .= '<tr><td>NAME:</td><td>'.$name.'</td></tr>';
     			$html_message .= '<tr><td>'.$reports->get_reportText("ADDRESS",$lang).'</td><td>'.$address.'</td></tr>';
     			$html_message .= '<tr><td>E-MAIL</td><td>'.$email.'</td></tr>';
     			$html_message .= '</table><br />';
     			
     			$html_message .='<a href="'.SITE_URL.'/#/home/'.$lang.'/register/'.$link.'">'.$reports->get_reportText("CLICK_TO_CONFIRM_REGISTRATION",$lang).'</a>';
     			$subject = $reports->get_reportText("REGISTER_CONFIRMATION",$lang);
     			
     			
     		  $to_email=$email;
     		  $to_name=$username;
     		  
     		  
     		  if ($email_obj->send($from_name, $from_email, $html_message, $to_email, $to_name, $subject, "", "")) {
     		  	
     		  	
     		  	return $reports->get_reportText("HELLO",$lang)." ".$username." ".$reports->get_reportText("CONFIRM_REGISTRATION_SENT",$lang);
     		  	
     		  }
     		  else {
     		  	
     		  	
     		  	return $reports->get_reportText("MAIL_NOT_SENT",$lang);
     		  }
  			}
  		
  		else {
  			return $reports->get_reportText("MAIL_NOT_SENT",$lang);
  		}
  			
  	}//fun
  
  
  
  
  
  
  
  public function sent_mail_new_password($changePassLink,$lang,$reports) {
     		
     	
     	$found_user = $this->get_per_link($changePassLink);		
  		
  		$db = new db();
  		$email_obj = new email();
  		
     			
     		$new_password = uniqid('');
     		$request_key = md5($new_password);
     		$request_key = md5("$&7." . $found_user['username'] . $request_key);
     		
     		
     		
     		$query = "UPDATE `" . DB_TABLE_USER . "` SET `password`='".md5($new_password) . "',`request_key`='" . $request_key . "' WHERE `uid`='" . $found_user['uid'] . "';";
     					
     			if( $db->query($query) ){
     				
  	
  				$mailContent_kunde = sprintf($reports->get_reportText("SENT_MAIL_NEW_PASSWORD_CLIENT",$lang), $found_user['username'], $new_password,SITE_URL."/#/home/".$lang);
  				
  				$mailContent_epi = sprintf($reports->get_reportText("SENT_MAIL_NEW_PASSWORD_ADMIN",$lang),$found_user['username'], $new_password);
  				
  				$subject = $reports->get_reportText("SENT_MAIL_NEW_PASSWORD_SUBJECT",$lang);
     				  
     				$fromOrganisation = 'EPI development';
     				$toReceiver = 'info@epi-dev.de';
     				
     				//$from_name, $from_email, $html_message, $to_email, $to_name, $subject, $text_message="", $attachment=""
     				
     				if( $email_obj->send( $fromOrganisation, $toReceiver, $mailContent_kunde, $found_user['email'], $found_user['name'], $subject, '', '')) {
     			
     					$email_obj->send( $found_user['name'], $found_user['email'], $mailContent_epi, $toReceiver, $fromOrganisation, $subject, '', '');
     					
     					///////////////////////////////////////////////////////////////////////////
     					///  $this->forum_changePass($found_user['username'], $new_password); 	///

                            if ($this->forum_update_fe_users_sub($found_user['username'],$new_password)) {

								return $reports->get_reportText("HELLO",$lang)." ".$found_user['username']." ,".$reports->get_reportText("NEW_PASS_SENT",$lang);

							}
							else {

								return $reports->get_reportText("ERROR_DB",$lang);
							}

     					///////////////////////////////////////////////////////////////////////////
     					
     					//$report->alert(HELLO.$found_user['username'] .NEW_PASS_SENT);
     					
     					
     									
     					}
     				else {
     					
     					return $reports->get_reportText("MAIL_NOT_SENT",$lang);
     					
     				}
     				
     			}
     			else{
     				
     				return $reports->get_reportText("ERROR_DB",$lang);
     				     				
     			}
     			
 }
  
  
  public function sent_mail_confirmPasswordChange($username,$email,$lang,$obj,$reports) {
     		
     		
     		 $email_obj = new email();
     		     		
     		 $found_user = $this->check_if_exists($username,$email,false);
     		
     			
     			if ($found_user['link'] == null) {
     				
     				//$report->alert('1');
     				
     				$link = $this->update_user_link($found_user['username']);
     				
     				if ($link == false) {
     					//$report->alert('ERROR');
     					return "ERROR";
     				}
     				
     				$found_user['link'] = $link;	
     			
     			}
     			
     			
     			
     			$from_name = "EPI development";
     			$from_email="info@epi-dev.de";
     			
     			
     			$html_message = $reports->get_reportText("HELLO",$lang).' <strong>'.$found_user['username'].'</strong> <a href="'.SITE_URL.'/#/home/'.$lang.'/'.$found_user['link'].'">'.$reports->get_reportText("CLICK_TO_CONFIRM_NEW_PASS",$lang).'</a>';
     			$subject = $reports->get_reportText("NEW_PASS_CONFIRMATION",$lang);
     			
     		  $to_email=$found_user['email'];
     		  $to_name=$found_user['name'];
     		  
     		  
     		  //return $html_message;
     		  
     		  if ($email_obj->send($from_name, $from_email, $html_message, $to_email, $to_name, $subject, "", "")) {
     		  	
     		  	
     		  	
     		  	return $reports->get_reportText("HELLO",$lang)." ".$found_user['username']." ".$reports->get_reportText("CONFIRM_NEW_PASS_SENT",$lang);
     		  	
     		  }
     		  else {
     		  	
     		  	return $reports->get_reportText("MAIL_NOT_SENT",$lang);
     		  
     		  }
   			
   
   }
  
  
  public function myData_save_pass($username,$newPassword,$lang,$reports) {
  	
  	
  		
  		$db = new db();
  		
  		$password = md5($newPassword);
  		$request_key = md5("$&7." . $username . $password);
  		
  		$query = "UPDATE `" . DB_TABLE_USER . "` SET ";
  		$query.= " `password`='" . $password . "'";
  		$query.= ", `request_key`='" . $request_key . "'";
  		$query.= " WHERE `username`='" . $username . "' ";
  		$query.= ";";
  		if(!$db->query($query)){
  			
  			//return $reports->get_reportText("NO_DATA_SAVE",$lang);
			  return false;
  			
  		}
  		else{	
  			
			if ($this->forum_update_fe_users_sub($username,$new_password)) {

  				//return $reports->get_reportText("NEW_PASS_SAVED",$lang);

				return true;
			
			}
			else {

				return false;

			}
  			
  			
  						
  		} // else
  	
  	
  } 
  
  
  public function myData_save_userdata($username,$company,$name,$address,$telephone,$fax,$email,$country,$www,$lang,$reports) {
  	
  	
  		
  		$db = new db();
  		
  		$query = "UPDATE `".DB_TABLE_USER."` SET ";
  		$query.= " `company`='".$company."'";
  		$query.= ", `name`='".$name."'";
  		$query.= ", `address`='".$address."'";
  		$query.= ", `telephone`='".$telephone."'";
  		$query.= ", `fax`='".$fax."'";
  		$query.= ", `email`='".$email."'";
  		$query.= ", `country`='".$country."'";
  		$query.= ", `www`='".$www."'";
  		$query.= " WHERE `username`='".$username."' ";
  		$query.= ";";
  		
  		if(!$db->query($query)){
  			
  			return $reports->get_reportText("NO_DATA_SAVE",$lang);
  		}
  		
  		else {
  				
  			return $reports->get_reportText("DATA_SAVE",$lang);
  				
  			
  		} // else
  	
  	
  	
  	
  } //public function
  	   	
  //echo $user->submit_xmasForm($_GET["answer"],$_GET["firma"],$_GET["name"],$_GET["email"],$_GET["lang"],$reports);
  
  public function submit_xmasForm($answer,$firma,$name,$email,$lang,$reports){
	
			$email_obj = new email();
							 
				 
				$from_name = $name;
				$from_email = $email;
					
				$mailContent_epi ='<table style="font-family:Arial,Helvetia;">';
				
					$mailContent_epi .= '<tr>';
					$mailContent_epi .= '<th align="left">NAME:</th><td align="left">'.$name.'</td>';	
					$mailContent_epi .= '</tr>';	

					$mailContent_epi .= '<tr>';
					$mailContent_epi .= '<th align="left">E-MAIL:</th><td align="left">'.$email.'</td>';	
					$mailContent_epi .= '</tr>';
								 
					$mailContent_epi .= '<tr>';
				  $mailContent_epi .= '<th align="left">FIRMA:</th><td align="left">'.$firma.'</td>';	
				  $mailContent_epi .= '</tr>';		     
					
					$mailContent_epi .= '<tr>';
						$mailContent_epi .= '<th align="left">ANTWORT:</th><td align="left">'.$answer.'</td>';	
					$mailContent_epi .= '</tr>';
									  
			
			  $mailContent_epi .= '</table>';
			  $to_email = 'rentier@epi-dev.de';
			  $to_name = 'EPI development';
			  $subject = 'EPI Rentier';  
				  
				  //return $html_message;
				  
				  if ($email_obj->send($from_name, $from_email, $mailContent_epi, $to_email, $to_name, $subject, "", "")) { //email client to epi
						  
						  return $reports->get_reportText("REQUEST_SUBMITTED",$lang);
					  
				  }
				  else {
					  
					  return $reports->get_reportText("REQUEST_NOT_SUBMITTED",$lang);
				  
				  }
			
	
	
	}
  

	public function submit_products_start_form($json,$reports){
	
			$email_obj = new email();
			
		    $assoc = true;
			$result = json_decode ($json, $assoc);

			$lang = $result['lang'];

			$name = $result['userData']['name'];
			$email = $result['userData']['email'];
			$firma = $result['userData']['firma'];
			$userID = $result['userData']['userID'];
			

			// update questions_answered field

			$db = new db();
  		
			$query = "UPDATE `".DB_TABLE_USER."` SET ";
			$query.= " `questions_answered`='1'";
			
			$query.= " WHERE `uid`='".$userID."' ";
			$query.= ";";
			
			if(!$db->query($query)){
				
				return $reports->get_reportText("NO_DATA_SAVE",$lang);
			}
			
			

			$from_name = $name;
			$from_email = $email;
				
			
			$mailContent_epi ='<table style="font-family:Arial,Helvetia;text-align:left">';

			

				$mailContent_epi .= '<tr>';
				$mailContent_epi .= '<th >NAME:</th><td>'.$name.'</td>';	
				$mailContent_epi .= '</tr>';	

				$mailContent_epi .= '<tr>';
				$mailContent_epi .= '<th>E-MAIL:</th><td>'.$email.'</td>';	
				$mailContent_epi .= '</tr>';
							 
				$mailContent_epi .= '<tr>';
			  	$mailContent_epi .= '<th>FIRMA:</th><td>'.$firma.'</td>';	
				$mailContent_epi .= '</tr>';	
				
				$mailContent_epi .= '<tr>';
			  	$mailContent_epi .= '<th colspan="2">&nbsp;</th>';	
			  	$mailContent_epi .= '</tr>';

				$mailContent_epi .= '<tr>';
			  	$mailContent_epi .= '<th  colspan="2"><u>ANTWORTEN:</u></th>';	
			  	$mailContent_epi .= '</tr>';
				
				$mailContent_epi .= '<tr>';
			  	$mailContent_epi .= '<th colspan="2">&nbsp;</th>';	
			  	$mailContent_epi .= '</tr>';  
			
				  

			  foreach ($result['dataSend'] as $key => $value) {
				//echo $value['title'].":".$value['answer']."<br>";

					if ($value['title'] != " " ) {
						$mailContent_epi .= '<tr>';
						$mailContent_epi .= '<th>'.$value['title'].':</th><td>'.$value['answer'].'</td>';	
						$mailContent_epi .= '</tr>';
					}
				

			   }


		  $mailContent_epi .= '</table>';

		//  $mailContent_epi = htmlentities($mailContent_epi);


		  $to_email = 'sales@epi-dev.de';
		  $to_name = 'EPI development';
		  $subject = 'PRODUCT START ANSWERS';  
			  
			  //return $html_message;
			  
			  if ($email_obj->send($from_name, $from_email, $mailContent_epi, $to_email, $to_name, $subject, "", "")) { //email client to epi
					  
					  return $reports->get_reportText("REQUEST_SUBMITTED",$lang);
				  
			  }
			  else {
				  
				  return $reports->get_reportText("REQUEST_NOT_SUBMITTED",$lang);
			  
			  }
		


}	


  
  public function submit_contactForm($name,$email,$tel,$subject,$mailText,$lang,$office,$reports){
	
			$email_obj = new email();
							 
				 
				$from_name = $name;
				$from_email = $email;
					
				$mailContent_epi ='<table style="font-family:Arial,Helvetia;">';
				
					$mailContent_epi .= '<tr>';
					$mailContent_epi .= '<th align="left">NAME</th><td align="left">'.$name.'</td>';	
					$mailContent_epi .= '</tr>';	
								 
					$mailContent_epi .= '<tr>';
				  $mailContent_epi .= '<th align="left">E-MAIL</th><td align="left">'.$email.'</td>';	
				  $mailContent_epi .= '</tr>';		     
					
					if ($tel != "") {
					
						$mailContent_epi .= '<tr>';
						$mailContent_epi .= '<th align="left">TEL</th><td align="left">'.$tel.'</td>';	
						$mailContent_epi .= '</tr>';
					
					}
								 
					
					$mailContent_epi .= '<tr>';
						$mailContent_epi .= '<th align="left">SUBJECT</th><td align="left">'.$subject.'</td>';	
					$mailContent_epi .= '</tr>';
									  
					$mailContent_epi .= '<tr>';
					  $mailContent_epi .= '<th align="left">TEXT</th><td align="left">'.$mailText.'</td>';	
				  $mailContent_epi .= '</tr>';	
			  
			  $mailContent_epi .= '</table>';
				
				$mailContent_kunde = $reports->get_reportText("CONTACT_FORM_RECEIVED_MAIL",$lang);
				$mailContent_kunde .= $mailContent_epi;
				$mailContent_kunde .= $reports->get_reportText("MAIL_FOOTER",$lang);
					
					
				$to_email = 'sales@epi-dev.de';
				
				
				$mailContent_epi_html = $mailContent_epi;
				$mailContent_epi_text = "";	

				if ($office == "support") {
					$to_email = 'support@epi-dev.de';
					
					//$mailContent_epi_html = "";
					$mailContent_epi_text = "BETREFF: ".$subject."\n"."NAME: ".$name."\n"."TEL: ".$tel."\n\n\n".$mailText;
				}	


				$to_name = 'EPI development';
				$subject = 'EPI development Kontaktformular';  
				  
				  //return $html_message;
				  
				  if ($email_obj->send($from_name, $from_email, $mailContent_epi_html, $to_email, $to_name, $subject, $mailContent_epi_text, "")) { //email client to epi
						  
						  
						  $from_name = 'EPI development';
						  $from_email = 'sales@epi-dev.de';
						  
						  $to_email = $email;
						  $to_name = $name;

						  if ($office == "support") {
							$from_email = 'support@epi-dev.de';
						  }	
						  
						if ($office == "sales") {
							$email_obj->send($from_name, $from_email, $mailContent_kunde, $to_email, $to_name, $subject, "", ""); //email epi to client
						} 
						  
						  
						  
						  return $reports->get_reportText("REQUEST_SUBMITTED",$lang);
					  
				  }
				  else {
					  
					  return $reports->get_reportText("REQUEST_NOT_SUBMITTED",$lang);
				  
				  }
			
	
	
	}
  

}


?>