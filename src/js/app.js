'use strict';
// Declare app level module which depends on views, and components
angular.module('mine', [
  'ngRoute',
  'mine.controllers.users',
  'mine.controllers.detail',
  'mine.filters',
  'mine.services',
  'mine.directives'
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/users'});
}]);