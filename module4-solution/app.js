(function () {
'use strict';

angular.module('Restaurant', ['ui.router'] )
//
//.controller('CategoryController', CategoryController)
.service('RestaurantItemsService', RestaurantItemsService)
.service('RestaurantCategoryItemsService', RestaurantCategoryItemsService)
.controller('ItemController', ItemController)
.controller('CategoryComponentController', CategoryComponentController)
/*
.component('categories',{
  templateUrl: 'restaurant-category.html',
  controller: CategoryComponentController,
  bindings: {
  categories_list : '<'
  }
})
.component('itemsComponent',{
  templateUrl: 'category-item.html',
  controller: ItemController,
  bindings: {
  category : '<'
  }
  })

*/


ItemController.$inject = ['dataCategory']
function ItemController(dataCategory){
  var itemC = this
  itemC.MenuItems = dataCategory.data.menu_items;

}




CategoryComponentController.$inject = ['data']

function CategoryComponentController(data){
  var category = this;
  category.allItems = data.data
}


RestaurantItemsService.$inject = ['$http']
function RestaurantItemsService($http) {
    var service = this;

    service.getRestaurantData = function () {
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")

    });

    return response;
  };
  };

  RestaurantCategoryItemsService.$inject = ['$http','$stateParams']
  function RestaurantCategoryItemsService($http,$stateParams) {
      var service = this;

      service.getRestaurantData = function () {
      var response = $http({
        method: "GET",
        url: ("http://davids-restaurant.herokuapp.com/menu_items.json"),
        params : {
          category:$stateParams.category
        }
      });

      return response;
    };
    };


})();