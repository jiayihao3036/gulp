const mainTpl = require('../view/main.html');
const mainjs = require('../module/main');
const poslist = require('../view/poslist.html');
const Scroll = require('../ulit/scoll')

module.exports=function(){
	let page = 1;
	
	let homescoll = new IScroll('#my_main',{
		probeType: 3,
    	mouseWheel: true
	});
	
	homescoll.scrollBy(0,-40);
	let topimg = $('.my_header img'),
		booltopimg = topimg.hasClass('up');
	let bottomimg = $('.my_footer img'),
		boolbottomimg = bottomimg.hasClass('down');
		homescoll.on('scroll',function(){
		 	let y = this.y,
		 	maxy = this.maxScrollY ;
		 	
			if(y>=0){
				!booltopimg && topimg.addClass('up')
				return
			}
			if(-y>=maxy+40){
				!boolbottomimg && bottomimg.addClass('down')
				return
			}
			
					
		})
		homescoll.on('scrollEnd',async function(){
			
			if(this.y<0&&this.y>-40){
				
				homescoll.scrollTo(0,-40);
				topimg.removeClass('down');
			}else if(this.y>=0){
				//console.log(2)
				topimg.attr('src','./images/ajax-loader.gif');
					let result = await mainjs.myfind('/api/poslist');		
					var data = result;
					let html =  template.render(poslist,data);	
					var myswiper = new Swiper(('.swiper-container', {
						    direction: 'vertical',
						    loop: true,
						    autoplay:true,
						  }))
					//Scroll();
					homescoll.refresh();
					homescoll.scrollTo(0,-40);	
					topimg.attr('src','./images/arrow.png');
					topimg.removeClass('up');
					
					console.log("刷新成功")
					
			}
			if(this.y-this.maxScrollY<40&&this.y > this.maxScrollY){
				homescoll.scrollTo(0,40+this.maxScrollY);
				bottomimg.removeClass('down');
			}else if(this.y <= this.maxScrollY){
				bottomimg.attr('src','./images/ajax-loader.gif');
					let result = await mainjs.myfind('/api/poslist');		
					var data = result;
					let html =  template.render(poslist,data);	
//					$(".content main").html(mainTpl);
//					$("#poslist").html(html);
					
					var myswiper = new Swiper(('.swiper-container', {
						    direction: 'vertical',
						    loop: true,
						    autoplay:true,
						  }))
					//Scroll();
					homescoll.refresh();
					bottomimg.attr('src','./images/arrow.png');
					bottomimg.removeClass('down');
					homescoll.scrollTo(0,40+this.maxScrollY);	
					console.log("添加成功")
					
			}
			
		})
		
}
