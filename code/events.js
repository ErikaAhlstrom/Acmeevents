class Events {
  constructor() {
    this.eventArray = [];
  }
  createEvent(inputObject) {
    this.eventArray.push(inputObject);
  }
  store() {
    localStorage.removeItem("eventArray");
    localStorage.setItem(JSON.stringify(eventArray));
  }
}
/*
submit.addEventlistener("click", function(e) {
  createEvent(new Event());
});
*/
