class Events {
  constructor() {
    this.eventArray = [
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
        company: "Spotify",
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
        category: "Lunch",
        company: "Spotify",
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
    this.frontpageEventsArray = [];
    this.findFrontpageEvents();
  }

  createEvent(inputObject) {
    this.eventArray.push(inputObject);
  }
  store() {
    localStorage.removeItem("eventArray");
    localStorage.setItem(JSON.stringify(eventArray));
  }

  // Skapar array med alla event som ska ligga på framsidan. 
  // Tar bort första om mer än 6.
  findFrontpageEvents() {
    for(let i = 0; i < this.eventArray.length; i++) {
      if(this.eventArray[i].frontpage) {
        this.frontpageEventsArray.push(this.eventArray[i])
      }

      if(this.frontpageEventsArray.length >= 7) {
        this.frontpageEventsArray.shift();
      }
    }
    console.log(this.frontpageEventsArray);
  }

  printFrontpageEvents() {

  }

}


/* ============MAIN============== */

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  let events = new Events()
});




