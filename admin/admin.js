document.addEventListener("DOMContentLoaded", function () {
  let myArray = [];
  myArray.push(
    document.getElementById("event-category"),
    document.getElementById("company-name"),
    document.getElementById("start-time"),
    document.getElementById("end-time"),
    document.getElementById("start-date"),
    document.getElementById("end-date"),
    document.getElementById("info-text"),
    document.getElementById("front-page-check")
  );
  let cancelButton = document.getElementById("cancel-button");
  let saveButton = document.getElementById("save-button");
  let loginPage = document.getElementById("login-page");
  let eventListPage = document.getElementById("event-list-page");
  let addEventPage = document.getElementById("add-event-page");
  let usernameInput = document.getElementById("username");
  let passwordInput = document.getElementById("password");
  let signInButton = document.getElementById("sign-in-button");
  let addEventButton = document.getElementById("add-event-button");

  signInButton.addEventListener("click", function () {
    if (usernameInput.value == "123" && passwordInput.value == "456") {
      loginPage.classList.add("hidden");
      eventListPage.classList.remove("hidden");

      let storageArray = getStoredArray();

      if (Array.isArray(storageArray)) {
        listOutput(storageArray);
      }
    } else {
      alert("Fel användarnamn eller lösenord!");
      usernameInput.value = "";
      passwordInput.value = "";
    }
  });

  addEventButton.addEventListener("click", function () {
    eventListPage.classList.add("hidden");
    addEventPage.classList.remove("hidden");
  });

  cancelButton.addEventListener("click", function () {
    for (let element of myArray) {
      element.value = "";
    }
    addEventPage.classList.add("hidden");
    eventListPage.classList.remove("hidden");
    let storageArray = getStoredArray();
    listOutput(storageArray);
  });

  saveButton.addEventListener("click", function () {
    let storageArray = getStoredArray();
    if (!storageArray) {
      storageArray = [];
    }
    /*
    tempName = new Event(
      myArray[0].value,
      myArray[1].value,
      myArray[2].value,
      myArray[3].value,
      myArray[4].value,
      myArray[5].value,
      myArray[6].value,
      myArray[7].checked
    );*/
    storageArray.push(
      new Event(
        myArray[0].value,
        myArray[1].value,
        myArray[2].value,
        myArray[3].value,
        myArray[4].value,
        myArray[5].value,
        myArray[6].value,
        myArray[7].checked
      )
    );
    //storageArray.push(tempName);

    storeArray(storageArray);
  });
});

function listOutput(storageArray) {
  let eventTable = document.getElementById("event-table");
  for (let i = 0; i < storageArray.length; i++) {
    let aNewRow = document.createElement("tr");
    let eventNumber = document.createElement("td");
    let eventCategory = document.createElement("td");
    let companyName = document.createElement("td");
    let date = document.createElement("td");
    let editTd = document.createElement("td");
    let editButton = document.createElement("button");
    let deleteTd = document.createElement("td");
    let deleteButton = document.createElement("button");

    eventNumber.textContent = i + 1;
    eventCategory.textContent = storageArray[i].category;
    companyName.textContent = storageArray[i].companyName;
    date.textContent = storageArray[i].startDate;
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

    eventTable.appendChild(aNewRow);

    deleteButton.addEventListener("click", function () {
      aNewRow.remove();
      storageArray.splice(i, 1);
      storeArray(storageArray);
      console.log(storageArray);
    });
  }
}

function getStoredArray() {
  let storageArray = JSON.parse(localStorage.getItem("storageArray"));
  localStorage.removeItem("storageArray");
  return storageArray;
}

function storeArray(storageArray) {
  localStorage.setItem("storageArray", JSON.stringify(storageArray));
}
