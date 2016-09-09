/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Basket = __webpack_require__(1);
	var Item = __webpack_require__(3);
	var Voucher = __webpack_require__(4);
	var sampleItems = __webpack_require__(2);
	
	window.onload = function(){
	  var basket = new Basket();
	  main(basket);
	
	}
	
	var main = function(basket) {
	  console.log(basket);
	
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	// TODO - prevent all instance variables from being accesssed directly
	var Basket = function() {
	  this.items = [];
	  this.voucher = [];
	  this.subtotal = 0; 
	  this.discount = 0;
	  this.total = 0;
	}
	
	Basket.prototype = {
	  addItem: function(item) {
	    var itemInStock = item.inStock();
	    if (!itemInStock) {
	      // TODO - alert user
	      return;
	    }
	    this.items.push(item);
	    item.decreaseQuantity();
	    this.subtotal += item.price;
	  },
	  removeItem: function(item) {
	    var index = this.items.indexOf(item);
	    this.items.splice(index, 1);
	    this.subtotal -= item.price;
	  },
	  getSubtotal: function() {
	    return this.subtotal.toFixed(2);
	  },
	  getTotal: function() {
	    this.updateTotal();
	    return this.total.toFixed(2);
	  },
	  updateTotal: function() {
	    this.total = this.subtotal - this.discount;
	  },
	  applyVoucher: function(voucher) {
	    var voucherValue = voucher.value();
	    var voucherIsValid = this.validateVoucher(voucherValue);
	    if (!voucherIsValid) {
	      // TODO - alert user
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = [
	  {
	    "name": "Almond Toe Court Shoes, Patent Black",
	    "category": "Women’s Footwear",
	    "type": "Footwear",
	    "price": 99.00,
	    "quantity": 5,
	    "image": "...",
	    "saleItem": false
	  },
	  {
	    "name": "Suede Shoes, Blue",
	    "category": "Women’s Footwear",
	    "type": "Footwear",
	    "price": 42.00,
	    "quantity": 4,
	    "image": "...",
	    "saleItem": false
	  },
	  {
	    "name": "Leather Driver Saddle Loafers, Tan",
	    "category": "Men’s Footwear",
	    "type": "Footwear",
	    "price": 34.00,
	    "quantity": 12,
	    "image": "...",
	    "saleItem": false
	  },
	  {
	    "name": "Flip Flops, Red",
	    "category": "Men’s Footwear",
	    "type": "Footwear",
	    "price": 19.00,
	    "quantity": 6,
	    "image": "...",
	    "saleItem": false
	  },
	  {
	    "name": "Flip Flops, Blue",
	    "category": "Men’s Footwear",
	    "type": "Footwear",
	    "price": 19.00,
	    "quantity": 0,
	    "image": "...",
	    "saleItem": false
	  },
	  {
	    "name": "Gold Button Cardigan, Black",
	    "category": "Women’s Casualwear",
	    "type": "Casualwear",
	    "price": 167.00,
	    "quantity": 6,
	    "image": "...",
	    "saleItem": false
	  },
	  {
	    "name": "Cotton Shorts, Medium Red",
	    "category": "Women’s Casualwear",
	    "type": "Casualwear",
	    "price": 30.00,
	    "quantity": 5,
	    "image": "...",
	    "saleItem": false
	  },
	  {
	    "name": "Fine Stripe Short Sleeve Shirt, Grey",
	    "category": "Men’s Casualwear",
	    "type": "Casualwear",
	    "price": 49.99,
	    "quantity": 9,
	    "image": "...",
	    "saleItem": false
	  },
	  {
	    "name": "Fine Stripe Short Sleeve Shirt, Green",
	    "category": "Men’s Casualwear",
	    "type": "Casualwear",
	    "price": [49.99, 39.99],
	    "quantity": 3,
	    "image": "...",
	    "saleItem": true
	  },
	  {
	    "name": "Sharkskin Waistcoat, Charcoal",
	    "category": "Men’s Formalwear",
	    "type": "Formalwear",
	    "price": 75.00,
	    "quantity": 2,
	    "image": "...",
	    "saleItem": false
	  },
	  {
	    "name": "Lightweight Patch Pocket Blazer, Deer",
	    "category": "Men’s Formalwear",
	    "type": "Formalwear",
	    "price": 175.50,
	    "quantity": 1,
	    "image": "...",
	    "saleItem": false
	  },
	  {
	    "name": "Bird Print Dress, Black",
	    "category": "Women’s Formalwear",
	    "type": "Formalwear",
	    "price": 270.00,
	    "quantity": 10,
	    "image": "...",
	    "saleItem": false
	  },
	  {
	    "name": "Mid Twist Cut-Out Dress, Pink",
	    "category": "Women’s Formalwear",
	    "type": "Formalwear",
	    "price": 540.00,
	    "quantity": 5,
	    "image": "...",
	    "saleItem": false
	  }
	]

/***/ },
/* 3 */
/***/ function(module, exports) {

	var Item = function(params) {
	  this.name = params.name;
	  this.category = params.category;
	  this.type = params.type;
	  this.price = params.price;
	  this.quantity = params.quantity;
	};
	
	Item.prototype = {
	  decreaseQuantity: function() {
	    this.quantity -= 1;
	  },
	  inStock: function() {
	    return this.quantity > 0;
	  }
	}
	
	module.exports = Item;

/***/ },
/* 4 */
/***/ function(module, exports) {

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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map