import * as angular from 'angular';

class PersonCreateController {
  public contacts = null;
  public person = {};
  private $state = null;

  constructor($state, ContactService) {
    this.$state = $state;
    this.contacts = ContactService;
    this.person = {};
  }

  save() {
    console.log("createContact");
    this.contacts.createContact(this.person).then(() => {
      this.$state.go("list");
    });
  }
}

let PersonCreateComponent = {
  selector: "personCreate",
  templateUrl: "templates/create.html",
  bindings: {},
  controller: PersonCreateController
};

angular
  .module("codecraft")
  .component(PersonCreateComponent.selector, PersonCreateComponent);