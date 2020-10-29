class List {
  constructor() {
    this.localStorageHandler = new LocalStorageHandler();
    this.dom = new AdminDOM();
  }
  listOutput() {
    for (let i = 0; i < this.localStorageHandler.getStoredArray().length; i++) {
      let aNewRow = document.createElement("tr");
      let eventNumber = document.createElement("td");
      let eventCategory = document.createElement("td");
      let companyName = document.createElement("td");
      let date = document.createElement("td");
      let editTd = document.createElement("td");
      let deleteTd = document.createElement("td");

      let editButton = document.createElement("button");
      editButton.setAttribute("id", `edit${i}`);
      let deleteButton = document.createElement("button");
      deleteButton.setAttribute("id", `delete${i}`);

      let storedItem = this.localStorageHandler.getStoredArray()[i];

      eventNumber.textContent = i + 1;
      eventCategory.textContent = storedItem.category;
      companyName.textContent = storedItem.companyName;
      date.textContent = storedItem.startDate;

      editButton.textContent = "EDIT";
      editButton.classList.add("edit-button");
      deleteButton.textContent = "DELETE";
      deleteButton.classList.add("delete-button");

      editTd.appendChild(editButton);
      deleteTd.appendChild(deleteButton);

      aNewRow.appendChild(eventNumber);
      aNewRow.appendChild(eventCategory);
      aNewRow.appendChild(companyName);
      aNewRow.appendChild(date);
      aNewRow.appendChild(editTd);
      aNewRow.appendChild(deleteTd);

      aNewRow.classList.add("child");
      aNewRow.setAttribute("id", `row${i}`);

      document.getElementById("event-table").appendChild(aNewRow);
    }
  }

  removeChildren() {
    let children = document.querySelectorAll(".child");
    for (let i = 0; i < children.length; i++) {
      children[i].parentNode.removeChild(children[i]);
    }
  }
}
