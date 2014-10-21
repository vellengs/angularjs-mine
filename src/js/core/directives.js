angular.module('mine.directives', [])
  .directive('appVersion', ['version', function (version) {
    return function (scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('buttons', function () {
    return {
      restrict: 'E',
      templateUrl: "partials/buttons.html",
      scope: {
        action: '=',
        search: '='
      },
      replace: true
    };
  });