<?php 
class support{
	

    private function getSql($searchText,$lang){
       
       $language = new language();
       
       $lang_id = $language->getLangId_fromName($lang);

       $arr = explode(" ",$searchText);

       $start = " WHERE lang_id = ".$lang_id;

       for ($x = 0; $x < count($arr); $x++) {
           
            $question = $question . " AND question like '%".$arr[$x]."%'";
            $answer = $answer . " AND answer like '%".$arr[$x]."%'";
            $tags = $tags . " AND tags like '%".$arr[$x]."%'";
        }

       $question = ltrim($question, ' AND');    
       $answer = ltrim($answer, ' AND'); 
       $tags = ltrim($tags, ' AND');  

        $result = $start." AND ( ( ".$question." )  OR  ( ".$answer." )  OR ( ".$tags." ) )"; 
        
        $result = $result." AND disable = 0";

        return $result;

    }

	
    public function getSearchResults($searchText,$lang){
	
	  $db = new db();
      
	  $query_string = "SELECT *  FROM faq ".$this->getSql($searchText,$lang);
	    
      
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


    public function voteResult($answer,$id) {

            $db = new db();
			
            if ($answer == "yes") {

                $subQuery = " SET likes = likes + 1 WHERE id=".$id;
            }
            else {

                $subQuery = " SET dislikes = dislikes + 1 WHERE id=".$id;
            }

			$query_string = "UPDATE faq".$subQuery;
			
				
			$query_go = $db->query($query_string);
			
			if ($query_go) {
				
				return true;
			
			}
			
			return false;


    }

}

?>