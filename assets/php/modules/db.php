<?php


class db{
	
	
	public function isConnected(){
		if( defined( 'DB_HOST' ) && defined( 'DB_USER' ) && defined( 'DB_PASS' ) && defined( 'DB_NAME' )){
			$db_connect = mysqli_connect( DB_HOST, DB_USER, DB_PASS, DB_NAME);
			if( $db_connect ){
			    mysqli_set_charset($db_connect,"utf8");
				return true;
			}else{
				return false;
			}
		}else{
			return false;
		}
	}	
	
	
	
	public function query($query){
		
		if( defined( 'DB_HOST' ) && defined( 'DB_USER' ) && defined( 'DB_PASS' ) && defined( 'DB_NAME' )){
			$db_connect = mysqli_connect( DB_HOST, DB_USER, DB_PASS, DB_NAME);
			if( $db_connect ){
				mysqli_set_charset($db_connect,"utf8");
				$return = mysqli_query($db_connect,$query);
				if( $return ){
					return $return;
				}else{
					return false;
				}
				
				mysqli_close($db_connect);
			} // if( $db_connect ) 
			else{
				return false;
			}
		} // if defined
		else{
			return false;
		}
		
	}//public functions
	
}



?>