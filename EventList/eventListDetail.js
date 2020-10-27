
let eventListItems = document.querySelectorAll(".event-list-item");
let eventListGrid = document.getElementById("event-list-grid");
console.log(eventListGrid);

for( let item of eventListItems) {
    item.addEventListener("click", (e) => {
        console.log("clicked");
    })
}

function printEventDetails() {

} 
