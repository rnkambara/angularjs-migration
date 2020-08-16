import * as angular from 'angular';

angular
  .module("codecraft")
  .controller("SearchController", SearchController);

  function SearchController($scope, ContactService) {
    $scope.contacts = ContactService;

    $scope.loadMore = function() {
      $scope.contacts.loadMore();
    };
  }
