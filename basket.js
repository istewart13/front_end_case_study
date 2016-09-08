
var Basket = function() {
  this.items = [];
  this.subtotal = 0; 
  this.discount = 0;
  this.total = 0;
}

Basket.prototype = {
  addItem: function(item) {
    this.items.push(item);
    this.subtotal += item.price;
  },
  removeItem: function(item) {
    var index = this.items.indexOf(item);
    this.items.splice(index, 1);
    this.subtotal -= item.price;
  },
  getSubtotal: function() {
    return this.subtotal;
  },
}

module.exports = Basket;