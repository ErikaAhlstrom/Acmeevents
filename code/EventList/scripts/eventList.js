//console.log(new Date().toISOString().substring(0, 10))

class itemLister {
  constructor() {
    this.myArr = JSON.parse(localStorage.getItem("storageArray"));
    this.eventListGrid = document.getElementById("event-list-grid");
    this.filterCategory = document.getElementById("category");
    this.filterEndDate = document.getElementById("endDate");
    this.filterCategory.value = "All";
    this.filterStartDate = document.getElementById("startDate");
    this.filterStartDate.value = "";
    this.filterEndDate.value = "";
    this.listEvents(this.myArr);
    this.globalArr = this.myArr;
    this.updateGlobalArr();

    //Erikas Klass
    this.eventListItems = Array.from(document.getElementsByClassName("event-list-item"));
    this.eventListItemsOpen;
    this.trackOpenCards();
  }

  updateGlobalArr() {
    let sortBtn = document.getElementById("filter-button");
    sortBtn.addEventListener("click", (e) => {
      //this.eventListItems = Array.from(document.getElementsByClassName("event-list-item"));
      this.trackOpenCards();
    });
  }

  //Erikas Metoder
  trackOpenCards() {
    this.eventListItems = Array.from(document.getElementsByClassName("event-list-item"));
    for (let i = 0; i < this.eventListItems.length; i++) {
      this.eventListItems[i].addEventListener("click", (e) => {
        if (this.eventListItems[i].classList.contains("open")) {
          this.removeEventListDetails(i);
          this.eventListItems[i].classList.remove("open");
        } else {
          this.eventListItems[i].classList.add("open");
          this.printEventDetails();
        }
      });
    }
  }

  printEventDetails() {
    for (let i = 0; i < this.eventListItems.length; i++) {
      if (this.eventListItems[i].classList.contains("open")) {
        //Ta bort current nodes
        let eventListName = document.getElementsByClassName("event-list-name");
        eventListName[i].firstChild.classList.add("hidden");

        //Skapa Element
        //let localStorageEvents = new LocalStorageHandler();
        //let eventsArray = localStorageEvents.getStoredArray();
        let categoryCompanyHeader = document.createElement("H3");
        let aboutHeader = document.createElement("H4");
        let aboutP = document.createElement("P");
        let locationP = document.createElement("P");
        let participantsP = document.createElement("P");
        let administratorP = document.createElement("P");
        let eventManagerP = document.createElement("P");
        let startsP = document.createElement("P");
        let endsP = document.createElement("P");
        let paragrphs = document.createElement("DIV");
        let aboutContainer = document.createElement("DIV");

        let imgDiv = document.createElement("DIV");
        let guestBookHeader = document.createElement("H4");
        let guestBookText = document.createElement("TEXTAREA");
        let sendButton = document.createElement("BUTTON");

        let mainContainer = document.createElement("DIV");
        let leftColumn = document.createElement("DIV");
        let rightColumn = document.createElement("DIV");

        //Ge Event info:
        categoryCompanyHeader.textContent =
          this.globalArr[i].category + ", " + this.globalArr[i].companyName;
        aboutHeader.textContent = "About: ";
        aboutP.textContent = this.globalArr[i].infoText;
        locationP.textContent = "Location: " + this.globalArr[i].location;
        participantsP.textContent = "Participants: " + this.globalArr[i].participants;
        administratorP.textContent = "Administrator: " + this.globalArr[i].admin;
        eventManagerP.textContent = "Event Manager: " + this.globalArr[i].eventManager;
        startsP.textContent =
          "Starts: " + this.globalArr[i].startDate + ", " + this.globalArr[i].startTime;
        endsP.textContent = "Ends: " + this.globalArr[i].endDate + ", " + this.globalArr[i].endTime;

        sendButton.innerHTML = "SEND";
        guestBookHeader.innerText = "Guest Book";

        //Ge Classnames
        mainContainer.classList.add("list-item-open");
        leftColumn.classList.add("open-left-column");
        rightColumn.classList.add("open-right-column");
        categoryCompanyHeader.classList.add("open-main-header");
        aboutHeader.classList.add("open-about-header");
        aboutContainer.classList.add("open-about");
        imgDiv.classList.add("detail-img");
        paragrphs.classList.add("detail-paragraphs");
        sendButton.classList.add("detail-send-button");
        guestBookHeader.classList.add("detail-guest-header");
        guestBookText.classList.add("detail-guest-text");

        //Sätt rätt bild
        if (this.globalArr[i].category == "lunch") {
          imgDiv.classList.add("lunch-img");
        } else if (this.globalArr[i].category == "conference") {
          imgDiv.classList.add("conf-img");
        } else if (this.globalArr[i].category == "breakfast") {
          imgDiv.classList.add("break-img");
        } else {
          imgDiv.classList.add("meet-img");
        }

        //Append Element
        paragrphs.appendChild(startsP);
        paragrphs.appendChild(endsP);
        paragrphs.appendChild(eventManagerP);
        paragrphs.appendChild(administratorP);
        paragrphs.appendChild(participantsP);
        paragrphs.appendChild(locationP);

        aboutContainer.appendChild(aboutP);

        leftColumn.appendChild(categoryCompanyHeader);
        leftColumn.appendChild(aboutHeader);
        leftColumn.appendChild(aboutContainer);
        leftColumn.appendChild(paragrphs);

        rightColumn.appendChild(imgDiv);
        rightColumn.appendChild(guestBookHeader);
        rightColumn.appendChild(guestBookText);
        rightColumn.appendChild(sendButton);

        mainContainer.appendChild(leftColumn);
        mainContainer.appendChild(rightColumn);

        this.eventListItems[i].childNodes[1].appendChild(mainContainer);
      }
    }
  }

  removeEventListDetails(i) {
    this.eventListItems[i].childNodes[1].childNodes[2].remove();
    let eventListName = document.getElementsByClassName("event-list-name");
    for (let i = 0; i < eventListName.length; i++) {
      eventListName[i].firstChild.classList.remove("hidden");
    }
  }

  listFilteredEvents(events, filterCategory) {
    let eventListGrid = document.getElementById("event-list-grid");
    eventListGrid.innerHTML = "";

    if (filterCategory != "All") {
      for (let current of events) {
        if (current.category == filterCategory) {
          this.filterElements(current.startDate, current.category, current.companyName);

          console.log("hej");
        }
      }
    } else {
      this.listallEvents(this.myArr);
    }
  }

  listEvents(events) {
    this.eventListGrid.innerHTML = "";

    for (let current of events) {
      let eventListItem = document.createElement("div");
      let eventListDate = document.createElement("div");
      let eventListDateP = document.createElement("p");
      let eventListName = document.createElement("div");
      let eventListNameH4 = document.createElement("h4");
      let eventListNameP = document.createElement("p");

      eventListItem.setAttribute("class", "event-list-item");
      eventListDate.setAttribute("class", "event-list-date");
      eventListName.setAttribute("class", "event-list-name");

      this.eventListGrid.appendChild(eventListItem);
      eventListItem.appendChild(eventListDate);
      eventListDate.appendChild(eventListDateP);
      eventListItem.appendChild(eventListName);
      eventListName.appendChild(eventListNameH4);
      eventListName.appendChild(eventListNameP);

      eventListDateP.innerHTML = current.startDate;
      eventListNameH4.innerHTML = current.category + ", " + current.companyName;
    }
  }

  filterElements(startDate, category, companyName) {
    let eventListItem = document.createElement("div");
    let eventListDate = document.createElement("div");
    let eventListDateP = document.createElement("p");
    let eventListName = document.createElement("div");
    let eventListNameH4 = document.createElement("h4");
    let eventListNameP = document.createElement("p");

    eventListItem.setAttribute("class", "event-list-item");
    eventListDate.setAttribute("class", "event-list-date");
    eventListName.setAttribute("class", "event-list-name");

    this.eventListGrid.appendChild(eventListItem);
    eventListItem.appendChild(eventListDate);
    eventListDate.appendChild(eventListDateP);
    eventListItem.appendChild(eventListName);
    eventListName.appendChild(eventListNameH4);
    eventListName.appendChild(eventListNameP);

    eventListDateP.innerHTML = startDate;
    eventListNameH4.innerHTML = category + ", " + companyName;
  }
  //test kommentar
  listallEvents(events) {
    this.eventListGrid.innerHTML = "";
    if (
      this.filterCategory.value == "All" &&
      this.filterStartDate.value >= this.filterEndDate.value
    ) {
      for (let current of events) {
        if (current.startDate >= this.filterStartDate.value) {
          this.filterElements(current.startDate, current.category, current.companyName);

          this.globalArr.push(current);
        }
      }
    } else if (
      this.filterCategory.value == "All" &&
      this.filterStartDate.value <= this.filterEndDate.value
    ) {
      for (let current of events) {
        if (
          current.startDate >= this.filterStartDate.value &&
          current.startDate <= this.filterEndDate.value
        ) {
          this.filterElements(current.startDate, current.category, current.companyName);
          this.globalArr.push(current);
        }
      }
    } else if (
      this.filterCategory.value == "conference" &&
      this.filterStartDate.value >= this.filterEndDate.value
    ) {
      for (let current of events) {
        if (current.category == "conference" && current.startDate >= this.filterStartDate.value) {
          console.log(current.category);
          this.filterElements(current.startDate, current.category, current.companyName);
        }
      }
    } else if (
      this.filterCategory.value == "conference" &&
      this.filterStartDate.value <= this.filterEndDate.value
    ) {
      for (let current of events) {
        if (
          current.category == "conference" &&
          current.startDate >= this.filterStartDate.value &&
          current.startDate <= this.filterEndDate.value
        ) {
          this.filterElements(current.startDate, current.category, current.companyName);
          this.globalArr.push(current);
        }
      }
    } else if (
      this.filterCategory.value == "breakfast" &&
      this.filterStartDate.value >= this.filterEndDate.value
    ) {
      for (let current of events) {
        if (current.category == "breakfast" && current.startDate >= this.filterStartDate.value) {
          this.filterElements(current.startDate, current.category, current.companyName);
          this.globalArr.push(current);
        }
      }
    } else if (
      this.filterCategory.value == "breakfast" &&
      this.filterStartDate.value <= this.filterEndDate.value
    ) {
      for (let current of events) {
        if (
          current.category == "breakfast" &&
          current.startDate >= this.filterStartDate.value &&
          current.startDate <= this.filterEndDate.value
        ) {
          this.filterElements(current.startDate, current.category, current.companyName);
          this.globalArr.push(current);
        }
      }
    } else if (
      this.filterCategory.value == "lunch" &&
      this.filterStartDate.value >= this.filterEndDate.value
    ) {
      for (let current of events) {
        if (current.category == "lunch" && current.startDate >= this.filterStartDate.value) {
          this.filterElements(current.startDate, current.category, current.companyName);
          this.globalArr.push(current);
        }
      }
    } else if (
      this.filterCategory.value == "lunch" &&
      this.filterStartDate.value <= this.filterEndDate.value
    ) {
      for (let current of events) {
        if (
          current.category == "lunch" &&
          current.startDate >= this.filterStartDate.value &&
          current.startDate <= this.filterEndDate.value
        ) {
          this.filterElements(current.startDate, current.category, current.companyName);
          this.globalArr.push(current);
        }
      }
    }
  }

  sortArrayBy(array, sort) {
    array.sort(function (a, b) {
      if (a[sort] < b[sort]) return -1;
      if (a[sort] > b[sort]) return 1;
      return 0;
    });
  }
}

let itemObj = new itemLister();

document.getElementById("filter-button").addEventListener("click", function (e) {
  itemObj.sortArrayBy(itemObj.myArr, "startDate");

  itemObj.globalArr = [];
  itemObj.listallEvents(itemObj.myArr);

  localStorage.removeItem("kevinsarray");
  localStorage.setItem("kevinsarray", JSON.stringify(itemObj.globalArr));
  itemObj.listFilteredEvents(
    itemObj.myArr,
    itemObj.filterCategory.value,
    startDate.value,
    endDate.value
  );
});
