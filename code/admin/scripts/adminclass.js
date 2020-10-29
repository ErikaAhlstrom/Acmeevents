class Admin {
  constructor() {
    this.dom = new AdminDOM();
    this.localStorageHandler = new LocalStorageHandler();
    this.localStorageHandler.storeArray([]);
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
    this.editEventPageEL(this.dom, this.localStorageHandler, this.list, this.leaveEditEventPage);
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
      //if(!localStorageHandler.getStoredArray())
      for (let i = 0; i < localStorageHandler.getStoredArray().length; i++) {
        if (e.target === document.getElementById(`delete${i}`)) {
          deleteEvent(localStorageHandler, list, i);
        }
        if (e.target === document.getElementById(`edit${i}`)) {
          let storedItemValues = Object.values(localStorageHandler.getStoredArray()[i]);

          dom.editSaveButton.classList.add(`edit-save-button${i}`);
          dom.editCancelButton.classList.add(`edit-cancel-button${i}`);
          dom.eventArrayEdit[0].checked = storedItemValues[0];
          for (let j = 1; j < storedItemValues.length; j++) {
            dom.eventArrayEdit[j].value = storedItemValues[j];
          }
          dom.eventListPage.classList.add("hidden");
          dom.editEventPage.classList.remove("hidden");
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

  editEventPageEL(dom, localStorageHandler, list, leaveEditEventPage) {
    dom.editEventPage.addEventListener("click", function (e) {
      for (let i = 0; i < localStorageHandler.getStoredArray().length; i++) {
        if (e.target === document.getElementsByClassName(`edit-save-button${i}`)[0]) {
          let saveButton = document.getElementsByClassName(`edit-save-button${i}`)[0];
          let cancelButton = document.getElementsByClassName(`edit-cancel-button${i}`)[0];
          saveButton.classList.remove(`edit-save-button${i}`);
          cancelButton.classList.remove(`edit-cancel-button${i}`);
          let storageArray = localStorageHandler.getStoredArray();
          localStorageHandler.removeStoredArray();
          let storedItem = storageArray[i];
          storedItem.frontPage = dom.eventArrayEdit[0].checked;
          storedItem.category = dom.eventArrayEdit[1].value;
          storedItem.companyName = dom.eventArrayEdit[2].value;
          storedItem.startTime = dom.eventArrayEdit[3].value;
          storedItem.endTime = dom.eventArrayEdit[4].value;
          storedItem.startDate = dom.eventArrayEdit[5].value;
          storedItem.endDate = dom.eventArrayEdit[6].value;
          storedItem.location = dom.eventArrayEdit[7].value;
          storedItem.participants = dom.eventArrayEdit[8].value;
          storedItem.admin = dom.eventArrayEdit[9].value;
          storedItem.eventManager = dom.eventArrayEdit[10].value;
          storedItem.infoText = dom.eventArrayEdit[11].value;

          storageArray.splice(i, 1, storedItem);
          localStorageHandler.storeArray(storageArray);

          dom.editEventPage.classList.add("hidden");
          dom.eventListPage.classList.remove("hidden");
          list.removeChildren();
          list.listOutput();
        } else if (e.target === document.getElementsByClassName(`edit-cancel-button${i}`)[0]) {
          leaveEditEventPage(dom, i, list);
        }
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
      //excludes the first element wich is a checkbox and cant hold an empty string
      dom.eventArray[i].value = "";
    }
    dom.eventArray[0].checked = false;
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

  leaveEditEventPage(dom, index, list) {
    for (let i = 1; i < dom.eventArrayEdit.length; i++) {
      dom.eventArrayEdit[i].value = "";
    }
    dom.eventArrayEdit[0].checked = false;
    dom.editEventPage.classList.add("hidden");
    dom.eventListPage.classList.remove("hidden");
    let saveButton = document.getElementsByClassName(`edit-save-button${index}`)[0];
    saveButton.classList.remove(`edit-save-button${index}`);
    let cancelButton = document.getElementsByClassName(`edit-cancel-button${index}`)[0];
    cancelButton.classList.remove(`edit-cancel-button${index}`);
  }
}
