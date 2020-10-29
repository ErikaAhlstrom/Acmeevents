class Event {
  constructor(
    frontPage = "unknown",
    category,
    companyName = "unknown",
    startTime = "unknown",
    endTime = "unknown",
    startDate = "unknorn",
    endDate = "unknown",
    location = "unknown",
    participants = "unknown",
    admin = "unknown",
    eventManager = "unknown",
    infoText = "unknown"
  ) {
    this.frontPage = frontPage;
    this.category = category;
    this.companyName = companyName;
    this.startTime = startTime;
    this.endTime = endTime;
    this.startDate = startDate;
    this.endDate = endDate;
    this.location = location;
    this.participants = participants;
    this.admin = admin;
    this.eventManager = eventManager;
    this.infoText = infoText;
  }
}
