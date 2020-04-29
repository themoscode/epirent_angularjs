<?php 

class language{

	
	public function getLangId_fromName($name){
		
		$db = new db();
		$query_string = "SELECT id FROM lang WHERE name='".$name."'";
		
		//echo $query_string."</br>";
		
		$query_go = $db->query($query_string);
		$result = mysqli_fetch_array($query_go);
		$result = $result['id'];
		return $result;
	}


	public function getLangName_fromID($id){
		
		$db = new db();
		$query_string = "SELECT name FROM lang WHERE id=".$id;
		
		//echo $query_string."</br>";
		
		$query_go = $db->query($query_string);
		$result = mysqli_fetch_array($query_go);
		$result = $result['name'];
		return $result;
	}
	
	public function getLangs() {
		
			$db = new db();
			$query_string = "SELECT lang.id, lang.name FROM lang ORDER BY lang.id";
			$query_go = $db->query($query_string);
			
			if( $query_go ){
				
				if( mysqli_num_rows($query_go) != 0 ){
				
					for( $a=0;$a<mysqli_num_rows($query_go);$a++){
						$rows[] = mysqli_fetch_array($query_go);
						
					} //for
					
					return $rows;
					
				}//if num
				
				return false;
			
			} // if( $query_go ){
			
			
		} //public function getLangs() {
		
}



?>