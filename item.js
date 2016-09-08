var Item = function(params) {
  this.name = params.name;
  this.category = params.category;
  this.type = params.type;
  this.price = params.price;
  this.quantity = params.quantity;
};

Item.prototype = {
  decreaseQuantity: function() {
    this.quantity -= 1;
  },
  inStock: function() {
    return this.quantity > 0;
  }
}

module.exports = Item;