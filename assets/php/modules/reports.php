<?php

class reports{
	
	
	private function json_texts(){
		
		
		$MAIL_HEADER__DE = 'Sehr geehrte Damen und Herren,<br /><br />';
		$MAIL_HEADER__EN = 'Dear Ladies and Gentlemen,<br /><br />';
		
		//////////////////////////////////////////////////////////////////////////////////////////////
		
		$MAIL_FOOTER__DE = '<br /><br /><br />Mit freundlichen Gr&uuml;&szlig;en,<br />';
		$MAIL_FOOTER__DE.= 'EPI development Team<br />';
		$MAIL_FOOTER__DE.= '<br />';	
	
		$MAIL_FOOTER__DE.= '-- <br />';
		$MAIL_FOOTER__DE.= '<br />EPI development';
		$MAIL_FOOTER__DE.= '<br />Langhansstr. 63';
		$MAIL_FOOTER__DE.= '<br />13086 Berlin - Deutschland';
		$MAIL_FOOTER__DE.= '<br />Fon +49 30 47 37 27 2-0';
		$MAIL_FOOTER__DE.= '<br />Fax +49 30 47 37 27 2-22';
		$MAIL_FOOTER__DE.= '<br />eMail info@epi-dev.de';
		$MAIL_FOOTER__DE.= '<br />Web https://epi.rent';
		$MAIL_FOOTER__DE.= '<br />UST-ID: DE 179716903'; 
		
		$MAIL_FOOTER__EN = '<br /><br /><br />Mit freundlichen Gr&uuml;&szlig;en,<br />';
		$MAIL_FOOTER__EN.= 'EPI development Team<br />';
		$MAIL_FOOTER__EN.= '<br />';	
		
		$MAIL_FOOTER__EN.= '-- <br />';
		$MAIL_FOOTER__EN.= '<br />EPI development';
		$MAIL_FOOTER__EN.= '<br />Langhansstr. 63';
		$MAIL_FOOTER__EN.= '<br />13086 Berlin - Germany';
		$MAIL_FOOTER__EN.= '<br />Fon +49 30 47 37 27 2-0';
		$MAIL_FOOTER__EN.= '<br />Fax +49 30 47 37 27 2-22';
		$MAIL_FOOTER__EN.= '<br />eMail info@epi-dev.de';
		$MAIL_FOOTER__EN.= '<br />Web https://epi.rent';
		$MAIL_FOOTER__EN.= '<br />UST-ID: DE 179716903'; 
		
		//////////////////////////////////////////////////////////////////////////////////////////////
		
		
		$SENT_MAIL_NEW_PASSWORD_CLIENT__DE = $MAIL_HEADER__DE;
		$SENT_MAIL_NEW_PASSWORD_CLIENT__DE.= 'Sie haben Ihr Kennwort vergessen und ein neues f&uuml;r den Kundenbereich auf epirent.de angefordert.<br /><br />';
		$SENT_MAIL_NEW_PASSWORD_CLIENT__DE.= 'Ihr Benutzername lautet: <strong>%s</strong><br />';
		$SENT_MAIL_NEW_PASSWORD_CLIENT__DE.= 'Ihr neues Kennwort lautet: <strong>%s</strong><br /><br />';
		$SENT_MAIL_NEW_PASSWORD_CLIENT__DE.= 'Hier geht es direkt zum <a href=\"%s\">login</a>';
		$SENT_MAIL_NEW_PASSWORD_CLIENT__DE.= $MAIL_FOOTER__DE;
		
		$SENT_MAIL_NEW_PASSWORD_CLIENT__EN = $MAIL_HEADER__EN;
		$SENT_MAIL_NEW_PASSWORD_CLIENT__EN.= 'Sie haben Ihr Kennwort vergessen und ein neues f&uuml;r den Kundenbereich auf epirent.de angefordert.<br /><br />';
		$SENT_MAIL_NEW_PASSWORD_CLIENT__EN.= 'Ihr Benutzername lautet: <strong>%s</strong><br />';
		$SENT_MAIL_NEW_PASSWORD_CLIENT__EN.= 'Ihr neues Kennwort lautet: <strong>%s</strong><br /><br />';
		$SENT_MAIL_NEW_PASSWORD_CLIENT__EN.= 'Hier geht es direkt zum <a href=\"%s\">login</a>';
		$SENT_MAIL_NEW_PASSWORD_CLIENT__EN.= $MAIL_FOOTER__EN;
		
		//////////////////////////////////////////////////////////////////////////////////////////////
		
		$SENT_MAIL_REGISTRATION_PASSWORD_CLIENT__DE = $MAIL_HEADER__DE;
		$SENT_MAIL_REGISTRATION_PASSWORD_CLIENT__DE.= 'Sie haben Ihre Anmeldung best&auml;tigt und ein Kennwort f&uuml;r den Kundenbereich auf epirent.de angefordert.<br /><br />';
		$SENT_MAIL_REGISTRATION_PASSWORD_CLIENT__DE.= 'Ihr Benutzername lautet: <strong>%s</strong><br />';
		$SENT_MAIL_REGISTRATION_PASSWORD_CLIENT__DE.= 'Ihr Kennwort lautet: <strong>%s</strong><br /><br />';
		$SENT_MAIL_REGISTRATION_PASSWORD_CLIENT__DE.= 'Hier geht es direkt zum <a href=\"%s\">login</a>';
		$SENT_MAIL_REGISTRATION_PASSWORD_CLIENT__DE.= $MAIL_FOOTER__DE;
		
		$SENT_MAIL_REGISTRATION_PASSWORD_CLIENT__EN = $MAIL_HEADER__EN;
		$SENT_MAIL_REGISTRATION_PASSWORD_CLIENT__EN.= 'Sie haben Ihre Anmeldung best&auml;tigt und ein Kennwort f&uuml;r den Kundenbereich auf epirent.de angefordert.<br /><br />';
		$SENT_MAIL_REGISTRATION_PASSWORD_CLIENT__EN.= 'Ihr Benutzername lautet: <strong>%s</strong><br />';
		$SENT_MAIL_REGISTRATION_PASSWORD_CLIENT__EN.= 'Ihr Kennwort lautet: <strong>%s</strong><br /><br />';
		$SENT_MAIL_REGISTRATION_PASSWORD_CLIENT__EN.= 'Hier geht es direkt zum <a href=\"%s\">login</a>';
		$SENT_MAIL_REGISTRATION_PASSWORD_CLIENT__EN.= $MAIL_FOOTER__EN;
		
		//////////////////////////////////////////////////////////////////////////////////////////////
		
		$CONTACT_FORM_RECEIVED_MAIL__DE = $MAIL_HEADER__DE;
		$CONTACT_FORM_RECEIVED_MAIL__DE.= 'Wir haben Ihre Anfrage erhalten und werden umgehend Ihr Anliegen bearbeiten.<br />';
	    $CONTACT_FORM_RECEIVED_MAIL__DE.= 'Folgende Daten haben wir von Ihnen erhalten:<br /><br />';
	    
	    $CONTACT_FORM_RECEIVED_MAIL__EN = $MAIL_HEADER__EN;
	    $CONTACT_FORM_RECEIVED_MAIL__EN.= 'Wir haben Ihre Anfrage erhalten und werden umgehend Ihr Anliegen bearbeiten.<br />';
	    $CONTACT_FORM_RECEIVED_MAIL__EN.= 'Folgende Daten haben wir von Ihnen erhalten:<br /><br />';
		
		
		$str = '[
		    
		    {
		        "searchTerm": "WRONG_LOGIN",
		        "de": "Benutzername oder Passwort falsch. Es existiert kein Zugang mit den angegebenen Daten!",
		        "en" : "Username or password are worong"
		    },
		    
		    {
		        "searchTerm": "INVALID_USER_MAIL_PASS",
		        "de": "Es gibt keinen Benutzer mit diesem Benutzername und Mail!",
		        "en" : "There is no user with this email and password!"
		    },
		    
		    
		    {
		        "searchTerm": "VALID_USER_MAIL_PASS",
		        "de": "Benutzer wurde gefunden",
		        "en" : "User was found"
		    },
		    
		    {
		        "searchTerm": "HELLO",
		        "de":  "Hallo",
		        "en" : "Hello"
		    },
		    
		    {
		        "searchTerm": "CLICK_TO_CONFIRM_NEW_PASS",
		        "de":  "Klicke hier um ein neues Kennwort zu bestätigen",
		        "en" : "Click here to confirm new Password"
		    },
		    
		    {
		        "searchTerm": "NEW_PASS_CONFIRMATION",
		        "de":  "Neues Kennwort Bestätigung",
		        "en" : "New Password Confirmation"
		    },
		    
		    {
		        "searchTerm": "CONFIRM_NEW_PASS_SENT",
		        "de":  "Wir haben Dir per Mail ein Bestätigungslink für die Änderung Ihres Kennworts geschickt",
		        "en" : "We have sent you a confirmations link for your password change"
		    },
		    
		    {
		        "searchTerm": "MAIL_NOT_SENT",
		        "de":  "Email wurde nicht geschickt!",
		        "en" : "The Email was not sent"
		    },
		    
		    {
		        "searchTerm": "SENT_MAIL_NEW_PASSWORD_CLIENT",
		        "de" : "'.$SENT_MAIL_NEW_PASSWORD_CLIENT__DE.'",
		        "en" : "'.$SENT_MAIL_NEW_PASSWORD_CLIENT__EN.'"
		    },
		    
		    {
		    	"searchTerm": "SENT_MAIL_NEW_PASSWORD_ADMIN",
		    	"de":  "Der Benutzer <strong>%s</strong> hat sein Kennwort ge&auml;ndert und es lautet <strong>%s</strong>",
		    	"en" : "the user <strong>%s</strong> has changed his password and that is:<strong>%s</strong>"
		    
		    },
		    
		    {
		    	"searchTerm": "SENT_MAIL_NEW_PASSWORD_SUBJECT",
		    	"de":  "EPI development - neues Kennwort",
		    	"en" : "EPI development - new Password"
		    
		    },
		    
		    {
		    	"searchTerm": "NEW_PASS_SENT",
		    	"de":  "Wir haben Dir per Mail ein neues Kennwort geschickt",
		    	"en" : "We have sent you a new Password"
		    
		    },
		    
		    {
		    	"searchTerm": "ERROR_DB",
		    	"de":  "Es gibt einen Fehler mit der Datenbank Verbindung!",
		    	"en" : "there is a DATABASE CONNECTION ERROR!"
		    
		    },
		    
		    {
		    	"searchTerm": "DATA_RECIEVED_FROM_YOU",
		    	"de":  "Folgende Daten haben wir von Dir erhalten",
		    	"en" : "Folgende Daten haben wir von Dir erhalten"
		    
		    },
		    
		    {
		    	"searchTerm": "ADDRESS",
		    	"de":  "ADRESSE",
		    	"en" : "ADDRESS"
		    
		    },
		    
		    {
		    	"searchTerm": "REGISTER_CONFIRMATION",
		    	"de":  "Anmeldebestätigung",
		    	"en" : "Anmeldebestätigung"
		    
		    },
		    
		    {
		    	"searchTerm": "CLICK_TO_CONFIRM_REGISTRATION",
		    	"de":  "Klicke hier um Deine Anmeldung zu best&auml;tigen",
		    	"en" : "Klicken Sie Hier um ihre Anmeldung zu best&auml;tigen"
		    
		    },
		    
		    {
		    	"searchTerm": "CONFIRM_REGISTRATION_SENT",
		    	"de":  "Wir haben Dir per Mail einen Best&auml;tigungslink f&uuml;r die Best&auml;tigung Deiner Anmeldung geschickt",
		    	"en" : "Wir haben Ihnen per Mail ein Best&auml;tigungslink f&uuml;r die Best&auml;tigung Ihrer Anmeldung geschickt"
		    
		    },
		    
		    {
		    	"searchTerm": "USER_EXIST",
		    	"de":  "Dieser Benutzername ist bereits vergeben.",
		    	"en" : "Dieser Benutzername ist bereits vergeben."
		    
		    },
		    
		    {
		    	"searchTerm": "SENT_MAIL_REGISTRATION_PASSWORD_CLIENT",
		    	"de" : "'.$SENT_MAIL_REGISTRATION_PASSWORD_CLIENT__DE.'",
		    	"en" : "'.$SENT_MAIL_REGISTRATION_PASSWORD_CLIENT__EN.'"
		    
		    },
		    
		    {
		    	"searchTerm": "SENT_MAIL_REGISTRATION_PASSWORD_ADMIN",
		    	"de" : "Der Benutzer <strong>%s</strong> hat seine Anmeldung best&auml;tigt und sein Kennwort lautet <strong>%s</strong>",
		    	"en" : "Der Benutzer <strong>%s</strong> hat seine Anmeldung best&auml;tigt und sein Kennwort lautet <strong>%s</strong>"
		    
		    },
		    
		    {
		    	"searchTerm": "SENT_MAIL_REGISTRATION_PASSWORD_SUBJECT",
		    	"de" : "EPI development - Kennwort für neue Anmeldung",
		    	"en" : "EPI development - Kennwort für neue Anmeldung"
		    
		    },
		    
		    {
		    	"searchTerm": "REGISTER_PASS_SENT",
		    	"de" : "Wir haben Dir per Mail ein Kennwort geschickt",
		    	"en" : "Wir haben Ihnen per Mail Ihr Kennwort geschickt"
		    
		    },
		    
		    {
		    	"searchTerm": "DATA_SAVE",
		    	"de" : "Die Daten wurden erfolgreich gespeichert.",
		    	"en" : "Die Daten wurden erfolgreich gespeichert."
		    
		    },
		    
		    {
		    	"searchTerm": "NO_DATA_SAVE",
		    	"de" : "Die Daten konnten nicht gespeichert werden!",
		    	"en" : "Die Daten konnten nicht gespeichert werden!"
		    
		    },
		    
		    {
		    	"searchTerm": "NEW_PASS_SAVED",
		    	"de" : "Das neue Passwort wurde gespeichert.",
		    	"en" : "Das neue Passwort wurde gespeichert."
		    
		    },
		    
		    {
		    	"searchTerm": "REQUEST_SUBMITTED",
		    	"de" : "Deine Anfrage wurde erfolgreich &uuml;bermittelt.",
		    	"en" : "Ihre Anfrage wurde erfolgreich &uuml;bermittelt."
		    
		    },
		    
		    {
		    	"searchTerm": "REQUEST_NOT_SUBMITTED",
		    	"de" : "Die Anfrage konnte aus unbekanntem Grund nicht versendet werden. Bitte versuche es erneut. Sollte sich dieser Fehler mehrfach wiederholen, kontaktiere uns bitte &uuml;ber eine der anderen angegebenen Kontaktm&ouml;glichkeiten.",
		    	"en" : "Die Anfrage konnte aus unbekanntem Grund nicht versendet werden. Bitte versuchen Sie es erneut. Sollte sich dieser Fehler mehrfach wiederholen, kontaktieren Sie uns bitte &uuml;ber eine der anderen angegebenen Kontaktm&ouml;glichkeiten."
		    
		    },

			{
		    	"searchTerm": "WRONG_PASSWORD",
		    	"de" : "Falsches Passwort",
		    	"en" : "Wrong Paswword"
		    
		    },
		    
		    {
		    	"searchTerm": "CONTACT_FORM_RECEIVED_MAIL",
		    	"de" : "'.$CONTACT_FORM_RECEIVED_MAIL__DE.'",
		    	"en" : "'.$CONTACT_FORM_RECEIVED_MAIL__EN.'"
		    
		    },
		    
		    {
		    	"searchTerm": "MAIL_HEADER",
		    	"de" : "'.$MAIL_HEADER__DE.'",
		    	"en" : "'.$MAIL_HEADER__EN.'"
		    
		    },
		    
		    {
		    	"searchTerm": "MAIL_FOOTER",
		    	"de" : "'.$MAIL_FOOTER__DE.'",
		    	"en" : "'.$MAIL_FOOTER__EN.'"
		    
		    },

			{
		    	"searchTerm": "TITLE",
		    	"de" : "Titel",
		    	"en" : "Title"
		    
		    },

			{
		    	"searchTerm": "PRICE",
		    	"de" : "Preis",
		    	"en" : "Price"
		    
		    },
			
			{
		    	"searchTerm": "QUANTITY",
		    	"de" : "Menge",
		    	"en" : "Quantity"
		    
		    },

			{
		    	"searchTerm": "THANKS_FOR_ORDERING",
		    	"de" : "Vielen Dank,",
		    	"en" : "Vielen Dank,"
		    
		    },

			{
		    	"searchTerm": "YOUR_ORDER",
		    	"de" : "Deine Anfrage im epishop",
		    	"en" : "Deine Anfrage im epishop"
		    
		    },

			{
		    	"searchTerm": "YOUR_ORDER_NUMBER_IS",
		    	"de" : "Dein epishop-Ticket",
		    	"en" : "Dein epishop-Ticket"
		    
		    },

			{
		    	"searchTerm": "PLUS_VAT",
		    	"de" : "zzgl mwst",
		    	"en" : "zzgl mwst"
		    
		    },
			
			{
		    	"searchTerm": "ORDER_SENT",
		    	"de" : "Vielen Dank! Deine Anfrage wird schnellstmöglich bearbeitet",
		    	"en" : "Vielen Dank! Deine Anfrage wird schnellstmöglich bearbeitet"
		    
		    },

			{
		    	"searchTerm": "ORDER_NOT_SENT",
		    	"de" : "Deine Bestellung wurde NICHT geschickt",
		    	"en" : "Ihre Bestellung wurde NICHT geschickt"
		    
		    },

			{
		    	"searchTerm": "LOGIN_TO_USE_SERVICE",
		    	"de" : "Bitte zuerst einloggen.",
		    	"en" : "Please login first."
		    
		    },

			{
				
				"searchTerm": "BASKET_UPDATED",
		    	"de" : "Dein Warenkorb wurde aktualisiert.",
		    	"en" : "Your basket was updated"
			},

			{
				
				"searchTerm": "ONLY_CLIENTS_CAN_DOWNLOAD",
		    	"de" : "Dieser Download ist nur Kunden vorbehalten.",
		    	"en" : "Dieser Download ist nur Kunden vorbehalten."
			},

			{
				
				"searchTerm": "WE_WORK_ON_YOUR_ORDER",
		    	"de" : "Wir bearbeiten Deine Anfrage schnellstmöglich.",
		    	"en" : "Wir bearbeiten deine Anfrage schnellstmöglich."
			}



			
		    
		    
		]';
		
		
			
		return json_decode($str,true);
		
	}	
	
	public function get_reportText($search,$lang){
		
		$array = $this->json_texts();
		
		if (is_array($array) || is_object($array)) {
			
			foreach ($array as $key => $value) {
					
					if ($value['searchTerm'] == $search) {
						
						return $value[$lang];		
					}
					
			
				}
		
		}
		
	
	}
	
	
}



?>

