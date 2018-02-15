const cars = require('./data/cars');

module.exports = {
  cart: [],
  total: 0,

  addToCart: function(i) {
    this.total = this.total + i['price']
    this.cart.push(i)
  },

  removeFromCart: function(i, price) {
    this.total = this.total - price
    this.cart.splice(1,1)
  },
  
  checkout: function() {
    this.cart = []
    this.total = 0
  }
};