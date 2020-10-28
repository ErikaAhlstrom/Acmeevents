// all element-lookup methods for the admin class is gathered here to make the admin class look a bit tidier

class AdminDOM {
  constructor() {
    this.eventArray = [
      document.getElementById("front-page-check"),
      document.getElementById("event-category"),
      document.getElementById("company-name"),
      document.getElementById("start-time"),
      document.getElementById("end-time"),
      document.getElementById("start-date"),
      document.getElementById("end-date"),
      document.getElementById("location"),
      document.getElementById("participants"),
      document.getElementById("administrator"),
      document.getElementById("eventmanager"),
      document.getElementById("info-text"),
    ];
    this.eventArrayEdit = [
      document.getElementById("edit-front-page-check"),
      document.getElementById("edit-event-category"),
      document.getElementById("edit-company-name"),
      document.getElementById("edit-start-time"),
      document.getElementById("edit-end-time"),
      document.getElementById("edit-start-date"),
      document.getElementById("edit-end-date"),
      document.getElementById("edit-location"),
      document.getElementById("edit-participants"),
      document.getElementById("edit-administrator"),
      document.getElementById("edit-eventmanager"),
      document.getElementById("edit-info-text"),
    ];

    this.cancelButton = document.getElementById("cancel-button");
    this.saveButton = document.getElementById("save-button");
    this.loginPage = document.getElementById("login-page");
    this.eventListPage = document.getElementById("event-list-page");
    this.addEventPage = document.getElementById("add-event-page");
    this.editEventPage = document.getElementById("edit-event");
    this.usernameInput = document.getElementById("username");
    this.passwordInput = document.getElementById("password");
    this.signInButton = document.getElementById("sign-in-button");
    this.addEventButton = document.getElementById("add-event-button");
    this.editCancelButton = document.getElementById("edit-cancel-button");
    this.editSaveButton = document.getElementById("edit-save-button");
  }
}
