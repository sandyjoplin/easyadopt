'use strict';

/**
 * @ngdoc function
 * @name adoptApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adoptApp
 */
angular.module('adoptApp')
  .controller('MainCtrl', function ($scope,$location) {
    new WOW().init();
    $scope.toAlbergues = function () {
      $location.url("/albergues")
    }
  });
