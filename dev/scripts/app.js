/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "	<div>		<div class=\"my_header\">			<img src=\"./images/arrow.png\"/>						<span>下拉刷新...</span>		</div>		<div >	<div class=\"header1\">		<span>幸运猫</span>		<span>&#xe6ac;</span>	</div>	</div>	<div class=\"header2\">		<ul>			<li>精品推荐</li>			<li>食品饮料</li>			<li>家居日用</li>			<li>排行榜<<</li>		</ul>	</div>	<div class=\"header3\"></div>	<ul id=\"poslist\">			</ul>	<div class=\"my_footer\">		<img src=\"./images/arrow.png\"/>		<span>上拉加载更多...</span>	</div>				</div>									"

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "{{each data}}		<li>			<div class=\"content1\">				<a href=\"#\">					<img src=\"https://img5.xingyunmao.cn{{$value.imgs[0]}}\"/>				</a>				<div class=\"contentright\">					<a href=\"#\"><img src=\"https://img5.xingyunmao.cn{{$value.imgs[1]}}\"/></a>					<a href=\"#\"><img src=\"https://img5.xingyunmao.cn{{$value.imgs[2]}}\"/></a>					<a href=\"#\"><img src=\"https://img5.xingyunmao.cn{{$value.imgs[3]}}\"/></a>				</div>			</div>			<div class=\"pp\"><span>¥{{$value.price}}</span><span >				{{$value.name}}			</span>		</div>			<div class=\"pp2\" id=\'mybanner\'>				<div class=\"swiper-container mytest\">				    <div class=\"swiper-wrapper\">				        <div class=\"swiper-slide\">				        	<span>¥{{$value.price}}</span>													<span>									<b>已抢获¥102购物劵/9.5折</b><img src=\"https://img6.xingyunmao.cn/avatar/cd6df2c1-889c-453d-aec0-2ab9f02bde57\" />								</span>					        </div>				        <div class=\"swiper-slide\">				        <span>¥{{$value.price}}</span>											<span>							<b>已抢获¥92购物劵/5.5折</b><img src=\"https://img6.xingyunmao.cn/avatar/3a2f920b-a060-4634-bbda-1a8e6866d960\" />						</span>					        </div>				        <div class=\"swiper-slide\">				        	  <span>¥{{$value.price}}</span>													<span>									<b>已抢获¥62购物劵/5.0折</b><img src=\"https://img6.xingyunmao.cn/avatar/af3b6635-9603-4e6c-b813-826a23d8d23c\" />								</span>					        </div>				         <div class=\"swiper-slide\">				        	  <span>¥{{$value.price}}</span>													<span>									<b>已抢获¥152购物劵/7.0折</b><img src=\"https://img6.xingyunmao.cn/avatar/c01029c9-80ba-4971-8556-a78bd4fb37e8\" />								</span>					        </div>				         <div class=\"swiper-slide\">				        	  <span>¥{{$value.price}}</span>													<span>									<b>已抢获¥78购物劵/4.0折</b><img src=\"https://img6.xingyunmao.cn//avatar/8c3cb48e-647c-43c0-8082-ad738a4d877b\" />								</span>					        </div>				    </div>													</div>											<button id=\"{{$value.id}}\">游戏抢劵</button>			</div>						</li>{{/each}}"

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const mainTpl = __webpack_require__(1);
const mainjs = __webpack_require__(0);
const poslist = __webpack_require__(2);
const Scroll = __webpack_require__(3)

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


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "	<div>		<div class=\"cart_header1\">			<span></span>							<input type=\"text\" name=\"carttext\" id=\"carttext\" value=\"\"  placeholder=\"请输入关键字\"/>		</div>	</div>"

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const indexTpl = __webpack_require__(6);
const router = __webpack_require__(7);
const controlMain = __webpack_require__(8);
const coll = __webpack_require__(9)
const controlcart = __webpack_require__(10);
const controlMy = __webpack_require__(13);
const controlShopping = __webpack_require__(15);
const controlGoods = __webpack_require__(17);
$("#root").html(indexTpl);
coll.footAction();
var myrout = new router();
myrout.router('/index',controlMain.rander);
myrout.router('/cart',controlcart.rander);
myrout.router('/my',controlMy.rander);
myrout.router('/shopping',controlShopping.rander);
myrout.router('/goods',controlGoods.rander);
myrout.init();



/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">	<div id=\"myheader\">			</div>	<main id=\"my_main\"></main>		<footer class=\"myfooter\">		<ul>			<li><span>&#xe621;</span>首页</li>			<li><span>&#xe618;</span>商城</li>			<li><span>&#xe698;</span>购物车</li>			<li><span>&#xe6b8;</span>我的</li>		</ul>			</footer>	</div>"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function myrouter(){
	this.myurl='',
	this.myrouter1={}

}
myrouter.prototype={
	constructor:myrouter,
	init:function(){
	window.addEventListener('load',this.refresh.bind(this))
	window.addEventListener('hashchange',this.refresh.bind(this))
	},
	refresh:function(){
		this.myurl=location.hash.slice(1)||'/index';
		
		this.myrouter1[this.myurl]();
	},
	router:function(url,cb){
		this.myrouter1[url]=cb
	}
	
}
module.exports = myrouter

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

const mainTpl = __webpack_require__(1);
const mainjs = __webpack_require__(0);
const poslist = __webpack_require__(2);
const Scroll = __webpack_require__(3)
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


/***/ }),
/* 9 */
/***/ (function(module, exports) {

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


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

const cartTpl = __webpack_require__(11)
const carheader = __webpack_require__(4)
const fethch = __webpack_require__(0);
const poslistcart = __webpack_require__(12)
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

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "	<div class=\"cartbody\">		<div class=\"bodyleft\">			<ul>				<li>家用电器</li>				<li>手机数码</li>				<li>个护化妆</li>				<li>母婴童装</li>				<li>电脑办公</li>				<li>家居家纺</li>				<li>居家生活</li>				<li>食品生鲜</li>				<li>酒水饮料</li>				<li>内衣配饰</li>				<li>户外运动</li>				<li>潮流箱包</li>				<li>钟表珠宝</li>				<li>精致礼品</li>			</ul>		</div>		<div class=\"bodyrightmax\">			<div class=\"bodyright\">				<ul id=\"cartgoods\">									</ul>		</div>		</div>			</div>	"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "{{each data}}			<li>				<div class=\"goodsheader\">					<span>{{$value.name}}</span>				</div>				<div class=\"goods\">					<ul>						{{each $value.sub}}							<li>							 								<img src=\"https://img6.xingyunmao.cn{{$value.img}}\"/>																<span>{{$value.name}}</span>							</li>						{{/each}}					</ul>				</div>			</li>{{/each}}"

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

const MyTpl = __webpack_require__(14)
const ControllerMy = {
  rander() {
  	console.log(121)
    $('.container main').html(MyTpl)
   $('main').html('my...')
  }
}

module.exports = ControllerMy

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html><html>	<head>		<meta charset=\"UTF-8\">		<title></title>	</head>	<body>	</body></html>"

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

const shopping = __webpack_require__(16)
const ControllerShop = {
  rander() {
    $('.container main').html(shopping)
   $('main').html('shopping...')
  }
}

module.exports = ControllerShop

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html><html>	<head>		<meta charset=\"UTF-8\">		<title></title>	</head>	<body>	</body></html>"

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

const cartTpl = __webpack_require__(18)
const carheader = __webpack_require__(4)
const fethch = __webpack_require__(0);
const poslistGoods = __webpack_require__(19)
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

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "	<div class=\"goods\">		<ul>			<li></li>		</ul>				</div>			"

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = ""

/***/ })
/******/ ]);