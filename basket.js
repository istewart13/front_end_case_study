
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
    var voucherValue = voucher.value();
    var voucherIsValid = this.validateVoucher(voucherValue);
    if (!voucherIsValid) {
      return;
    }

    this.checkForPreviousVoucher();
    this.voucher.push(voucher);
    this.discount += voucherValue;
    // TODO - apply validation on vouchers used
  },
  checkForPreviousVoucher: function() {
    var anotherVoucherApplied = this.voucher.length > 0;
    if (anotherVoucherApplied) {
      // if another voucher has been applied previously, then reset the discounts
      this.resetVouchersUsed();
    }
  },
  resetVouchersUsed: function() {
    this.voucher = [];
    this.discount = 0;
  },
  footwearCheck: function() {
    for(var item of this.items){
      if (item.type === "Footwear") {
        return true;
      }
    }
  },
  validateVoucher: function(voucherValue) {
    // TODO - add test for footwear
    var footwearInBasket = this.footwearCheck();
    if (voucherValue === 5) {
      return true;
    } else if (voucherValue === 10) {
      if (this.subtotal > 50) {
        return true;
      } else {
        return false;
      }
    } else if (voucherValue === 15) {
      // TODO - add test for footwear
      if (this.subtotal > 75 && footwearInBasket) {
        return true;
      } else {
        return false;
      }
    }
  }
}

module.exports = Basket;