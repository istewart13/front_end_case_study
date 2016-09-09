var Voucher = require('../voucher');
var assert = require('assert');

describe('voucher', function() {

  it('should have a code', function() {
    var voucher = new Voucher({code: 'URND-LDJR', type: '15off'});
    assert.equal('URND-LDJR', voucher.code);
  });

  it('should have a type', function() {
    var voucher = new Voucher({code: 'URND-LDJR', type: '15off'});
    assert.equal('15off', voucher.type);
  });

  it('should have a value', function() {
    var voucher = new Voucher({code: 'URND-LDJR', type: '15off'});
    assert.equal(15, voucher.value());
  });

});