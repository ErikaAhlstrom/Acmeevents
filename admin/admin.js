document.addEventListener("DOMContentLoaded", function () {
  /*
  let eventCategory = document.getElementById("event-category");
  let companyName = document.getElementById("company-name");
  let startTime = document.getElementById("start-time");
  let endTime = document.getElementById("end-time");
  let startDate = document.getElementById("start-date");
  let endDate = document.getElementById("end-date");
  let infoText = document.getElementById("info-text");*/
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
  let storageArray;
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
  });
  saveButton.addEventListener("click", function () {
    storageArray = JSON.parse(localStorage.getItem("storageArray"));
    if (!Array.isArray(storageArray)) {
      storageArray = [];
    }

    localStorage.removeItem("storageArray");
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
    console.log(JSON.stringify(storageArray));

    localStorage.setItem("storageArray", JSON.stringify(storageArray));
  });
  localStorage.removeItem("storeage");
});
