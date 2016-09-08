var Voucher = function(params) {
  this.code = params.code;
  this.type = params.type;
};

Voucher.prototype = {
  value: function() {
    // force parse int to use base 10 numbering
    var voucherValue = parseInt(this.type.substr(0, 2), 10);
    return voucherValue;
  },
}

module.exports = Voucher;