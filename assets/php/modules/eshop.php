<?php 
class eshop{
    

   

  public function sendOrder($user_id,$lang) {
  		

  		$order_code = $this->inform_order_history($user_id,$lang);//ok
  		
          
          if ($this->sendOrder_emails($order_code,$user_id,$lang)) {

                if ($this->clearUserBasket($user_id)) {

                    return true;
                }
                else {
                    return false;
                }

          }	
          else {

              return false;
          }
  		
		
		
  }



  
   private function clearUserBasket($user_id) {
  
  		$db = new db();
  		$query_string = "delete FROM basket WHERE user_id = ".$user_id;
  			
  			if($db->query($query_string)){
  			
  				return true;
  			}
  			else{
  			
  				return false;
  			
  		}
  
  }


  private function getOrderHtmlMail($user_id,$lang){
    

    $reports = new reports();

  	$rows =  $this->getBasketItems($user_id,$lang);
  	
  		
  		$result = '';
  		
  		if ($rows) {
  		
	  		
	  		$result.='
	  	  	<table style="width:100%; max-width:600px;border:1px solid gray;padding:2px;">
	  	  	    <thead>
	  	  	     
	  	  	      <tr>
	  	  	        <th style="border: 0px solid black;" align="left">'.$reports->get_reportText("TITLE",$lang).'</th>
	  	  	        <th style="border: 0px solid black;" align="center">'.$reports->get_reportText("QUANTITY",$lang).'</th>
                    <th style="border: 0px solid black;" align="right">'.$reports->get_reportText("PRICE",$lang).'</th>
	  	  	      </tr>
	  	  	    </thead>
	  	  	    <tbody>';
	  	  	      $totalPrice = 0;
	  	  	      	foreach($rows as $row){
	  	  	      		
	  			  			$result.='
	  			  			<tr>
		  			  	        <td style="border: 0px solid black;" align="left">'.$row['product_title'].'</td>
		  			  	        <td style="border: 0px solid black;" align="center">'.$row['quantity'].'</td>	
                                <td style="border: 0px solid black;" align="right">'.number_format($row['price'],2,",",".").' '.$this->getCurrencySymbol().'</td>    		  	        
	  			  	      	</tr>';
	  			  	      
	  			  	      	$totalPrice = $totalPrice + $row['rowSumPrice'];
	  		  	      	
	  		  	      	}//for each
	  		  	      	$sumPrice = $totalPrice ;
	  		  	   $result.=' 
	      			<tr>
                        <td colspan="3" style="border: 0px solid black;" ></td>
                    </tr>
                    <tr>
	  	  	      	  	<td colspan="3" style="border: 0px solid black;" align="right"><strong>Gesamt netto (zzgl. MwSt):</strong> : <span>'.number_format($totalPrice,2,",",".").' '.$this->getCurrencySymbol().'</span></td>
	  	  	      	</tr>
	  	  	      	
	  	    		</tbody>
	  	  	  </table>';
         return $result;                   
  	   } // if rows
       
       else {
           return false;
       }
  	 
  }


  private function sendOrder_emails($order_code,$user_id,$lang) {
  		
  		// send mail to epi
  		// send mail to the user
  		$user = new user();  
  		$email_obj = new email();
        $reports = new reports();  
		//$site = new site();
		//$report = new report();
  		
  		$userData = $user->get_per_uid($user_id);
  		$orderHTML = $this->getOrderHtmlMail($user_id,$lang);
          
        if ($orderHTML == false) {
            return false;
        }
       

  		$subject_user = $reports->get_reportText("YOUR_ORDER",$lang);
  		$subject_EPI = 'Anfrage aus epiShop';
  		
  		$html_message_user = '<p>'.$reports->get_reportText("THANKS_FOR_ORDERING",$lang).'<br>';
        $html_message_user.= $reports->get_reportText("WE_WORK_ON_YOUR_ORDER",$lang).'</p><br>';  
  		$html_message_user.= '<p>'.$reports->get_reportText("YOUR_ORDER_NUMBER_IS",$lang).': <strong>'.$order_code.'</strong></p><br>';
  		$html_message_user.= $orderHTML;
  		
        $html_message_user.= $reports->get_reportText("MAIL_FOOTER",$lang); 


  		$html_message_epi = '<p>NUM:<strong>'.$order_code.'</strong><br>';
        $html_message_epi.= 'Name:<strong>'.$userData['name'].'</strong>><br>';  
        $html_message_epi.= 'Benutzername:<strong>'.$userData['username'].'</strong>><br>'; 
        $html_message_epi.= 'E-mail:<strong>'.$userData['email'].'</strong>><br>';
        $html_message_epi.= 'Adresse:<strong>'.$userData['address'].'</strong>></p><br>';
        $html_message_epi.= $orderHTML;
  		
  		$from_name = "EPI development";
  		$from_email="sales@epi-dev.de";
  			
	  	$to_email=$userData['email'];
	  	$to_name=$userData['username'];
  	  	
  	  
  	  if ($email_obj->send($from_name, $from_email, $html_message_user, $to_email, $to_name, $subject_user, "", "")) { // mail to the user
  	  		
  	  		
  	  		$email_obj->send($to_name, $to_email, $html_message_epi, $from_email, $from_name, $subject_EPI, "", ""); // mail to EPI
  	  	
  	  	//return $reports->get_reportText("ORDER_SENT",$lang);
  	  	//$report->alert(ORDER_SENT);
  	  	return true;
  	  	
  	  }
  	  else {
  	  	
  	  	//$report->alert(ORDER_NOT_SENT);
  	  	return false;
  	  }
  	
  
  
  }

  private function create_orderCode($user_id){ 
         
        $db = new db();
       
    	$query_string = "SELECT CURRENT_TIMESTAMP";
    	$query_go = $db->query($query_string);
    	$result = mysqli_fetch_array($query_go);
        $timestamp = $result['CURRENT_TIMESTAMP'];
       
        
  		$result = str_replace("-","",$timestamp);
  		$result = str_replace(":","",$result);
  		$result = str_replace(" ","",$result);
  		$result = $user_id.'_'.$result;
  		
        return $result;
  } 

   private function getPrice_from_id($product_price_id){
  
  	$db = new db();
  	$query_string = "SELECT price FROM product_price WHERE id=".$product_price_id;
  	$query_go = $db->query($query_string);
  	$result = mysqli_fetch_array($query_go);
  	
  	return $result['price'];
  }

   private function inform_order_history($user_id,$lang) {
  		
  		$db = new db();
		$code = $this->create_orderCode($user_id);
		$rows =  $this->getBasketItems($user_id,$lang);
		
  		
  		foreach($rows as $row){
  			
  			$product_id = $row['product_id'];
  			$product_price_id = $row['product_price_id'];
  			$price_item_payed = $this->getPrice_from_id($product_price_id);
  			
  			$quantity = $row['quantity'];
  		
  			$query_string = "INSERT INTO order_history ( code, user_id, product_id,product_price_id, price_item_payed,quantity ) 
  			VALUES ( '".$code."', ".$user_id.",".$product_id.", ".$product_price_id.", ".$price_item_payed.", ".$quantity." );";
  			
  			$query_go = $db->query($query_string);
  		}
  		
  		return $code;
  		
  }



    private function insertNewProductToBasket($product_id,$product_price_id,$user_id){
  
        $db = new db();
        $sess_id = session_id();
        
        //echo $sess_id;
        
        $query_string = "INSERT INTO basket ( session_id, user_id, product_id,product_price_id, quantity ) VALUES ( '".$sess_id."', ".$user_id.",".$product_id.", ".$product_price_id.",1 );";
        
        //echo $query_string;
        
        if($db->query($query_string)){
            return true;
        }else{
            return false;
        }
  
  }

    public function updateBasketProductQuantity($user_id,$basket_id,$quantity) {
  
    // public function updateBasketProductQuantity() {
        
        $db = new db();
        $query_string = "UPDATE basket SET quantity = ".$quantity." WHERE id = ".$basket_id;
        
        $result['getBasketQuantity'] = 0;
        
        
        if ($db->query($query_string)) {
            
            $result['getBasketQuantity'] = $this->getBasketQuantity($user_id);
            
            
        }
  	 	
  	 return $result;
  	
  }

    private function productInBasketExists($product_id,$user_id){
  	
  		$db = new db();
  		$query_string = "select id AS basket_id, quantity FROM basket WHERE product_id = ".$product_id." AND user_id = '".$user_id."'";
  		$query_go = $db->query($query_string);
  		
  		if( $query_go ){
			if(mysqli_num_rows($query_go)==1){
				$result = mysqli_fetch_array($query_go);
				return $result;
				}
			else{
				return false;
			}  
		  }
  	
  }


   public function deleteBasketItem($basket_id,$user_id) {
  
	   $db = new db();
	   $query_string = "delete FROM basket WHERE id = ".$basket_id;
	   
	     $result['getBasketQuantity'] = 0;
	   	
	   	
	   	 if ($db->query($query_string)) {
	   	 	
	   	 	$result['getBasketQuantity'] = $this->getBasketQuantity($user_id);
	   	    
	   	 	
	   	 }
	   	 	
	   	 return $result;
  
  }


    public function productToBasket($product_id,$product_price_id,$user_id){
  	
        $product_exists = $this->productInBasketExists($product_id,$user_id);
        
        if ($product_exists) {
            $this->updateBasketProductQuantity($user_id,$product_exists['basket_id'],$product_exists['quantity']+1);
        }
        else {
            $this->insertNewProductToBasket($product_id,$product_price_id,$user_id);
        }
        
        $result['getBasketQuantity'] = $this->getBasketQuantity($user_id);
        
        return $result;
  } 

    public function getBasketQuantity($user_id) {
  
        $db = new db();
        
        // check if the user has products in the basket
        $query_string = "SELECT id FROM basket WHERE user_id = '".$user_id."'";
        $query_go = $db->query($query_string);
        if(mysqli_num_rows($query_go)==0) {
        
            return 0;
        }
        
        // if the user has products take the sum quantity
        $query_string = "SELECT SUM(quantity) AS sumQuantity FROM `basket` WHERE user_id = '".$user_id."'";
        $query_go = $db->query($query_string);
        
        
        if( $query_go ) {
            if(mysqli_num_rows($query_go)!=0) {
                
                $quantity = mysqli_fetch_array($query_go);
                return $quantity['sumQuantity'];
                
            }
            
            return 0;
        }
        
        return 0;
  	
  }

    public function getUserCurrency() {
  	
        $db = new db();
        
        $query_string = "
        SELECT currency . *
        FROM currency
        WHERE id =".DEFAULT_CURRENCY_ID;
        
        
        $query_go = $db->query($query_string);
        
        $result = mysqli_fetch_array($query_go);
        return $result;
        
    }

    public function getCurrencySymbol() { /// from the user
  	
        $currency = $this->getUserCurrency();
        return $currency['symbol'];
    }

    private function getLangId_fromName($name){
  	
        $db = new db();
        $query_string = "SELECT id FROM lang WHERE name='".$name."'";
        
        //echo $query_string."</br>";
        
        $query_go = $db->query($query_string);
        $result = mysqli_fetch_array($query_go);
        $result = $result['id'];
        return $result;
    }

    public function getProducts($category_id,$lang){
    

        $db = new db();
        //$values = new values();
        $currency = $this->getUserCurrency();
        
        $query_string = "
        SELECT product.id AS product_id, 
        product.img, 
        product_lang.title, 
        product_lang.description, 
        lang.name, 
        product_price.price,
        product_price.id AS product_price_id,
        product_price.currency_id
        
            FROM product
            JOIN product_lang ON product.id = product_lang.product_id
        
            JOIN lang ON product_lang.lang_id = lang.id
            JOIN product_price ON product.id = product_price.product_id
            
            JOIN currency ON product_price.currency_id = currency.id 
        WHERE lang.name = '".$lang."' 
        AND product.category_id = ".$category_id." 
        AND currency.id = ".$currency['id']."
        AND product.disable = 0";
        
    
        $query_go = $db->query($query_string);
                
            if( $query_go ){
                
                if( mysqli_num_rows($query_go) != 0 ){
                
                    for( $a=0;$a<mysqli_num_rows($query_go);$a++){
                        $rows[] = mysqli_fetch_array($query_go);
                        
                    } //for
                    
                    return $rows;
                    
                }//if num
                
                return false;
            
            } //if query_go
        
            return false;
    	
    }//function


    public function getBasketItems($user_id,$lang) {
  
	 
	  $db = new db();
	  //$values = new values();
	  $currency = $this->getUserCurrency();
	  
	  
	  
	  $query_string = "SELECT 
	    
	    basket.id AS basket_id,
	    basket.product_id,
	    basket.quantity,
	    basket.product_price_id,
	    lang.name,
	    product_lang.title AS product_title,
	    product_price.price,

        product.img AS product_image, 
       
        product_lang.description AS product_description, 

	    product_price.price * basket.quantity AS rowSumPrice
	   
	    FROM basket
	    
        JOIN product ON basket.product_id = product.id
	    JOIN product_lang ON basket.product_id = product_lang.product_id
	    JOIN lang ON product_lang.lang_id = lang.id
	    
	    JOIN product_price ON basket.product_id = product_price.product_id
	  
	  JOIN currency ON product_price.currency_id = currency.id
	  
	   WHERE user_id = ".$user_id." AND lang.name = '".$lang."' AND currency.id = ".$currency['id'];
	   
	 //return  $query_string;
	  
	  $query_go = $db->query($query_string);
	  		
	      if( $query_go ){
	      	
	      	if( mysqli_num_rows($query_go) != 0 ){
	      	
	      		for( $a=0;$a<mysqli_num_rows($query_go);$a++){
	      			$rows[] = mysqli_fetch_array($query_go);
	      			
	      		} //for
	      		
	      		return $rows;
	      		
	      	}//if num
	      	
	      	return false;
	      
	      } //if query_go
	  
	  	return false;
  
  }

    public function getCategories($lang) {
        
        
            $db = new db();
            $query_string = "SELECT category.id, category_lang.title, category_lang.description
            FROM category
            JOIN category_lang ON category.id = category_lang.category_id
            WHERE category.disable = 0
            AND category_lang.lang_id =".$this->getLangId_fromName($lang); 
            
            //echo $query_string;
            
            $query_go = $db->query($query_string);
            
            if( $query_go ){
                
                if( mysqli_num_rows($query_go) != 0 ){
                
                    for( $a=0;$a<mysqli_num_rows($query_go);$a++){
                        $rows[] = mysqli_fetch_array($query_go);
                        
                    } //for

                    foreach($rows as $row){

                        if ( $this->getProducts($row['id'],$lang) ) {

                             $rowsFinal[] = $row;
                        }

                    }
                    
                    return $rowsFinal;
                    
                }//if num
                
                return false;
            
            }
        
    }

///class
}

?>