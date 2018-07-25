const mainTpl = require('../view/main.html');
const mainjs = require('../module/main');
const poslist = require('../view/poslist.html');
const Scroll = require('../ulit/scoll')
Controllermain={
	async rander(){		
		console.log(0)
		let result = await mainjs.myfind('/api/poslist');		
		var data = result;
		let html =  template.render(poslist,data);	//(poslist,{data,data2})
		$(".content main").html(mainTpl);
		$("#poslist").html(html);
			var myswiper = new Swiper('.swiper-container', {
				allowTouchMove: false,
			    direction: 'vertical',
			    loop: true,
			    autoplay:{
			    	delay:2000			    	
			    },
			 })		
		Scroll()
	}		
}
module.exports=Controllermain
