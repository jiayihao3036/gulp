const signin = require('./signin.json')
const poslist = require('./poslist.json')
const userbanner = require('./userbanner.json')
const cart = require('./cart.json')
const cart = require('./p.json')

module.exports = function () {
  return {
    "signin": signin,
    "poslist": poslist,
    "userbanner":userbanner,
    "cart":cart,
    "p":p
  }
}
