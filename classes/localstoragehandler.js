//the methods in this class is needed on multiple places of the code.
//they are basically taking, removing and sending stuff from tne local storage

class LocalStorageHandler {
  getStoredArray() {
    let storageArray = JSON.parse(localStorage.getItem("storageArray"));
    return storageArray;
  }
  removeStoredArray() {
    localStorage.removeItem("storageArray");
  }
  storeArray(storageArray) {
    localStorage.setItem("storageArray", JSON.stringify(storageArray));
  }
}
