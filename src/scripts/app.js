const indexTpl = require('./view/index.html');
const router = require('./ulit/router.js');
const controlMain = require('./constroler/main.js');
const coll = require('./constroler/index.js')
const controlcart = require('./constroler/cart.js');
const controlMy = require('./constroler/my.js');
const controlShopping = require('./constroler/shopping.js');
const controlGoods = require('./constroler/goods.js');
$("#root").html(indexTpl);
coll.footAction();
var myrout = new router();
myrout.router('/index',controlMain.rander);
myrout.router('/cart',controlcart.rander);
myrout.router('/my',controlMy.rander);
myrout.router('/shopping',controlShopping.rander);
myrout.router('/goods',controlGoods.rander);
myrout.init();

