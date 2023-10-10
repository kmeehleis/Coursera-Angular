(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// ** ToBuyController
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

  var toBuy = this;

  toBuy.name = "";
  toBuy.quantity = "";
  toBuy.items = ShoppingListCheckOffService.getaddItems(toBuy.quantity, toBuy.name);

  toBuy.buyItem = function() {
    ShoppingListCheckOffService.buyItem(toBuy.name, toBuy.quantity);
    }

  }

// ** AlreadyBoughtController
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this ;

  bought.name = "";
  bought.quantity = "";
  
  bought.items=ShoppingListCheckOffService.getAlreadyItems();

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var addItems = [
    {
      name: "Cookies",
      quantity: "10"
    },
    {
      name: "bottles of beer",
      quantity: "6"
    },
    {
      name: "Packages of Cheese",
      quantity: "3"
    },
    {
      name: "Cans of Dog food",
      quantity: "4"
    },
    {
      name: "loaf of bread",
      quantity: "1"
    }
  ];

  // var alreadyItems = [];

  var items = [];

  service.getaddItems = function () {
    return addItems ;
  }

  service.getAlreadyItems = function () {
    return items ;
  }

  service.buyItem = function (itemName, quantity) {
    
    var item = {
      name: itemName, 
      quantity: quantity
    };
       items.push(item);
 
  }
}

})();
