angular.module('mine.controllers.users', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'views/list.html',
    controller: 'usersCtrl'
  });
}]).controller('usersCtrl', [function () {

}]);