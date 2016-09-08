var Basket = function() {
  this.items = [];
  this.voucher = [];
  this.subtotal = 0; 
  this.discount = 0;
  this.total = 0;
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
    var voucherValue = voucher.value();
    var voucherIsValid = this.validateVoucher(voucherValue);
    if (!voucherIsValid) {
      return;
    }
    this.checkForPreviousVoucher();
    this.voucher.push(voucher);
    this.discount += voucherValue;
  },
  checkForPreviousVoucher: function() {
    var anotherVoucherApplied = this.voucher.length > 0;
    if (anotherVoucherApplied) {
      this.resetVouchersUsed();
    }
  },
  resetVouchersUsed: function() {
    this.voucher = [];
    this.discount = 0;
  },
  validateVoucher: function(voucherValue) {
    var footwearInBasket = this.footwearCheck();
    switch(voucherValue) {
        case 5:
          return true;
        case 10:
          if (this.subtotal > 50) { return true; }
        case 15:
          if (this.subtotal > 75 && footwearInBasket) { return true; }
        default:
          return false;
    }
  },
  footwearCheck: function() {
    for(var item of this.items){
      if (item.type === "Footwear") {
        return true;
      }
    }
  }
}

module.exports = Basket;