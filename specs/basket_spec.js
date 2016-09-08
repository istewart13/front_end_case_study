var Basket = require('../basket');
var Item = require('../item');
var assert = require('assert');

describe('basket', function() {

  it('should initialise with zero items', function() {
    var basket = new Basket();
    assert.equal(0, basket.items.length);
  });

  it('should be able to add items', function() {
    var basket = new Basket();
    var item = new Item({name: 'Almond Toe Court Shoes, Patent Black', category: 'Women’s Footwear', price: 99.00, quantity: 5});
    basket.addItem(item);
    assert.deepEqual(item, basket.items[0]);
  });

  it('should be able to remove items', function() {
    var basket = new Basket();
    var item = new Item({name: 'Almond Toe Court Shoes, Patent Black', category: 'Women’s Footwear', price: 99.00, quantity: 5});
    basket.removeItem(item);
    assert.equal(0, basket.items.length);
  });

  it('should calculate total cost', function() {
    var basket = new Basket();
    var item = new Item({name: 'Almond Toe Court Shoes, Patent Black', category: 'Women’s Footwear', price: 99.00, quantity: 5});
    var item2 = new Item({name: 'Suede Shoes, Blue', category: 'Women’s Footwear', price: 42.00, quantity: 4});
    basket.addItem(item);
    basket.addItem(item2);
    assert.equal(141.00, basket.getSubtotal().toFixed(2));
  });

  it('should calculate total cost after removing item', function() {
    var basket = new Basket();
    var item = new Item({name: 'Almond Toe Court Shoes, Patent Black', category: 'Women’s Footwear', price: 99.00, quantity: 5});
    var item2 = new Item({name: 'Suede Shoes, Blue', category: 'Women’s Footwear', price: 42.00, quantity: 4});
    basket.addItem(item);
    basket.addItem(item2);
    basket.removeItem(item);
    assert.equal(42.00, basket.getSubtotal().toFixed(2));
  });

});