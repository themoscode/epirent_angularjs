<?php 

class cms{

	
	public function getCMSPage($page,$lang){
		
		$db = new db();
		$language = new language();
		$lang_id = $language->getLangId_fromName($lang);

		$query_string = "
		
		SELECT 
		
		cms_page.id,
		cms_page.disable,
		cms_page.disable_carousel,
		cms_page.title AS page,
        
        cms_row.disable AS disable_row,
        cms_row_lang.lang_id,
        cms_row_lang.template_id,
        cms_row_lang.gap_up,
        cms_row_lang.gap_down,
        cms_row_lang.title,
        cms_row_lang.subtitle,
        cms_row_lang.text,
        cms_row_lang.img AS image,
        cms_row_lang.image_height,
        cms_row_lang.video,
        cms_row_lang.video_width,
        cms_row_lang.linkPageText,
        cms_row_lang.linkPageURL,

        cms_row_lang.imgLink1,
        cms_row_lang.imgLink1URL,
        cms_row_lang.imgLink2,
        cms_row_lang.imgLink2URL,
       
        cms_page_row.row_order
        
		FROM cms_page 
		
		JOIN cms_page_row ON cms_page.id = cms_page_row.page_id
		JOIN cms_row_lang ON cms_row_lang.row_id = cms_page_row.row_id
        JOIN cms_row ON cms_row_lang.row_id = cms_row.id
		 
		WHERE cms_row_lang.lang_id=".$lang_id." 
		
        AND cms_page.title = '".$page."'

		ORDER BY cms_page_row.row_order";
		
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