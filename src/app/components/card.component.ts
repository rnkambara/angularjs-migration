import * as angular from 'angular';

let CardComponent = {
  selector: "ccCard", // cc-card
  templateUrl: 'templates/card.html',
  bindings: {
    user: "="
  },
  controller: class CardController {
    private contacts;
    private isDeleting;
    private user;

    constructor(ContactService) {
      this.contacts = ContactService;
      this.isDeleting = false;
    }

    deleteUser() {
      this.isDeleting = true;
      this.contacts.removeContact(this.user).then(() => {
        this.isDeleting = false;
      })
    }
  }
};

angular
  .module("codecraft")
  .component(CardComponent.selector, CardComponent);


// angular.module("codecraft").directive("ccCard", ccCard);

// function ccCard() {
//   return {
//     restrict: "AE",
//     templateUrl: "templates/card.html",
//     scope: {
//       user: "="
//     },
//     controller: function($scope, ContactService) {
//       $scope.isDeleting = false;
//       $scope.deleteUser = function() {
//         $scope.isDeleting = true;
//         ContactService.removeContact($scope.user).then(function() {
//           $scope.isDeleting = false;
//         });
//       };
//     }
//   };
// }
