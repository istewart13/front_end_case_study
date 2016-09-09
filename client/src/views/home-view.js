var HomeView = function(basket, itemsArray){
  this.basket = basket;
  this.itemsArray = itemsArray;
}

HomeView.prototype = {
  render: function() {
    this.renderBasket();
    var itemList = document.getElementById('item-list');
    for (var item of this.itemsArray) {
      itemList.appendChild(this.createItemDisplay(item));
    }
  },
  addToBasket: function(item) {
    this.basket.addItem(item);
  },
  renderBasket: function() {
    // var basketList = document.getElementById('basket-list');
    // for (var item of this.basket.items) {
    //   basketList.appendChild(this.createItemDisplay(item));
    // }
  },
  createItemDisplay: function(item) {
    var container = document.createElement("li");
    var itemDiv = document.createElement("div");
    var itemName = document.createElement("p");
    var itemAdd = document.createElement("p");
    var itemCategory = document.createElement("p");
    var itemPrice = document.createElement("p");
    var itemQuantity = document.createElement("p");
    var image = document.createElement("p");

    itemName.innerHTML = item.name;
    itemAdd.innerHTML = '<p>Add to basket</p>';
    itemAdd.onclick = function() {
      this.addToBasket(item);
      this.renderBasket();
    }.bind(this);
    itemCategory.innerHTML = "Category: " + item.category;
    itemPrice.innerHTML = "Price: £" + item.price;
    itemQuantity.innerHTML = "Quantity: " + item.quantity;
    image.innerHTML = "<img src=\"" + item.image + "\">";

    itemDiv.appendChild(itemName);
    itemDiv.appendChild(itemAdd);
    itemDiv.appendChild(itemCategory);
    itemDiv.appendChild(itemPrice);
    itemDiv.appendChild(itemQuantity);
    itemDiv.appendChild(image);

    container.appendChild(itemDiv);
    return container;
  }
}

module.exports = HomeView;