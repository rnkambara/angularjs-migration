import * as angular from 'angular';

class SpinnerController {

}


let SpinnerComponent = {
  selector: 'ccSpinner',
  templateUrl: "templates/spinner.html",
  bindings: {
    isLoading: "=",
    message: "@"
  },
  controller: SpinnerController
};



angular.module("codecraft")
  .component(SpinnerComponent.selector, SpinnerComponent);
