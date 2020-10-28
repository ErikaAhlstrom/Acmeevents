class List {
  listOutput(localStorageHandler) {
    for (let i = 0; i < localStorageHandler.getStoredArray().length; i++) {
      new ListItem(i);
    }
  }

  removeChildren() {
    let children = document.querySelectorAll(".child");
    for (let i = 0; i < children.length; i++) {
      children[i].parentNode.removeChild(children[i]);
    }
  }
}
