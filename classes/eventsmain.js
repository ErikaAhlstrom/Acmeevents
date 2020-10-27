class EventsMain {
  constructor() {
    this.localStorageHandler = new LocalStorageHandler();
    this.eventsArray = this.localStorageHandler.getStoredArray();
    this.frontpageEventsArray = [];
    this.findFrontpageEvents();
    this.printFrontpageEvents();
    //this.getEventList();
    console.log(this.localStorageHandler.getStoredArray());


    this.eventArrayHardCode = [
      {
        category: "Lunch",
        company: "Spotify",
        date: "13/11",
        frontpage: true
      },
      {
        category: "Breakfast",
        company: "ABB",
        date:"12/11",
        frontpage: false
      },
      {
        category: "Lunch",
        company: "2222",
        date: "13/11",
        frontpage: true
      },
      {
        category: "Lunch",
        company: "333",
        date: "13/11",
        frontpage: true
      },
      {
        category: "hopp",
        company: "Spotify",
        date: "13/11",
        frontpage: true
      },
      {
        category: "hej",
        company: "shooo",
        date: "13/11",
        frontpage: true
      },
      {
        category: "Lunch",
        company: "Spotify",
        date: "13/11",
        frontpage: true
      },
      {
        category: "Conference",
        company: "Spotify",
        date: "13/11",
        frontpage: true
      },
    ];
  }

  // Skapar array med alla event som ska ligga på framsidan. 
  // Tar bort första om mer än 6.
  findFrontpageEvents() {
    for(let i = 0; i < this.eventsArray.length; i++) {
      if(this.eventsArray[i].frontPage) {
        this.frontpageEventsArray.push(this.eventsArray[i])
      }

      if(this.frontpageEventsArray.length >= 7) {
        this.frontpageEventsArray.shift();
      }
    }
    console.log(this.frontpageEventsArray);
  }
  
  // skriver ut rätt event på första sidan. Just nu tar den värden från hårdkodade event.
  printFrontpageEvents() {
    let companyNameP = document.getElementsByClassName('card-company-name');
    let categoryP = document.getElementsByClassName('card-category');
    let dateP = document.getElementsByClassName('card-date');
    console.log(companyNameP[1].innerText);
    for(let i = 0; i <= 6; i++){
      companyNameP[i].innerText = this.eventsArray[i].companyName;
      categoryP[i].innerText = this.eventsArray[i].category;
      dateP[i].innerText = this.eventsArray[i].startDate;

    }
 
  }     

}








/*   createEvent(inputObject) {
    this.eventArray.push(inputObject);
  }
  store() {
    localStorage.removeItem("eventArray");
    localStorage.setItem(JSON.stringify(eventArray));
  } */
