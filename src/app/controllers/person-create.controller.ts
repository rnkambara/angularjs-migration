import * as angular from 'angular';

angular
  .module("codecraft")
  .controller("PersonCreateController", PersonCreateController);

  function PersonCreateController ( 
    $scope,
    $state,
    ContactService
  ) {
    $scope.contacts = ContactService;
    $scope.person = {};

    $scope.save = function() {
      console.log("createContact");
      $scope.contacts.createContact($scope.person).then(function() {
        $state.go("list");
      });
    };
  }
