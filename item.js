var Item = function(params) {
  this.name = params.name;
  this.category = params.category;
  this.type = params.type;
  this.price = params.price;
  this.quantity = params.quantity;
};

module.exports = Item;