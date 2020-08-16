import * as angular from 'angular';

angular.module("codecraft").filter("defaultImage", defaultImage);

function defaultImage() {
  return function(input, param) {
    if (!param) {
      param = "/img/avatar.png";
    }
    if (!input) {
      return param;
    }
    return input;
  };
}
