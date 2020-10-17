class Event {
  constructor(start = "unknown", end = "unknown", category = "unknown", location = "unknown", eventOwner = "unknown", admin = "unknown", participants = "unknown") {
    this.start = start;
    this.end = end;
    this.category = category;
    this.location = location;
    this.eventOwner = eventOwner;
    this.admin = admin;
    this.participants = participants;
  }
}