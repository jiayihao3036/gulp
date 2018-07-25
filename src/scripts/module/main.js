const find={
 	 myfind(url){
 		return fetch(url)
 				.then(function(response){
 					return response.json()
 					})
 				.then(function(res){
 					return res
 				})
 				
 	}	
 }
module.exports = find