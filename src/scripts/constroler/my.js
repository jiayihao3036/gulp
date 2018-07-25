const MyTpl = require('../view/my.html')
const ControllerMy = {
  rander() {
  	console.log(121)
    $('.container main').html(MyTpl)
   $('main').html('my...')
  }
}

module.exports = ControllerMy