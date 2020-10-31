class List {
  constructor() {
    this.localStorageHandler = new LocalStorageHandler();
    this.dom = new AdminDOM();
  }
  listOutput() {
    //method that creates all necesarry elements to present the events in a list

    for (let i = 0; i < this.localStorageHandler.getStoredArray().length; i++) {
      let aNewRow = document.createElement("tr");
      let eventNumber = document.createElement("td");
      let eventCategory = document.createElement("td");
      let companyName = document.createElement("td");
      let date = document.createElement("td");
      let editTd = document.createElement("td");
      let deleteTd = document.createElement("td");
      //here's where the button gets thier ids with the name followed by an index
      let editButton = document.createElement("button");
      editButton.setAttribute("id", `edit${i}`);
      let deleteButton = document.createElement("button");
      deleteButton.setAttribute("id", `delete${i}`);

      let storedItem = this.localStorageHandler.getStoredArray()[i]; //grabs the info from the current event
      // outputs the values from the event
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
      aNewRow.setAttribute("id", `row${i}`); // the most outer element ov the event is also given the name and an index in it's id

      document.getElementById("event-table").appendChild(aNewRow);
    }
  }

  removeChildren() {
    // late abortion? No, don't worry. It's just the most outer element that is deleted.
    let children = document.querySelectorAll(".child");
    for (let i = 0; i < children.length; i++) {
      children[i].parentNode.removeChild(children[i]);
    }
  }
}
