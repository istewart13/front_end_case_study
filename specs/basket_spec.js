var Basket = require('../basket');
var Item = require('../item');
var Voucher = require('../voucher');
var assert = require('assert');

describe('basket', function() {

  it('should initialise with zero items', function() {
    var basket = new Basket();
    assert.equal(0, basket.items.length);
  });

  it('should be able to add items', function() {
    var basket = new Basket();
    var item = new Item({name: 'Almond Toe Court Shoes, Patent Black', category: 'Women’s Footwear', type: 'Footwear', price: 99.00, quantity: 5});
    basket.addItem(item);
    assert.deepEqual(item, basket.items[0]);
  });

  it('should be able to remove items', function() {
    var basket = new Basket();
    var item = new Item({name: 'Almond Toe Court Shoes, Patent Black', category: 'Women’s Footwear', type: 'Footwear', price: 99.00, quantity: 5});
    basket.removeItem(item);
    assert.equal(0, basket.items.length);
  });

  it('should calculate total cost', function() {
    var basket = new Basket();
    var item = new Item({name: 'Almond Toe Court Shoes, Patent Black', category: 'Women’s Footwear', type: 'Footwear', price: 99.00, quantity: 5});
    var item2 = new Item({name: 'Suede Shoes, Blue', category: 'Women’s Footwear', type: 'Footwear', price: 42.00, quantity: 4});
    basket.addItem(item);
    basket.addItem(item2);
    assert.equal(141.00, basket.getSubtotal());
  });

  it('should calculate total cost after removing item', function() {
    var basket = new Basket();
    var item = new Item({name: 'Almond Toe Court Shoes, Patent Black', category: 'Women’s Footwear', type: 'Footwear', price: 99.00, quantity: 5});
    var item2 = new Item({name: 'Suede Shoes, Blue', category: 'Women’s Footwear', type: 'Footwear', price: 42.00, quantity: 4});
    basket.addItem(item);
    basket.addItem(item2);
    basket.removeItem(item);
    assert.equal(42.00, basket.getSubtotal());
  });

  it('should be able to use £5 off voucher', function() {
    var basket = new Basket();
    var item = new Item({name: 'Almond Toe Court Shoes, Patent Black', category: 'Women’s Footwear', type: 'Footwear', price: 99.00, quantity: 5});
    var voucher = new Voucher({code: 'SXFP-CHYK', type: '05off'});
    basket.addItem(item);
    basket.applyVoucher(voucher);
    assert.equal(5, basket.discount);
  });

  it('should be able to use £10 off voucher if subtotal over £50', function() {
    var basket = new Basket();
    var item = new Item({name: 'Almond Toe Court Shoes, Patent Black', category: 'Women’s Footwear', type: 'Footwear', price: 99.00, quantity: 5});
    var voucher = new Voucher({code: 'FIEP-CJWM', type: '10off'});
    basket.addItem(item);
    basket.applyVoucher(voucher);
    assert.equal(10, basket.discount);
  });

  it('should not be able to use £10 off voucher if subtotal less than or equal to £50', function() {
    var basket = new Basket();
    var item = new Item({name: 'Flip Flops, Red', category: 'Men’s Footwear', type: 'Footwear', price: 50.00, quantity: 6});
    var voucher = new Voucher({code: 'FIEP-CJWM', type: '10off'});
    basket.addItem(item);
    basket.applyVoucher(voucher);
    assert.equal(0, basket.discount);
  });

  it('should not be able to use £15 off voucher if subtotal under £75', function() {
    var basket = new Basket();
    var item = new Item({name: 'Suede Shoes, Blue', category: 'Women’s Footwear', type: 'Footwear', price: 42.00, quantity: 4});
    var voucher = new Voucher({code: 'URND-LDJR', type: '15off'});
    basket.addItem(item);
    basket.applyVoucher(voucher);
    assert.equal(0, basket.discount);
  });

  it('should not be able to use £15 off voucher if no footwear in basket', function() {
    var basket = new Basket();
    var item = new Item({name: 'Lightweight Patch Pocket Blazer, Deer', category: 'Men’s Formalwear', type: 'Formalwear', price: 175.50, quantity: 1});
    var voucher = new Voucher({code: 'URND-LDJR', type: '15off'});
    basket.addItem(item);
    basket.applyVoucher(voucher);
    assert.equal(0, basket.discount);
  });

  it('should be able to use £15 off voucher if subtotal over £75 and basket includes footwear', function() {
    var basket = new Basket();
    var item = new Item({name: 'Almond Toe Court Shoes, Patent Black', category: 'Women’s Footwear', type: 'Footwear', price: 99.00, quantity: 5});
    var item2 = new Item({name: 'Suede Shoes, Blue', category: 'Women’s Footwear', type: 'Footwear', price: 42.00, quantity: 4});
    var voucher = new Voucher({code: 'URND-LDJR', type: '15off'});
    basket.addItem(item);
    basket.addItem(item2);
    basket.applyVoucher(voucher);
    assert.equal(15, basket.discount);
  });

  it('should only apply the latest voucher added to the basket', function() {
    var basket = new Basket();
    var item = new Item({name: 'Almond Toe Court Shoes, Patent Black', category: 'Women’s Footwear', type: 'Footwear', price: 99.00, quantity: 5});
    var voucher = new Voucher({code: 'SXFP-CHYK', type: '05off'});
    var voucher2 = new Voucher({code: 'FIEP-CJWM', type: '10off'});
    basket.addItem(item);
    basket.applyVoucher(voucher);
    basket.applyVoucher(voucher2);
    assert.equal(10, basket.discount);
  });

  it('should calculate total without vouchers', function() {
    var basket = new Basket();
    var item = new Item({name: 'Almond Toe Court Shoes, Patent Black', category: 'Women’s Footwear', type: 'Footwear', price: 99.00, quantity: 5});
    basket.addItem(item);
    assert.equal(99.00, basket.getTotal());
  });

  it('should calculate total with £5 voucher', function() {
    var basket = new Basket();
    var item = new Item({name: 'Almond Toe Court Shoes, Patent Black', category: 'Women’s Footwear', type: 'Footwear', price: 99.00, quantity: 5});
    var voucher = new Voucher({code: 'SXFP-CHYK', type: '05off'});
    basket.addItem(item);
    basket.applyVoucher(voucher);
    assert.equal(94.00, basket.getTotal());
  });

  it('should calculate total with £10 voucher', function() {
    var basket = new Basket();
    var item = new Item({name: 'Almond Toe Court Shoes, Patent Black', category: 'Women’s Footwear', type: 'Footwear', price: 99.00, quantity: 5});
    var voucher = new Voucher({code: 'FIEP-CJWM', type: '10off'});
    basket.addItem(item);
    basket.applyVoucher(voucher);
    assert.equal(89.00, basket.getTotal());
  });

  it('should calculate total with £15 voucher', function() {
    var basket = new Basket();
    var item = new Item({name: 'Almond Toe Court Shoes, Patent Black', category: 'Women’s Footwear', type: 'Footwear', price: 99.00, quantity: 5});
    var voucher = new Voucher({code: 'URND-LDJR', type: '15off'});
    basket.addItem(item);
    basket.applyVoucher(voucher);
    assert.equal(84.00, basket.getTotal());
  });

  it('should calculate total using latest voucher when multiple are applied', function() {
    var basket = new Basket();
    var item = new Item({name: 'Almond Toe Court Shoes, Patent Black', category: 'Women’s Footwear', type: 'Footwear', price: 99.00, quantity: 5});
    var voucher = new Voucher({code: 'URND-LDJR', type: '15off'});
    var voucher2 = new Voucher({code: 'FIEP-CJWM', type: '10off'});
    basket.addItem(item);
    basket.applyVoucher(voucher);
    basket.applyVoucher(voucher2);
    assert.equal(89.00, basket.getTotal());
  });

  it('should not be able to add items if not in stock', function() {
    var basket = new Basket();
    var item = new Item({name: 'Flip Flops, Blue', category: 'Men’s Footwear', type: 'Footwear', price: 19.00, quantity: 0});
    basket.addItem(item);
    assert.equal(0, basket.items.length);
  });

});