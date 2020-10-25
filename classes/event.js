class Event {
  constructor(
    category = "unknown",
    companyName = "unknown",
    startTime = "unknown",
    endTime = "unknown",
    startDate = "unknorn",
    endDate = "unknown",
    infoText = "unknown",
    frontPage = "unknown",
    location = "unknown",
    participants = "unknown"
  ) {
    this.category = category;
    this.companyName = companyName;
    this.startTime = startTime;
    this.endTime = endTime;
    this.startDate = startDate;
    this.endDate = endDate;
    this.infoText = infoText;
    this.frontPage = frontPage;
    this.location = location;
    this.participants = participants;
  }
}
