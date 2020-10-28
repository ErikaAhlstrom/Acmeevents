class Admin {
  constructor() {
    this.dom = new AdminDOM();
    this.localStorageHandler = new LocalStorageHandler();
    this.list = new List();
    this.signIn(this.dom, this.localStorageHandler, this.list);
    this.eventListPageEL(this.dom, this.localStorageHandler, this.list, this.deleteEvent);
    this.addEventPageEL(
      this.dom,
      this.leaveAddEventPage,
      this.saveEvent,
      this.list,
      this.localStorageHandler
    );
    this.leaveEditEventPage(this.dom, this.list);
  }
  // when admin signs in the array of eventobjects are displayed as a list
  signIn(dom, localStorageHandler, list) {
    dom.signInButton.addEventListener("click", function () {
      if (dom.usernameInput.value == "123" && dom.passwordInput.value == "456") {
        dom.loginPage.classList.add("hidden"); // if signin is a success the signin page will be hidden
        dom.eventListPage.classList.remove("hidden"); //the eventlistpage becomes visable

        if (Array.isArray(localStorageHandler.getStoredArray())) {
          //checks if there is an array stored in local storage
          list.listOutput(); //and if there is it will be displayed to the admin
        }
      } else {
        alert("Wrong username or password!"); //if signin failed
        dom.usernameInput.value = ""; //empties inputfields
        dom.passwordInput.value = "";
      }
    });
  }
  eventListPageEL(dom, localStorageHandler, list, deleteEvent) {
    dom.eventListPage.addEventListener("click", function (e) {
      if (e.target === dom.addEventButton) {
        dom.eventListPage.classList.add("hidden");
        dom.addEventPage.classList.remove("hidden");
      }

      for (let i = 0; i < localStorageHandler.getStoredArray().length; i++) {
        if (e.target === document.getElementById(`delete${i}`)) {
          deleteEvent(localStorageHandler, list, i);
        }
        if (e.target === document.getElementById(`edit${i}`)) {
          dom.eventListPage.classList.add("hidden");
          dom.editEventPage.classList.add("hidden");
        }
      }
    });
  }

  addEventPageEL(dom, leaveAddEventPage, saveEvent, list, localStorageHandler) {
    dom.addEventPage.addEventListener("click", function (e) {
      if (e.target === dom.cancelButton) {
        leaveAddEventPage(dom, list, localStorageHandler);
      } else if (e.target === dom.saveButton) {
        saveEvent(localStorageHandler, dom);
      }
    });
  }
  leaveAddEventPage(dom, list, localStorageHandler) {
    //when cancelbutton is clicked the user will be teleported to the list with all the events
    for (let element of dom.eventArray) {
      element.value = ""; //empties all inputfields
    }
    dom.addEventPage.classList.add("hidden");
    dom.eventListPage.classList.remove("hidden");
    list.removeChildren();
    let storageArray = localStorageHandler.getStoredArray();
    if (Array.isArray(storageArray)) {
      list.listOutput(storageArray); //outputs all stored events
    }
  }

  saveEvent(localStorageHandler, dom) {
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
      //excludes the first element wich is a checkbox and cant hold a empty string
      dom.eventArray[i].value = "";
    }
    alert("The Event has been saved");
  }

  deleteEvent(localStorageHandler, list, i) {
    if (confirm("Are you sure?")) {
      document.getElementById(`row${i}`).remove();
      let storageArray = localStorageHandler.getStoredArray();
      storageArray.splice(i, 1);
      localStorageHandler.storeArray(storageArray);
      list.removeChildren();
      list.listOutput();
    }
  }

  leaveEditEventPage(dom, list) {
    dom.editCancelButton.addEventListener("click", function () {
      for (let i = 1; i < dom.eventArrayEdit.length; i++) {
        dom.eventArrayEdit[i] = "";
      }
      dom.eventArrayEdit[0].checked = false;
      dom.editEventPage.classList.add("hidden");
      dom.eventListPage.classList.remove("hidden");
      list.removeChildren();
    });
  }
}
