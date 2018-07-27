'use strict';

/**
 * @ngdoc function
 * @name adoptApp.controller:AlberguesCtrl
 * @description
 * # AlberguesCtrl
 * Controller of the adoptApp
 */
angular.module('adoptApp')
  .controller('AlberguesCtrl', function ($scope,$location,$http ) {
    new WOW().init();
    $scope.toResultados = function () {
      $location.url("/resultados")
    }
    $http.get('https://easyadopt.herokuapp.com/api/albergues').then(function (response) {
      $scope.ListaAlbergues = response.data;
  },
  function () {
      alert("Error");
  });
  $scope.modalPerros = function(perros){
  console.log(perros);
  $("#myModal").modal("show");
  $scope.perritosql = perros;
  }

  });
