var HomeView = function(basket, itemsArray){
  this.basket = basket;
  this.itemsArray = itemsArray;
}

HomeView.prototype = {
  render: function() {
    var itemList = document.getElementById('item-list');
    for (var item of this.itemsArray) {
      itemList.appendChild(this.createItemDisplay(item));
    }
  },
  createItemDisplay: function(item) {
      var container = document.createElement("li");
      var itemDiv = document.createElement("div");
      var itemName = document.createElement("p");
      itemName.innerHTML = item.name;

      itemDiv.appendChild(itemName);
      container.appendChild(itemDiv);
      // quote.innerHTML = quoteText + " ";
      // var author = document.createElement("cite");
      // author.innerHTML = authorText;
      // quote.appendChild(author);-
      // container.appendChild(quote);
      // container.appendChild(document.createElement("hr"));
      // this.name = params.name;
      // this.category = params.category;
      // this.type = params.type;
      // this.price = params.price;
      // this.quantity = params.quantity;
      // this.image = params.image;
      // this.saleItem = params.saleItem;
      return container;
  }
}

module.exports = HomeView;