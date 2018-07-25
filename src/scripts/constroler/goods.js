const cartTpl = require('../view/goods.html')
const carheader = require('../view/cartheader.html')
const fethch = require('../module/main.js');
const poslistGoods = require('../view/poslistGoods.html')
const ControllerGoods = {
  async rander() {
  	let result = await fethch.myfind('/api/p'); 	
  	var data = result;
  	console.log(data)
//	  var data2 = result[0].sub[1].sub
//	  let html =  template.render(poslistcart,{data:data,data2:data2});
  	
  	//let html =  template.render(poslistcart,data);
    $('main').html(cartTpl)
    $('#myheader').html(carheader);
    //$('#cartgoods').html(html);
//  $('.cartbody li').on('click',function(){
// 	$(this).addClass('cartactive').siblings().removeClass('cartactive')
// })
  }
}

module.exports = ControllerGoods