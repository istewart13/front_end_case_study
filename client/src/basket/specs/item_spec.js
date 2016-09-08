var Item = require('../item');
var assert = require('assert');

describe('item', function() {

  it('should have a name', function() {
    var item = new Item({name: 'Almond Toe Court Shoes, Patent Black', category: 'Women’s Footwear', type: 'Footwear', price: 99.00, quantity: 5});
    assert.equal('Almond Toe Court Shoes, Patent Black', item.name);
  });

  it('should have a category', function() {
    var item = new Item({name: 'Almond Toe Court Shoes, Patent Black', category: 'Women’s Footwear', type: 'Footwear', price: 99.00, quantity: 5});
    assert.equal('Women’s Footwear', item.category);
  });

  it('should have a category', function() {
    var item = new Item({name: 'Almond Toe Court Shoes, Patent Black', category: 'Women’s Footwear', type: 'Footwear', price: 99.00, quantity: 5});
    assert.equal('Footwear', item.type);
  });

  it('should have a price', function() {
    var item = new Item({name: 'Almond Toe Court Shoes, Patent Black', category: 'Women’s Footwear', type: 'Footwear', price: 99.00, quantity: 5});
    assert.equal(99.00, item.price);
  });

  it('should have a quantity', function() {
    var item = new Item({name: 'Almond Toe Court Shoes, Patent Black', category: 'Women’s Footwear', type: 'Footwear', price: 99.00, quantity: 5});
    assert.equal(5, item.quantity);
  });

});