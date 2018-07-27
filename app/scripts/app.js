'use strict';

/**
 * @ngdoc overview
 * @name adoptApp
 * @description
 * # adoptApp
 *
 * Main module of the application.
 */
angular
  .module('adoptApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider ,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/resultados', {
        templateUrl: 'views/resultados.html',
        controller: 'ResultadosCtrl',
        controllerAs: 'resultados'
      })
      .when('/resultados', {
        templateUrl: 'views/resultados.html',
        controller: 'ResultadosCtrl',
        controllerAs: 'resultados'
      })
      .when('/albergues', {
        templateUrl: 'views/albergues.html',
        controller: 'AlberguesCtrl',
        controllerAs: 'albergues'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
