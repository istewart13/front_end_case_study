
var Basket = function() {
  this.items = [];
}

Basket.prototype = {
  addItem: function(item) {
    this.items.push(item);
  },
}

module.exports = Basket;