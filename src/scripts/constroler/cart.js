const cartTpl = require('../view/cart.html')
const carheader = require('../view/cartheader.html')
const fethch = require('../module/main.js');
const poslistcart = require('../view/poslistcart.html')
const ControllerCart = {
  async rander() {
  	let result = await fethch.myfind('/api/cart');
  	
  	var data = result[0].sub;
  	console.log(data)
	  var data2 = result[0].sub[1].sub
	  let html =  template.render(poslistcart,{data:data,data2:data2});
  	
  	//let html =  template.render(poslistcart,data);
    $('main').html(cartTpl)
    $('#myheader').html(carheader);
    $('#cartgoods').html(html);
    $('.cartbody li').on('click',function(){
   	$(this).addClass('cartactive').siblings().removeClass('cartactive')
   })
  }
}

module.exports = ControllerCart