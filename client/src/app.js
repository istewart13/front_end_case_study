var Basket = require('./basket/basket.js');
var Item = require('./basket/item.js');
var Voucher = require('./basket/voucher.js');
var HomeView = require('./views/home-view.js');
var sampleItems = require('../items.json');

window.onload = function() {
  var itemsArray = [];
  for(item of sampleItems) {
    // var itemObject = JSON.parse(item);
    itemsArray.push(item);
  }

  var basket = new Basket();
  var homeView = new HomeView(basket, itemsArray);
  homeView.render();
}


