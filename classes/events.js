class Events {
  constructor() {
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
    this.eventArray = []
    this.frontpageEventsArray = [];
    this.findFrontpageEvents();
    this.printFrontpageEvents();
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
    for(let i = 0; i < this.eventArrayHardCode.length; i++) {
      if(this.eventArrayHardCode[i].frontpage) {
        this.frontpageEventsArray.push(this.eventArrayHardCode[i])
      }

      if(this.frontpageEventsArray.length >= 7) {
        this.frontpageEventsArray.shift();
      }
    }
    console.log(this.frontpageEventsArray);
  }
  // skriver ut rätt event på första sidan. Just nu tar den värden från hårdkodade event.
  printFrontpageEvents() {
    let companyNameP = document.querySelectorAll('.card-company-name');
    let categoryP = document.querySelectorAll('.card-category');
    let dateP = document.querySelectorAll('.card-date');

    for(let i = 0; i <= 6; i++){
      companyNameP[i].textContent = this.eventArrayHardCode[i].company;
      categoryP[i].textContent = this.eventArrayHardCode[i].category;
      dateP[i].textContent = this.eventArrayHardCode[i].date;

    }
 
  }    

}


/* ============MAIN============== */



window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  let events = new Events()
});




