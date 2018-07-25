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