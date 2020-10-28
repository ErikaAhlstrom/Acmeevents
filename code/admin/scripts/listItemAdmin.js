class ListItem {
  constructor(index) {
    this.localStorageHandler = new LocalStorageHandler();
    this.list = new List();
    this.dom = new AdminDOM();
    this.eventTable = document.getElementById("event-table");

    this.aNewRow = document.createElement("tr");
    this.eventNumber = document.createElement("td");
    this.eventCategory = document.createElement("td");
    this.companyName = document.createElement("td");
    this.date = document.createElement("td");
    this.editTd = document.createElement("td");
    this.deleteTd = document.createElement("td");

    this.editButton = document.createElement("button");
    this.deleteButton = document.createElement("button");

    this.index = index;
    this.storedItem = this.localStorageHandler.getStoredArray()[this.index];

    this.eventNumber.textContent = index + 1;
    this.eventCategory.textContent = this.storedItem.category;
    this.companyName.textContent = this.storedItem.companyName;
    this.date.textContent = this.storedItem.startDate;

    this.editButton.textContent = "EDIT";
    this.editButton.classList.add("edit-button");
    this.deleteButton.textContent = "DELETE";
    this.deleteButton.classList.add("delete-button");

    this.editTd.appendChild(this.editButton);
    this.deleteTd.appendChild(this.deleteButton);

    this.aNewRow.appendChild(this.eventNumber);
    this.aNewRow.appendChild(this.eventCategory);
    this.aNewRow.appendChild(this.companyName);
    this.aNewRow.appendChild(this.date);
    this.aNewRow.appendChild(this.editTd);
    this.aNewRow.appendChild(this.deleteTd);

    this.aNewRow.classList.add("child");

    this.eventTable.appendChild(this.aNewRow);

    this.deleteItem(this.deleteButton, this.index, this.localStorageHandler, this.list);
    this.editItem(this.dom, this.editButton, this.storedItem);
    this.saveEditedItem(this.dom, this.storedItem, this.localStorageHandler, this.index, this.list);
  }

  deleteItem(deleteButton, index, localStorageHandler, list) {
    deleteButton.addEventListener("click", function () {
      if (confirm("Are you sure that you want to delete this event?")) {
        let storageArray = localStorageHandler.getStoredArray();
        localStorageHandler.removeStoredArray();
        list.removeChildren();
        storageArray.splice(index, 1);
        localStorageHandler.storeArray(storageArray);
        list.listOutput(localStorageHandler);
      }
    });
  }
  editItem(dom, editButton, storedItem) {
    editButton.addEventListener("click", function () {
      dom.eventListPage.classList.add("hidden");
      dom.editEventPage.classList.remove("hidden");

      let editInputsArray = dom.eventArrayEdit;

      editInputsArray[0].checked = storedItem.frontPage;
      editInputsArray[1].value = storedItem.category;
      editInputsArray[2].value = storedItem.companyName;
      editInputsArray[3].value = storedItem.startTime;
      editInputsArray[4].value = storedItem.endTime;
      editInputsArray[5].value = storedItem.startDate;
      editInputsArray[6].value = storedItem.endDate;
      editInputsArray[7].value = storedItem.location;
      editInputsArray[8].value = storedItem.participants;
      editInputsArray[9].value = storedItem.admin;
      editInputsArray[10].value = storedItem.eventManager;
      editInputsArray[11].value = storedItem.infoText;
    });
  }
  saveEditedItem(dom, storedItem, localStorageHandler, index, list) {
    dom.editSaveButton.addEventListener("click", function () {
      let editInputsArray = dom.eventArrayEdit;
      storedItem.frontPage = editInputsArray[0];
      storedItem.category = editInputsArray[1].value;
      storedItem.companyName = editInputsArray[2].value;
      storedItem.startTime = editInputsArray[3].value;
      storedItem.endTime = editInputsArray[4].value;
      storedItem.startDate = editInputsArray[5].value;
      storedItem.endDate = editInputsArray[6].value;
      storedItem.location = editInputsArray[7].value;
      storedItem.participants = editInputsArray[8].value;
      storedItem.admin = editInputsArray[9].value;
      storedItem.eventManager = editInputsArray[10].value;
      storedItem.infoText = editInputsArray[11].value;

      let arrayToChange = localStorageHandler.getStoredArray();
      localStorageHandler.removeStoredArray();
      arrayToChange.splice(index, 1, storedItem);
      localStorageHandler.storeArray(arrayToChange);
      alert("Changes saved");
      list.removeChildren();
      list.listOutput(localStorageHandler);

      dom.editEventPage.classList.add("hidden");
      dom.eventListPage.classList.remove("hidden");
    });
  }
}
