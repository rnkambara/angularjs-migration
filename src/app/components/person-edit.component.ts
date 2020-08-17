import * as angular from 'angular';

let PersonEditComponent = {
    selector: "personEdit", //<person-edit>
    templateUrl: "templates/edit.html",
    bindings: {},
    controller: class PersonEditController {
        public contacts;
        public person = {};
        private $state;
        private $stateParams;

        constructor(ContactService, $stateParams, $state) {
            this.$stateParams = $stateParams;
            this.$state = $state;
            this.contacts = ContactService;
            this.person = this.contacts.getPerson(this.$stateParams.email);
        }

        save() {
            this.contacts.updateContact(this.person).then(() => {
                this.$state.go("list");
            });
        }

        remove() {
            this.contacts.removeContact(this.person).then(() => {
                this.$state.go("list");
            });
        }
    }
};

angular
  .module("codecraft")
  .component(PersonEditComponent.selector, PersonEditComponent);

// angular
//   .module("codecraft")
//   .controller("PersonEditController", PersonEditController);

//   function PersonEditController($scope, $stateParams, $state, ContactService
//   ) {
//     $scope.contacts = ContactService;
//     $scope.person = $scope.contacts.getPerson($stateParams.email);

//     $scope.save = function() {
//       $scope.contacts.updateContact($scope.person).then(function() {
//         $state.go("list");
//       });
//     };

//     $scope.remove = function() {
//       $scope.contacts.removeContact($scope.person).then(function() {
//         $state.go("list");
//       });
//     };
//   }