class ListItem {
  constructor(index) {
    this.localStorageHandler = new LocalStorageHandler();
    this.list = new List();
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

    this.deleteItem(
      this.deleteButton,
      this.index,
      this.localStorageHandler,
      this.list,
      this.eventTable
    );
  }

  deleteItem(deleteButton, index, localStorageHandler, list, eventTable) {
    deleteButton.addEventListener("click", function () {
      if (confirm("Are you sure that you want to delete this event?")) {
        let children = document.getElementsByClassName("child");
        let storageArray = localStorageHandler.getStoredArray();
        localStorageHandler.removeStoredArray();
        storageArray.splice(index, 1);
        localStorageHandler.storeArray(storageArray);
        console.log(children);
        list.listOutput();
      }
    });
  }
}
