<?php

class releases{
	
	
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
	  
	 
	  
	  public function getReleases($lang,$reports) {
	  	  
	  	  $db = new db();
	  	  
	  	  $lang_id = $this->getLangId_fromName($lang);

	  	  $query_string = "
  	  
  	  SELECT 
  	  
  	  dev_textblocks.text,
  	  
  	  dev_releases.id AS release_id, 
  	  dev_releases.version_major,
  	  dev_releases.version_minor,
  	  dev_releases.build,
  	  
  	  YEAR(dev_releases.date) as year, 
  	  MONTH(dev_releases.date) as month, 
  	  DAY(dev_releases.date) as day
  	  
  	  FROM dev_textblocks
  	  
  	  JOIN dev_releases ON dev_textblocks.dev_release_id = dev_releases.id
  	  
  	  WHERE dev_releases.published = 1
  	  
  	  AND dev_textblocks.lang_id =".$lang_id;
  	  
      /*
  	  if ($build != null){
  	  		$query_string.= " AND dev_releases.build=".$build;
  	  }*/
         
  	 $query_string.= " ORDER BY dev_releases.date DESC";
  	  		
  	 
  	  
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