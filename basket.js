
var Basket = function() {
  this.items = [];
  this.subtotal = 0; 
  this.discount = 0;
  this.total = 0;
  this.voucher = [];
}

Basket.prototype = {
  addItem: function(item) {
    this.items.push(item);
    this.subtotal += item.price;
  },
  removeItem: function(item) {
    var index = this.items.indexOf(item);
    this.items.splice(index, 1);
    this.subtotal -= item.price;
  },
  getSubtotal: function() {
    return this.subtotal;
  },
  applyVoucher: function(voucher) {
    var anotherVoucherApplied = this.voucher.length > 0;
    if (anotherVoucherApplied) {
      // if another voucher has been applied previously, then reset the discounts
      this.resetVouchersUsed();
    }
    this.voucher.push(voucher);
    var voucherValue = voucher.value();
    this.discount += voucherValue;
  },
  resetVouchersUsed: function() {
    this.voucher = [];
    this.discount = 0;
  }
}

module.exports = Basket;