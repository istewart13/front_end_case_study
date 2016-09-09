var Basket = require('./basket/basket.js');
var Item = require('./basket/item.js');
var Voucher = require('./basket/voucher.js');
var sampleItems = require('../items.json');

window.onload = function(){
  var basket = new Basket();
  main(basket);

}

var main = function(basket) {
  console.log(basket);

}