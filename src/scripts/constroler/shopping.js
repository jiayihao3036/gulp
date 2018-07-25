const shopping = require('../view/shopping.html')
const ControllerShop = {
  rander() {
    $('.container main').html(shopping)
   $('main').html('shopping...')
  }
}

module.exports = ControllerShop