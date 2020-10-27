class List {
  listOutput(localStorageHandler) {
    for (let i = 0; i < localStorageHandler.getStoredArray().length; i++) {
      new ListItem(i);
    }
  }

  removeChildren(children) {
    for (let i = 0; i < children.length; i++) {
      console.log("hejsan");
      children[i].remove();
    }
  }
}
