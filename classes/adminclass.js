class Admin {
  constructor() {
    this.html = new adminHtml();
    this.localStorageHandler = new LocalStorageHandler();
    this.signIn(this.html, this.localStorageHandler, this.listOutput);
    this.goToAddEventPage(this.html);
    this.leaveAddEventPage(this.html, this.localStorageHandler, this.listOutput);
    this.saveEvent(this.html, this.localStorageHandler);
  }

  signIn(html, localStorageHandler, listOutput) {
    html.signInButton.addEventListener("click", function () {
      if (html.usernameInput.value == "123" && html.passwordInput.value == "456") {
        html.loginPage.classList.add("hidden");
        html.eventListPage.classList.remove("hidden");

        let storageArray = localStorageHandler.getStoredArray();

        if (Array.isArray(storageArray)) {
          listOutput(storageArray, localStorageHandler);
        }
      } else {
        alert("Fel användarnamn eller lösenord!");
        html.usernameInput.value = "";
        html.passwordInput.value = "";
      }
    });
  }

  goToAddEventPage(html) {
    html.addEventButton.addEventListener("click", function () {
      html.eventListPage.classList.add("hidden");
      html.addEventPage.classList.remove("hidden");
    });
  }

  leaveAddEventPage(html, localStorageHandler, listOutput) {
    html.cancelButton.addEventListener("click", function () {
      for (let element of html.eventArray) {
        element.value = "";
      }
      html.addEventPage.classList.add("hidden");
      html.eventListPage.classList.remove("hidden");
      let storageArray = localStorageHandler.getStoredArray();
      if (storageArray) {
        listOutput(storageArray, localStorageHandler);
      }
    });
  }

  saveEvent(html, localStorageHandler) {
    html.saveButton.addEventListener("click", function () {
      let storageArray = localStorageHandler.getStoredArray();
      localStorageHandler.removeStoredArray();

      if (!storageArray) {
        storageArray = [];
      }

      storageArray.push(
        new Event(
          html.eventArray[0].checked, //front-page-check
          html.eventArray[1].value, //event-category
          html.eventArray[2].value, //company-name
          html.eventArray[3].value, //start-time
          html.eventArray[4].value, //end-time
          html.eventArray[5].value, //start-date
          html.eventArray[6].value, //end-date
          html.eventArray[7].value, //location
          html.eventArray[8].value, //participants
          html.eventArray[9].value, //administrator
          html.eventArray[10].value, //eventmanager
          html.eventArray[11].value //info-text
        )
      );

      localStorageHandler.storeArray(storageArray);
      alert("The Event is saved");
    });
  }

  listOutput(storageArray) {
    for (let i = 0; i < storageArray.length; i++) {
      new ListItem(i);
    }
  }
}
