import * as angular from 'angular';

angular
  .module("codecraft")
  .directive("ccSpinner", ccSpinner);

function ccSpinner() {
    return {
        restrict: "AE",
        templateUrl: "templates/spinner.html",
        scope: {
          isLoading: "=",
          message: "@"
        }
      };
}