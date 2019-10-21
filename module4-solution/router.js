(function () {
'use strict';

angular.module('Restaurant')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/home');

  // *** Set up UI states ***
  $stateProvider


  .state('home', {
    url: '/home',
    templateUrl: 'home.template.html'
  })


  .state('home.cate', {
    url: '/category',
    templateUrl: 'restaurant-category.html',
    controller: 'CategoryComponentController as category',
    resolve: {
      data: ['$http', function ($http) {
        var response = $http({
          method: "GET",
          url: ("https://davids-restaurant.herokuapp.com/categories.json")

        });

        return response;
      }]
    }

  })



  .state('home.cate.items', {
    url: '/{category}',
    templateUrl: 'category-item.html',
    controller: "ItemController as itemC",
    resolve: {
      dataCategory: ['$http','$stateParams',
      function ($http,$stateParams) {

        var response =
          $http({
          method: "GET",
          url: ("http://davids-restaurant.herokuapp.com/menu_items.json"),
          params : {
            category:$stateParams.category
          }
        })



        return response;

      }
    ]
    }

  });


}

})();