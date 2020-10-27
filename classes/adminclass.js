class Admin {
  constructor() {
    this.dom = new adminDOM();
    this.localStorageHandler = new LocalStorageHandler();
    this.signIn(this.dom, this.localStorageHandler, this.listOutput);
    this.goToAddEventPage(this.dom);
    this.leaveAddEventPage(this.dom, this.localStorageHandler, this.listOutput);
    this.saveEvent(this.dom, this.localStorageHandler);
  }
  // when admin signs in the array of eventobjects are displayed as a list
  signIn(dom, localStorageHandler, listOutput) {
    dom.signInButton.addEventListener("click", function () {
      if (dom.usernameInput.value == "123" && dom.passwordInput.value == "456") {
        dom.loginPage.classList.add("hidden"); // if signin is a success the signin page will be hidden
        dom.eventListPage.classList.remove("hidden"); //the eventlistpage becomes visable

        if (Array.isArray(localStorageHandler.getStoredArray())) {
          //checks if there is an array stored in local storage
          listOutput(localStorageHandler); //and if there is it will be displayed to the admin
        }
      } else {
        alert("Wrong username och password!");
        dom.usernameInput.value = "";
        dom.passwordInput.value = "";
      }
    });
  }

  goToAddEventPage(dom) {
    dom.addEventButton.addEventListener("click", function () {
      dom.eventListPage.classList.add("hidden");
      dom.addEventPage.classList.remove("hidden");
    });
  }

  leaveAddEventPage(dom, localStorageHandler, listOutput) {
    dom.cancelButton.addEventListener("click", function () {
      for (let element of dom.eventArray) {
        element.value = "";
      }
      dom.addEventPage.classList.add("hidden");
      dom.eventListPage.classList.remove("hidden");

      if (Array.isArray(localStorageHandler.getStoredArray())) {
        listOutput(localStorageHandler);
      }
    });
  }

  saveEvent(dom, localStorageHandler) {
    dom.saveButton.addEventListener("click", function () {
      let storageArray = localStorageHandler.getStoredArray();
      localStorageHandler.removeStoredArray();

      if (!storageArray) {
        storageArray = [];
      }

      storageArray.push(
        new Event(
          dom.eventArray[0].checked, //front-page-check
          dom.eventArray[1].value, //event-category
          dom.eventArray[2].value, //company-name
          dom.eventArray[3].value, //start-time
          dom.eventArray[4].value, //end-time
          dom.eventArray[5].value, //start-date
          dom.eventArray[6].value, //end-date
          dom.eventArray[7].value, //location
          dom.eventArray[8].value, //participants
          dom.eventArray[9].value, //administrator
          dom.eventArray[10].value, //eventmanager
          dom.eventArray[11].value //info-text
        )
      );

      localStorageHandler.storeArray(storageArray);

      for (let i = 1; i < dom.eventArray.length; i++) {
        dom.eventArray[i].value = "";
      }
      alert("The Event is saved");
    });
  }

  listOutput(localStorageHandler) {
    for (let i = 0; i < localStorageHandler.getStoredArray().length; i++) {
      new ListItem(i);
    }
  }
}
