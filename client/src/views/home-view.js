var HomeView = function(basket, itemsArray){
  this.basket = basket;
  this.itemsArray = itemsArray;
}

HomeView.prototype = {
  render: function() {
    this.createBasketDisplay();
    var itemList = document.getElementById('item-list');
    for (var item of this.itemsArray) {
      itemList.appendChild(this.createItemDisplay(item));
    }
  },
  createBasketDisplay: function() {
    
  },
  createItemDisplay: function(item) {
      var container = document.createElement("li");
      var itemDiv = document.createElement("div");
      var itemName = document.createElement("p");
      var itemCategory = document.createElement("p");
      var itemPrice = document.createElement("p");
      var itemQuantity = document.createElement("p");
      var image = document.createElement("p");

      itemName.innerHTML = item.name;
      itemCategory.innerHTML = "Category: " + item.category;
      itemPrice.innerHTML = "Price: £" + item.price;
      itemQuantity.innerHTML = "Quantity: " + item.quantity;
      image.innerHTML = "<img src=\"" + item.image + "\">";

      itemDiv.appendChild(itemName);
      itemDiv.appendChild(itemCategory);
      itemDiv.appendChild(itemPrice);
      itemDiv.appendChild(itemQuantity);
      itemDiv.appendChild(image);

      container.appendChild(itemDiv);
      return container;
  }
}

module.exports = HomeView;