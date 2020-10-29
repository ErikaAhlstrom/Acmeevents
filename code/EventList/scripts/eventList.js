

//console.log(new Date().toISOString().substring(0, 10))

class itemLister{
    constructor(){
        this.myArr = JSON.parse(localStorage.getItem("storageArray"))
        this.eventListGrid = document.getElementById("event-list-grid") 
        this.filterCategory = document.getElementById("category")
        this.filterEndDate = document.getElementById("endDate")
        this.filterCategory.value="All"
        this.filterStartDate = document.getElementById("startDate")
        this.filterStartDate.value = ""
        this.filterEndDate.value=""
        this.listEvents(this.myArr)
        this.globalArr = []

    }
    
    listEvents(events){
        this.eventListGrid.innerHTML=""

        for(let current of events){
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
                
            eventListDateP.innerHTML= current.startDate;
            eventListNameH4.innerHTML = current.category;
        }

    }

    filterElements(startDate,category){
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
            
        eventListDateP.innerHTML= startDate;
        eventListNameH4.innerHTML = category;
    };
    
    listallEvents(events){
        this.eventListGrid.innerHTML=""

        if(this.filterCategory.value == "All" && this.filterStartDate.value>= this.filterEndDate.value){
            for(let current of events){
                if(current.startDate>=this.filterStartDate.value){
                    this.filterElements(current.startDate,current.category)

                    this.globalArr.push(current)
                }
            }
        }
        else if(this.filterCategory.value == "All" && this.filterStartDate.value<=this.filterEndDate.value ){
            for(let current of events){
                if(current.startDate>=this.filterStartDate.value && current.startDate<=this.filterEndDate.value){
                    this.filterElements(current.startDate,current.category)
                    this.globalArr.push(current)

                }
            }
        }

        else if(this.filterCategory.value == "conference" && this.filterStartDate.value>= this.filterEndDate.value){
            for(let current of events){
                if(current.category == "conference" && current.startDate>=this.filterStartDate.value){
                    this.filterElements(current.startDate,current.category)
                    this.globalArr.push(current)

                }
            }
        }
        else if(this.filterCategory.value == "conference" && this.filterStartDate.value<=this.filterEndDate.value ){
            for(let current of events){
                if(current.category == "conference" && current.startDate>=this.filterStartDate.value && current.startDate<=this.filterEndDate.value){
                    this.filterElements(current.startDate,current.category)
                    this.globalArr.push(current)

                }
            }
        }
        else if(this.filterCategory.value == "breakfast" && this.filterStartDate.value>= this.filterEndDate.value){
            for(let current of events){
                if(current.category == "breakfast" && current.startDate>=this.filterStartDate.value){
                    this.filterElements(current.startDate,current.category)
                    this.globalArr.push(current)

                }
            }
        }
        else if(this.filterCategory.value == "breakfast" && this.filterStartDate.value<=this.filterEndDate.value ){
            for(let current of events){
                if(current.category == "breakfast" && current.startDate>=this.filterStartDate.value && current.startDate<=this.filterEndDate.value){
                    this.filterElements(current.startDate,current.category)
                    this.globalArr.push(current)

                }
            }
        }

        else if(this.filterCategory.value == "lunch" && this.filterStartDate.value>= this.filterEndDate.value){
            for(let current of events){
                if(current.category == "lunch" && current.startDate>=this.filterStartDate.value){
                    this.filterElements(current.startDate,current.category)
                    this.globalArr.push(current)

                }
            }
        }
        else if(this.filterCategory.value == "lunch" && this.filterStartDate.value<=this.filterEndDate.value ){
            for(let current of events){
                if(current.category == "lunch" && current.startDate>=this.filterStartDate.value && current.startDate<=this.filterEndDate.value){
                    this.filterElements(current.startDate,current.category)
                    this.globalArr.push(current)

                }
            }
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



let click = document.getElementById("filter-button").addEventListener("click", function(e){
    let array = itemObj.sortArrayBy(itemObj.myArr, "startDate");
    
    itemObj.globalArr = []

    itemObj.listallEvents(itemObj.myArr)
    console.log(itemObj.globalArr[0])

    localStorage.removeItem("kevinsarray")
    localStorage.setItem("kevinsarray", JSON.stringify(itemObj.globalArr))
    //itemObj.listFilteredEvents(array, filterCategory.value, startDate.value, endDate.value)
})


