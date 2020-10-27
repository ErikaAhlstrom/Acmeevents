class EventsMain {
  constructor() {
    this.localStorageHandler = new LocalStorageHandler();
    this.eventsArray = this.localStorageHandler.getStoredArray();
    this.frontpageEventsArray = [];
    this.findFrontpageEvents();
    this.printFrontpageEvents();
    //this.getEventList();
    console.log(this.localStorageHandler.getStoredArray());
  }

  // Skapar array med alla event som ska ligga på framsidan.
  // Tar bort första om mer än 6.
  findFrontpageEvents() {
    for (let i = 0; i < this.eventsArray.length; i++) {
      if (this.eventsArray[i].frontPage) {
        this.frontpageEventsArray.push(this.eventsArray[i]);
      }

      if (this.frontpageEventsArray.length >= 7) {
        this.frontpageEventsArray.shift();
      }
    }
    console.log(this.frontpageEventsArray);
  }

  // skriver ut rätt event på första sidan. Just nu tar den värden från hårdkodade event.
  printFrontpageEvents() {
    let companyNameP = Array.from(document.getElementsByClassName("card-company-name"));
    let categoryP = Array.from(document.getElementsByClassName("card-category"));
    let dateP = Array.from(document.getElementsByClassName("card-date"));

    for (let i = 0; i <= 5; i++) {
      companyNameP[i].innerText = this.frontpageEventsArray[i].companyName;
      categoryP[i].innerText = this.frontpageEventsArray[i].category;
      dateP[i].innerText = this.frontpageEventsArray[i].startDate;
    }
  }
}
