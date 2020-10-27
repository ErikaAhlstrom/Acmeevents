class List {
  listOutput(localStorageHandler) {
    for (let i = 0; i < localStorageHandler.getStoredArray().length; i++) {
      new ListItem(i);
    }
  }
  removeAllChildren(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
}
