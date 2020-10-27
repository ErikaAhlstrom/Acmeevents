let myArr = JSON.parse(localStorage.getItem("storageArray"))

listAllEvents(myArr)

//Listar filtrerade event alla Event
function listFilteredEvents(events, filterCategory, startDate, endDate){
    let eventListGrid = document.getElementById("event-list-grid") 
    eventListGrid.innerHTML=""


    if(filterCategory != "All"){
        
        for(let current of events){
            if(current.category == filterCategory && startDate <= current.startDate && endDate >= current.startDate ){
                let eventListItem = document.createElement("div")
                let eventListDate = document.createElement("div")
                let eventListDateP = document.createElement("p")
                let eventListName = document.createElement("div")
                let eventListNameH4 = document.createElement("h4")
                let eventListNameP = document.createElement("p")
                
                eventListItem.setAttribute("class", "event-list-item")
                eventListDate.setAttribute("class", "event-list-date")
                eventListName.setAttribute("class", "event-list-name")
                
                eventListGrid.appendChild(eventListItem)
                eventListItem.appendChild(eventListDate)
                eventListDate.appendChild(eventListDateP)
                eventListItem.appendChild(eventListName)
                eventListName.appendChild(eventListNameH4)
                eventListName.appendChild(eventListNameP)
                eventListDateP.innerHTML= current.startDate
                eventListNameH4.innerHTML = current.category
            }
        }

    }
    else{
        listAllEvents(myArr)
    }

}

//Listar alla event
function listAllEvents(events){
    
    let eventListGrid = document.getElementById("event-list-grid") 
    eventListGrid.innerHTML=""
    
    
    for(let current of events){
            let eventListItem = document.createElement("div")
            let eventListDate = document.createElement("div")
            let eventListDateP = document.createElement("p")
            let eventListName = document.createElement("div")
            let eventListNameH4 = document.createElement("h4")
            let eventListNameP = document.createElement("p")
            
            eventListItem.setAttribute("class", "event-list-item")
            eventListDate.setAttribute("class", "event-list-date")
            eventListName.setAttribute("class", "event-list-name")
            
            eventListGrid.appendChild(eventListItem)
            eventListItem.appendChild(eventListDate)
            eventListDate.appendChild(eventListDateP)
            eventListItem.appendChild(eventListName)
            eventListName.appendChild(eventListNameH4)
            eventListName.appendChild(eventListNameP)
        
            eventListDateP.innerHTML= current.startDate
            eventListNameH4.innerHTML = current.category
    }
}

let desc = false; 
let click = document.getElementById("filter-button").addEventListener("click", function(e){
    let array = sortArrayBy(myArr, "startDate", desc);
    let filterCategory = document.getElementById("category")
    let startDate = document.getElementById("startDate")
    let endDate = document.getElementById("endDate")

    listFilteredEvents(array, filterCategory.value, startDate.value, endDate.value)
    //desc =!desc
})

function sortArrayBy(array, sort, desc){
    array.sort(function(a,b){
        if (a[sort] <b[sort]) return 1;
        if (a[sort] <b[sort]) return -1;
        return 0; 
    })
    //if (desc) array.reverse();
    
    return array.reverse()
}

