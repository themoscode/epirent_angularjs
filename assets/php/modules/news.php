<?php

class news{
	
	
	private function getLangId_fromName($name){
	  	
	  	$db = new db();
	  	$query_string = "SELECT id FROM lang WHERE name='".$name."'";
	  	
	  	//echo $query_string."</br>";
	  	
	  	$query_go = $db->query($query_string);
	  	$result = mysqli_fetch_array($query_go);
	  	$result = $result['id'];
	  	
	  	if (!$result) {$result = 1;}
	  	
	  	return $result;
	  }
	  
	 
	  
	  public function getNews($lang,$reports) {
	  	  
	  	  $db = new db();
	  	  
	  	  $lang_id = $this->getLangId_fromName($lang);

	  	  $query_string = "
	  	  SELECT 
	  	  
	  	  YEAR(newsEPI.created) as year, 
	  	  MONTH(newsEPI.created) as month, 
	  	  DAY(newsEPI.created) as day,
	  	  
	  	  newsEPI_lang.title, 
	  	  newsEPI_lang.html
	  	  
	  	  FROM newsEPI
	  	  JOIN newsEPI_lang ON newsEPI.id = newsEPI_lang.newsEPI_id
	  	  WHERE newsEPI.disable = 0
	  	   
	  	  AND newsEPI_lang.lang_id = ".$lang_id." ORDER BY created DESC" ;
	  	  
	  	  
	  	  
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