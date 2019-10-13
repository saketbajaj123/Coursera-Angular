(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('DisplayItemsController', DisplayItemsController)
.service('RestaurantItemsService', RestaurantItemsService)
.directive('getMyTable',GetMyTable);


function GetMyTable(){
  var ddo = {
    templateUrl: 'myTable.html'
  }
return ddo;
};

DisplayItemsController.$inject = ['RestaurantItemsService'];
function DisplayItemsController(RestaurantItemsService){

  var ctrl = this;
  var allItems = [];
  var narrowedItems = [];
  var promise  = RestaurantItemsService.getRestaurantData();

  promise
    .then(function(response){
        ctrl.allItems = response.data['menu_items'];

    })

    .catch (function (errorResponse) {
        console.log(errorResponse);

    })


    ctrl.narrowItDown = function(searchTerm){
      if (searchTerm == 'undefined'){
        return;
      }
      else {
              ctrl.narrowedItems = []
              for (var i = 0; i < ctrl.allItems.length; i++) {
                var description = ctrl.allItems[i].description;
                if (description.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                  ctrl.narrowedItems.push(ctrl.allItems[i]);
              }
            }
            return ctrl.narrowedItems


            };
        }

    ctrl.itemQtyGTOne = function (){

      if (ctrl.narrowedItems === undefined){
        return;
      }
      else {
        if (ctrl.narrowedItems.length > 0){
          return true;
        }
        else {
          return false;
        }
      }
    };

  };


RestaurantItemsService.$inject = ['$http']
function RestaurantItemsService($http) {
    var service = this;

    service.getRestaurantData = function () {
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),

    });

    return response;
  };
  };




})();
