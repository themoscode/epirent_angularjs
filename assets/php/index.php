<?php 
file_exists('config.php') ? require_once('config.php') : die('missing file: config.php');
file_exists('modules/db.php') ? require_once('modules/db.php') : die('missing file: modules/db.php');
file_exists('modules/user.php') ? require_once('modules/user.php') : die('missing file: modules/user.php');
file_exists('modules/email.php') ? require_once('modules/email.php') : die('missing file: modules/email.php');
file_exists('modules/news.php') ? require_once('modules/news.php') : die('missing file: modules/news.php');
file_exists('modules/releases.php') ? require_once('modules/releases.php') : die('missing file: modules/releases.php');
file_exists('modules/eshop.php') ? require_once('modules/eshop.php') : die('missing file: modules/eshop.php');
file_exists('modules/language.php') ? require_once('modules/language.php') : die('missing file: modules/language.php');
file_exists('modules/support.php') ? require_once('modules/support.php') : die('missing file: modules/support.php');
file_exists('modules/carousel.php') ? require_once('modules/carousel.php') : die('missing file: modules/carousel.php');
file_exists('modules/cms.php') ? require_once('modules/cms.php') : die('missing file: modules/cms.php');

file_exists('modules/reports.php') ? require_once('modules/reports.php') : die('missing file: modules/reports.php');

/*
if( !$db->isConnected() ){
	//die('Fehler in der Config Datei oder DB nicht vorhanden!');
	echo'Fehler in der Config Datei oder DB nicht vorhanden!<br />';
}
else {

	echo 'connected';
}

*/

$user = new user();  
$carousel = new carousel();
$reports = new reports();
$news = new news();
$releases = new releases();
$eshop = new eshop();
$support = new support();
$cms = new cms();

switch ($_GET["action"]) {


	case "check_userLogged":
		
		echo json_encode($user->isLogged($_GET["username"],$_GET["password"]));
	
		break;
	
	case "check_userExists":
		
		echo $user->check_if_exists($_GET["username"],$_GET["email"]);
	
		break;
	
	case "getUserPerUsername":
	
		echo $user->get_per_username($_GET["username"]);
		
		break;
	
		
	case "sent_mail_confirmPasswordChange":
		
		echo $user->sent_mail_confirmPasswordChange($_GET["username"],$_GET["email"],$_GET["lang"],$_GET["obj"],$reports);
		
	
		break;
		
	
	case "check_forgotPassword":
		
		
		echo $user->check_forgotPassword($_GET["username"],$_GET["email"]);
		
		break;
		
	case "sent_mail_new_password":	
		
		
		echo $user->sent_mail_new_password($_GET["changePassLink"],$_GET["lang"],$reports);
		
		break;
		
	case "sent_mail_registration_password":	
		
		
		echo $user->sent_mail_registration_password($_GET["registerPassLink"],$_GET["lang"],$reports);
		
		
		break;
	
	case "sent_mail_confirmRegistration":	
		
		
		echo $user->sent_mail_confirmRegistration($_GET["name"],$_GET["address"],$_GET["email"],$_GET["username"],$_GET["lang"],$reports);
		
		break;
	
	case "myData_save_userdata":	
		
		
		echo $user->myData_save_userdata($_GET["username"],$_GET["company"],$_GET["name"],$_GET["address"],$_GET["telephone"],$_GET["fax"],$_GET["email"],$_GET["country"],$_GET["www"],$_GET["lang"],$reports);
		
		break;
		
	case "myData_save_pass":	
		
		
		echo $user->myData_save_pass($_GET["username"],$_GET["password"],$_GET["lang"],$reports);
		
		break;
		
		
	
	case "submit_contactForm":	
		
		
		echo $user->submit_contactForm($_GET["name"],$_GET["email"],$_GET["tel"],$_GET["subject"],$_GET["mailText"],$_GET["lang"],$_GET["office"],$reports);
		
		break;	
	
	case "submit_xmasForm":	
		
		
		echo $user->submit_xmasForm($_GET["answer"],$_GET["firma"],$_GET["name"],$_GET["email"],$_GET["lang"],$reports);
		
		break;	
		
	case "getNews":
	
		echo json_encode($news->getNews($_GET["lang"],$reports));

		break;

	case "getReleases":
	
		echo json_encode($releases->getReleases($_GET["lang"],$reports));

		break;

    case "getLogForumStatus":
		
		echo json_encode($user->is_forum_registered($_GET["username"], $_GET["email"]));
	
		break;
    
	case "username_password_exists":

		echo json_encode($user->username_password_exists($_GET["username"], $_GET["password"]));

		break;

	case "forum_update_fe_users_sub":

	   echo json_encode($user->forum_update_fe_users_sub($_GET["username"], $_GET["password"]));

		break;

    case "get_per_link":

		echo json_encode($user->get_per_link($_GET["link"]));

		break;

	case "set_privacy_policy_agree":

		echo json_encode($user->set_privacy_policy_agree($_GET["uid"]));

		break;	


	case "eshop_getCategories":

		echo json_encode($eshop->getCategories($_GET["lang"]));

		break;
    
	case "eshop_getProducts":
		
		echo json_encode($eshop->getProducts($_GET["catID"],$_GET["lang"]));

		break;

    case "eshop_getBasketQuantity":

		echo $eshop->getBasketQuantity($_GET["user_id"]);	

		break;

	case "eshop_productToBasket":	

		echo json_encode($eshop->productToBasket($_GET["product_id"],$_GET["product_price_id"],$_GET["user_id"]));	

		break;
	
	case "eshop_getBasketItems":

		echo json_encode($eshop->getBasketItems($_GET["user_id"],$_GET["lang"]));	

		break;
		

	case "eshop_updateBasketProductQuantity":

		echo json_encode($eshop->updateBasketProductQuantity($_GET["user_id"],$_GET["basket_id"],$_GET["quantity"]));	

		break;		
   
    
	case "eshop_deleteBasketItem":

		echo json_encode($eshop->deleteBasketItem($_GET["basket_id"],$_GET["user_id"]));

		break;

	case "eshop_sendOrder":

		echo $eshop->sendOrder($_GET["user_id"],$_GET["lang"]);

		break;

	case "getCurrencySymbol":

		echo $eshop->getCurrencySymbol();

		break;

     case "support_getSearchResults":
	   
	 	echo json_encode($support->getSearchResults($_GET["searchText"],$_GET["lang"]));

	   break;

	case "support_voteResult":
	   
	 	echo $support->voteResult($_GET["answer"],$_GET["id"]);

	   break;

	case "solve_recaptcha":
	  // $http.get("php/index.php?action=solve_recaptcha&recaptchaResponse="+recaptchaResponse+"&lang="+lang).then(function (response) {
		    
     //print_r($_GET);
	  echo json_encode($user->solve_recaptcha($_GET["recaptchaResponse"],$_GET["lang"]));

	break;
    

	case "getCMSPage":
		
		echo json_encode($cms->getCMSPage($_GET["page"],$_GET["lang"]));

	break;

	case "getCarousel":
		
		echo json_encode($carousel->getCarousel($_GET["lang"],$_GET["param2"]));

	break;
	
	case "submit_products_start_form":
		
		
		$json = file_get_contents('php://input');
		echo $user->submit_products_start_form($json,$reports);
		
		
		/*
		
		$json = file_get_contents('php://input');

		$assoc = true;
		$result = json_decode ($json, $assoc);   


		echo $result['userData']['name'];   
		*/
		

	break;

	case "getPP_timestamp":
		
		echo $user->getPP_timestamp();

	break;


	

//////////////
	case "get_reportText":
		
		echo $reports->get_reportText($_GET["search"], $_GET["lang"]);
	
		break;	

	

//////////////	


}




?>