<?php 

class carousel{

	
	

	public function getCarousel($lang,$param2){
		
		$db = new db();
		$language = new language();
		$lang_id = $language->getLangId_fromName($lang);

		$substr = " AND carousel.disable=0";

        if ($param2 == "demo") {
			$substr = "";
		}

		$query_string = "
		
		SELECT 
		
		carousel.id,
		carousel.order,
		carousel.img AS image, 
		carousel.linkPageURL,
		carousel_lang.title,
		carousel_lang.subtitle,
		carousel_lang.linkPageText,
		carousel_lang.video,
		carousel_lang.color,
		carousel_lang.linkColor,
		carousel_lang.videoLinkColor

		FROM carousel 
		
		JOIN carousel_lang ON carousel.id = carousel_lang.carousel_id
		
		 
		WHERE carousel_lang.lang_id=".$lang_id.$substr." 
		
		ORDER BY carousel.order";
		
		//echo $query_string."</br>";
		
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
	
	
		
}

?>