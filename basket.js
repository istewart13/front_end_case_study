
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
  removeItem: function(name) {
    var items = this.items;
    for (item of items) {
      if (item.name === name) {
        var index = items.indexOf(item);
        items.splice(index, 1);
        this.subtotal -= item.price;
      }
    }
  },
  getSubtotal: function() {
    return this.subtotal;
  },
}

module.exports = Basket;