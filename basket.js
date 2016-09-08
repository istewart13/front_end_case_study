
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




    // if (voucherValue === 5) {
      
    // } else if (voucherValue === 10) {
      
    // } else if (voucherValue === 15) {
    //   if (this.subtotal > 75 && footwearInBasket) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
  }
}

module.exports = Basket;