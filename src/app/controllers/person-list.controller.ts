import * as angular from 'angular';

angular
  .module("codecraft")
  .controller("PersonListController", PersonListController);

  function PersonListController($scope, ContactService) {
    $scope.contacts = ContactService;
  }
