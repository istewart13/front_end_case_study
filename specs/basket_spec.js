var Basket = require('../basket');
var Item = require('../item');
var assert = require('assert');

describe('basket', function() {
  it('should initialise with zero items', function() {
    var basket = new Basket();
    assert.equal(0, basket.items.length);
  });
});