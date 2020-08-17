import * as angular from 'angular';

let PersonListComponent = {
  selector: "personList",
  templateUrl: "templates/list.html",
  bindings: {},
  controller: class PersonListController {
    public contacts = null;

    constructor(ContactService) {
      this.contacts = ContactService;
    }
  }
};

angular
  .module("codecraft")
  .component(PersonListComponent.selector, PersonListComponent);