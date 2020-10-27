// all element-lookup methods for the admin class is gathered here to make the admin class look a bit tidier

class adminDOM {
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
    this.cancelButton = document.getElementById("cancel-button");
    this.saveButton = document.getElementById("save-button");
    this.loginPage = document.getElementById("login-page");
    this.eventListPage = document.getElementById("event-list-page");
    this.addEventPage = document.getElementById("add-event-page");
    this.usernameInput = document.getElementById("username");
    this.passwordInput = document.getElementById("password");
    this.signInButton = document.getElementById("sign-in-button");
    this.addEventButton = document.getElementById("add-event-button");
  }
}
