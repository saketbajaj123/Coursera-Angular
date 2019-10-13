(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);



ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var ctrl1 = this;
  ctrl1.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
  ctrl1.toBuyListEmpty = function(){

      if (ctrl1.toBuyItems.length == 0) {
        return true;
      } else {
        return false;
      }

    };

    ctrl1.removeItem = ShoppingListCheckOffService.removeItem

    console.log(ctrl1.toBuyItems)

  };


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var ctrl2 = this;
  ctrl2.boughtItems = ShoppingListCheckOffService.getBoughtItems();
  ctrl2.boughtListEmpty = function(){

      if (ctrl2.boughtItems.length == 0) {
        return true;
      } else {
        return false;
      }

    };



  };

function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var items = [ {
      name: 'Cookies',
      quantity: 10
    },{
      name: 'Chips',
      quantity: 5
    },{
      name: 'Chocolate Bars',
      quantity: 20
    },{
      name: 'Ice Cream',
      quantity: 2
    },{
      name: 'Milk',
      quantity: 1
    },{
      name: 'Easy Assignment',
      quantity: 1
    },{
      name: 'Give 100% marks',
      quantity: 1
    }
  ];

    var boughtItems = [];

    service.removeItem = function (itemIndex) {
      boughtItems.push(items[itemIndex]);
      items.splice(itemIndex, 1);
    };

    service.getToBuyItems = function () {
      return items;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };

  }





})();
