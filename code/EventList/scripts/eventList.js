let myArr = JSON.parse(localStorage.getItem("storageArray"))
let startDate = document.getElementById("startDate")
let endDate = document.getElementById("endDate")
let filterCategory = document.getElementById("category")
let desc = false; 
filterCategory.value="All"
startDate.value =""
endDate.value=""
let eventListGrid = document.getElementById("event-list-grid") 

class itemLister{
    
    listallEvents(events){
        eventListGrid.innerHTML=""
        
        for(let current of events){
            //console.log(current.startDate)
            if(current.startDate >= startDate.value && current.startDate < endDate.value){
                //console.log(current.startDate + " är inom rätt period")
                //console.log("----------------")
                this.listElements(current.startDate,current.category) 
            }

            else if(current.startDate < startDate.value && current.startDate > endDate.value){
                
                //console.log(current.startDate + " fel period")
                //console.log("----------------")
            }

            else if(current.startDate < endDate.value){
                //console.log("körs")
                this.listElements(current.startDate,current.category) 
            } 

            else {
                this.listElements(current.startDate,current.category)
            }
        }        
    }

    listElements(startDate,category){
        let eventListItem = document.createElement("div");
        let eventListDate = document.createElement("div");
        let eventListDateP = document.createElement("p");
        let eventListName = document.createElement("div");
        let eventListNameH4 = document.createElement("h4");
        let eventListNameP = document.createElement("p");
                
        eventListItem.setAttribute("class", "event-list-item");
        eventListDate.setAttribute("class", "event-list-date");
        eventListName.setAttribute("class", "event-list-name");
                
        eventListGrid.appendChild(eventListItem);
        eventListItem.appendChild(eventListDate);
        eventListDate.appendChild(eventListDateP);
        eventListItem.appendChild(eventListName);
        eventListName.appendChild(eventListNameH4);
        eventListName.appendChild(eventListNameP);
            
        eventListDateP.innerHTML= startDate;
        eventListNameH4.innerHTML = category;
    };
    
    listFilteredEvents(events, filterCategory, startDate, endDate){
        let eventListGrid = document.getElementById("event-list-grid") 
        eventListGrid.innerHTML=""
    
    
        if(filterCategory != "All"){  
            for(let current of events){
                if(current.category == filterCategory && startDate <= current.startDate && endDate >= current.startDate ){
                    this.listElements(current.startDate,current.category)
                }
            }
    
        }
        else{
            this.listallEvents(myArr)
        }
    
    }
    
    sortArrayBy(array, sort, desc){
        array.sort(function(a,b){
            if (a[sort] <b[sort]) return 1;
            if (a[sort] <b[sort]) return -1;
            return 0; 
        })
        //if (desc) array.reverse();
        
        return array.reverse()
    }
}

let itemObj = new itemLister()

itemObj.listallEvents(myArr)

let click = document.getElementById("filter-button").addEventListener("click", function(e){
    let array = itemObj.sortArrayBy(myArr, "startDate", desc);

    itemObj.listFilteredEvents(array, filterCategory.value, startDate.value, endDate.value)
    desc =!desc
})

