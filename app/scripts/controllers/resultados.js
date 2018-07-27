'use strict';

/**
 * @ngdoc function
 * @name adoptApp.controller:ResultadosCtrl
 * @description
 * # ResultadosCtrl
 * Controller of the adoptApp
 */
angular.module('adoptApp')
  .controller('ResultadosCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    new WOW().init();
  });
