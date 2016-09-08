
var Basket = function() {
  this.items = [];
}

Basket.prototype = {
  addItem: function(item) {
    this.items.push(item);
  },
  removeItem: function(name) {
    var items = this.items;
    for (item of items) {
      if (item.name === name) {
        var index = items.indexOf(item);
        items.splice(index, 1);
      }
    }
  },
}

module.exports = Basket;