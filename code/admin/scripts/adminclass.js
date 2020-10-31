/*This is the "main-class" for the admin page. 
It's quite extensive but don't be afraid
I will walk you through it, just read the comments 
and I'm sure you'll comprehend*/

//*The adminpage is in itself a SPA but I'm using the somewhat incorrect term page for each part of content since it's, in a way,  presented to the user as a page

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
    this.adminText();
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
  //this method is basically the function for the page with the list of events
  eventListPageEL(dom, localStorageHandler, list, deleteEvent) {
    dom.eventListPage.addEventListener("click", function (e) {
      //The power of the target function gives me the option of just using one event listener on this page*
      if (e.target === dom.addEventButton) {
        dom.eventListPage.classList.add("hidden");
        dom.addEventPage.classList.remove("hidden");
      }
      if (!Array.isArray(localStorageHandler.getStoredArray())) {
        //Here we are checking if there's an array with the right referencename and if there's not, we store an emtpy array in order for us to have something to push to
        localStorageHandler.storeArray([]);
      }
      for (let i = 0; i < localStorageHandler.getStoredArray().length; i++) {
        if (e.target === document.getElementById(`delete${i}`)) {
          // In order for the website to know what event to delete the delete is followed by an index in the id
          deleteEvent(localStorageHandler, list, i); //the index is then sent as a parameter when the deleteEvent method is called and now the method knows what event to delete
        }
        if (e.target === document.getElementById(`edit${i}`)) {
          // Here we see the same concept as the deletemethod above
          let storedItemValues = Object.values(localStorageHandler.getStoredArray()[i]); //getting the values from the event we want to edit

          dom.editSaveButton.classList.add(`edit-save-button${i}`);
          dom.editCancelButton.classList.add(`edit-cancel-button${i}`);
          dom.eventArrayEdit[0].checked = storedItemValues[0];
          for (let j = 1; j < storedItemValues.length; j++) {
            dom.eventArrayEdit[j].value = storedItemValues[j]; //all inputs gets the values from the event we want to edit
          }
          dom.eventListPage.classList.add("hidden");
          dom.editEventPage.classList.remove("hidden");
        }
      }
    });
  }

  addEventPageEL(dom, leaveAddEventPage, saveEvent, list, localStorageHandler) {
    dom.addEventPage.addEventListener("click", function (e) {
      //same thing here. I just learned how to master the target function and I love it.
      if (e.target === dom.cancelButton) {
        leaveAddEventPage(dom, list, localStorageHandler); //a small but oh so important method. It controlls the page where admin can add new events
      } else if (e.target === dom.saveButton) {
        saveEvent(localStorageHandler, dom);
      }
    });
  }
  adminText() {
    // this is an easteregg not to be seen by the public
    let body = document.getElementById("body");
    let adminText = document.getElementById("adminText");
    adminText.addEventListener("click", () => {
      if (!body.classList.contains("flip")) {
        body.classList.add("flip");
      } else {
        body.classList.remove("flip");
      }
    });
  }
  editEventPageEL(dom, localStorageHandler, list, leaveEditEventPage) {
    //this method is the part where the admin can edit the already existing events
    dom.editEventPage.addEventListener("click", function (e) {
      /*The forloop basically tells the eventlistener to listen to all the buttons and that the buttons will affect the right events */
      for (let i = 0; i < localStorageHandler.getStoredArray().length; i++) {
        if (e.target === document.getElementsByClassName(`edit-save-button${i}`)[0]) {
          // when savebutton is pressed
          let saveButton = document.getElementsByClassName(`edit-save-button${i}`)[0];
          let cancelButton = document.getElementsByClassName(`edit-cancel-button${i}`)[0];
          saveButton.classList.remove(`edit-save-button${i}`);
          cancelButton.classList.remove(`edit-cancel-button${i}`);
          let storageArray = localStorageHandler.getStoredArray(); //Gets the whole stored array
          localStorageHandler.removeStoredArray();
          let storedItem = storageArray[i]; //takes the right object to be edited
          //the 12 rows bellow takes the values from the inputs and assings it to the object
          //and if the value in the input isn't changed the value in the object will be unchanged
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

          storageArray.splice(i, 1, storedItem); //erasing the old object and inserts the new and, perhaps, edited object
          localStorageHandler.storeArray(storageArray);

          dom.editEventPage.classList.add("hidden");
          dom.eventListPage.classList.remove("hidden");
          list.removeChildren();
          list.listOutput();
        } else if (e.target === document.getElementsByClassName(`edit-cancel-button${i}`)[0]) {
          //if cancel button pressed
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
      //checkes if the assumed array actually is an array
      list.listOutput(storageArray); //outputs all stored events
    }
  }

  saveEvent(localStorageHandler, dom) {
    let storageArray = localStorageHandler.getStoredArray();
    localStorageHandler.removeStoredArray();

    if (!storageArray) {
      storageArray = [];
    }
    //creates an object and the attributes is given the values from the inputs
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
      //if users change thier minds
      document.getElementById(`row${i}`).remove(); //removes "most outer" element of the removed event
      let storageArray = localStorageHandler.getStoredArray(); //takes the stored events
      storageArray.splice(i, 1); //erases chosen event
      localStorageHandler.storeArray(storageArray); // stores the new array of events
      list.removeChildren();
      list.listOutput();
    }
  }

  leaveEditEventPage(dom, index) {
    // this method resets the inputs in the edit event page* so that it's clean and fresh untill next time it's going to be used
    for (let i = 1; i < dom.eventArrayEdit.length; i++) {
      dom.eventArrayEdit[i].value = "";
    }
    dom.eventArrayEdit[0].checked = false;
    dom.editEventPage.classList.add("hidden");
    dom.eventListPage.classList.remove("hidden");
    //eraseing some classes from the buttons so they doesn't target wrong elements later
    let saveButton = document.getElementsByClassName(`edit-save-button${index}`)[0];
    saveButton.classList.remove(`edit-save-button${index}`);
    let cancelButton = document.getElementsByClassName(`edit-cancel-button${index}`)[0];
    cancelButton.classList.remove(`edit-cancel-button${index}`);
  }
}
