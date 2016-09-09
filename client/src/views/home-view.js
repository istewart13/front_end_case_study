var HomeView = function(basket, itemsArray){
  this.basket = basket;
  this.itemsArray = itemsArray;
}

HomeView.prototype = {
  render: function() {
    var item1Display = document.getElementById('item1');
    item1Display.innerHTML = this.itemsArray[0].name;
  }
}

module.exports = HomeView;


//     var businessTotalDisplay = document.getElementById('business-total');
//     var personalTotalDisplay = document.getElementById('personal-total');

//     totalDisplay.innerText = "Total: £" + this.bank.totalCash();
//     businessTotalDisplay.innerText = "Total Business: £" + this.bank.totalCash('business');
//     personalTotalDisplay.innerText = "Total Personal: £" + this.bank.totalCash('personal');

//     var businessAccountList = document.getElementById('business-accounts');
//     var personalAccountList = document.getElementById('personal-accounts');

//     this.populateAccountList(businessAccountList, this.bank.filteredAccounts('business'))
//     this.populateAccountList(personalAccountList, this.bank.filteredAccounts('personal'))
//   },

//   createItemForDisplay: function(account){
//     var item = document.createElement('li');
//     item.innerText = account.owner + ": £" + account.amount;
//     return accountListItem;
//   },

//   populateAccountList:function(listElement, accounts){
//     for(account of accounts){
//       listElement.appendChild(this.createItemForAccount(account));
//     }
//   }
// }