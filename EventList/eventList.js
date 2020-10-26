
let eventItems =[
    {
        category: "conference",
        date: "8/13-20",
        correctDate:new Date(2020,13,8),
        indexDate: "20200813",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aperiam eveniet enim dolores asperiores illum rem numquam optio deserunt provident consequatur,"
        
    },
    {
        category: "breakfast",
        date: "10/13-20",
        correctDate:new Date(2020,13,10),
        indexDate: "20201013",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aperiam eveniet enim dolores asperiores illum rem numquam optio deserunt provident consequatur,"
        
    },
    {
        category: "lunch",
        date: "10/26-20",
        correctDate:new Date(2020,26,10),
        indexDate: "20201026",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aperiam eveniet enim dolores asperiores illum rem numquam optio deserunt provident consequatur,"
        
    },
    {
        category: "conference",
        date: "4/13-20",
        correctDate:new Date(2020,13,4),
        indexDate: "20200413",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aperiam eveniet enim dolores asperiores illum rem numquam optio deserunt provident consequatur,"
        
    },
    {
        category: "breakfast",
        date: "9/2-20",
        correctDate:new Date(2020,9,2),
        indexDate: "20200902",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aperiam eveniet enim dolores asperiores illum rem numquam optio deserunt provident consequatur,"
        
    },
    {
        category: "lunch",
        date: "9/11-20",
        correctDate:new Date(2020,11,9),
        indexDate: "20200911",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aperiam eveniet enim dolores asperiores illum rem numquam optio deserunt provident consequatur,"
        
    },
    
]
listAllEvents(eventItems)

//Listar alla Event
function listFilteredEvents(events, filterCategory){
    let eventListGrid = document.getElementById("event-list-grid") 
    eventListGrid.innerHTML=""

    if(filterCategory != "All"){
        for(let current of events){
            if(current.category == filterCategory){
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
                eventListDateP.innerHTML= current.date
                eventListNameH4.innerHTML = current.category
            }
        }

    }
    else{
        listAllEvents(eventItems)
    }

}
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
        
            eventListDateP.innerHTML= current.date
            eventListNameH4.innerHTML = current.category
    }
}

let desc = false; 
let click = document.getElementById("filter-button").addEventListener("click", function(e){
    let array = sortArrayBy(eventItems, "indexDate", desc);
    let filterCategory = document.getElementById("category")

    listFilteredEvents(array, filterCategory.value)
    desc =!desc
})

function sortArrayBy(array, sort, desc){
    array.sort(function(a,b){
        if (a[sort] <b[sort]) return 1;
        if (a[sort] <b[sort]) return -1;
        return 0; 
    })
    if (desc) array.reverse();
    
    return array
}

function date(){
    for(let current of eventItems ){
        //let d = new Date(current.correctDate)
        //console.log(d)
    }
}

date()