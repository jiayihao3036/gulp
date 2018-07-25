const indexController={
	footAction(){
		var mylist=["/index","/cart","/shopping","/my","/goods"]
		$('footer li:nth-child(1)').addClass('active')
		//console.log(2)
		$('.myfooter li').on("click",function(){ 
			console.log($(this))
			location.hash = mylist[$(this).index()];			
			$(this).addClass("active").siblings().removeClass("active");	
		})	
		$('.goods li').on("click",function(){ 
			location.hash = mylist[4];							
		})
	}
}
module.exports = indexController;
