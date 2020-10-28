
class EventListDetails {
    constructor() {        
        this.eventListItems = Array.from(document.getElementsByClassName("event-list-item"));  
        this.eventListItemsOpen;
        this.trackOpenCards();
   
    }

    trackOpenCards() {
        for (let i = 0; i < this.eventListItems.length; i++) {
            this.eventListItems[i].addEventListener("click", (e) => {
                if (this.eventListItems[i].classList.contains("open")) {
                    this.removeEventListDetails(i);
                    this.eventListItems[i].classList.remove("open");
  
                } else {
                    this.eventListItems[i].classList.add("open");
                    this.printEventDetails();
                }                
            })
        }       
    }

    printEventDetails() {

        for(let i = 0; i < this.eventListItems.length; i++) {

            if(this.eventListItems[i].classList.contains("open")) {
                // Ta bort current nodes
            let eventListName = document.getElementsByClassName("event-list-name");
            eventListName[i].firstChild.classList.add("hidden");

            //Skapa Element
            let localStorageEvents = new LocalStorageHandler();
            let eventsArray = localStorageEvents.getStoredArray();
            let categoryCompanyHeader = document.createElement("H3")
            let aboutHeader = document.createElement("H4")
            let aboutP = document.createElement("P")
            let locationP = document.createElement("P")
            let participantsP = document.createElement("P")
            let administratorP = document.createElement("P")
            let eventManagerP = document.createElement("P")
            let startsP = document.createElement("P")
            let endsP = document.createElement("P")
            let paragrphs = document.createElement("DIV")
            let aboutContainer = document.createElement("DIV");

            let imgDiv = document.createElement("DIV")
            let guestBookHeader = document.createElement("H4")
            let guestBookText = document.createElement("TEXTAREA")
            let sendButton = document.createElement("BUTTON")

            let mainContainer = document.createElement("DIV")
            let leftColumn = document.createElement("DIV")
            let rightColumn = document.createElement("DIV")

            //Ge Event info:
            categoryCompanyHeader.textContent = eventsArray[i].category + ", " + eventsArray[i].companyName;
            aboutHeader.textContent = "About: "
            aboutP.textContent = eventsArray[i].infoText;
            locationP.textContent = "Location: " + eventsArray[i].location;
            participantsP.textContent = "Participants: " + eventsArray[i].participants;
            administratorP.textContent = "Administrator: " + eventsArray[i].admin;
            eventManagerP.textContent = "Event Manager: " + eventsArray[i].eventManager;
            startsP.textContent = "Starts: " + eventsArray[i].startDate + ", " + eventsArray[i].startTime;
            endsP.textContent = "Ends: " + eventsArray[i].endDate + ", " + eventsArray[i].endTime;
            
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
            paragrphs.classList.add("detail-paragraphs")
            sendButton.classList.add("detail-send-button");
            guestBookHeader.classList.add("detail-guest-header");
            guestBookText.classList.add("detail-guest-text");

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
        for(let i = 0; i < eventListName.length; i++ ){
            eventListName[i].firstChild.classList.remove("hidden");
        }
    }
}

let eventListDetails = new EventListDetails();

