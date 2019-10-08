(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController)

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.textValue = '';

  $scope.get_values = function () {

    $scope.value = ($scope.textValue.split(',')).length;

    if ($scope.textValue == "") {
      $scope.message = "Please enter data first!"
      $scope.color = "Red"
    } else {
          if ($scope.value<= 3) {
            $scope.message = "Enjoy!"
            $scope.color = "Green"
          }
          else {
            $scope.message = "Too much!"
            $scope.color = "Green"
          };
        };
    return $scope.message;
  };


};


})();

