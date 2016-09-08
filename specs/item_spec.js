var Item = require('../item');
var assert = require('assert');

describe('item', function() {

  it('should have a name', function() {
    var item = new Item({name: 'Almond Toe Court Shoes, Patent Black', category: 'Women’s Footwear', price: 99.00, quantity: 5});
    assert.equal('Almond Toe Court Shoes, Patent Black', item.name);
  });

  it('should have a category', function() {
    var item = new Item({name: 'Almond Toe Court Shoes, Patent Black', category: 'Women’s Footwear', price: 99.00, quantity: 5});
    assert.equal('Women’s Footwear', item.category);
  });

});