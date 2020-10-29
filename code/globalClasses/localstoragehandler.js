//the methods in this class is needed on multiple places of the code.
//they are basically taking, removing and sending stuff from tne local storage

class LocalStorageHandler {
  getStoredArray() {
    let storageArray = JSON.parse(localStorage.getItem("storageArray"));
    if (Array.isArray(storageArray)) {
      return storageArray;
    }
    return [];
  }
  removeStoredArray() {
    localStorage.removeItem("storageArray");
  }
  storeArray(storageArray) {
    localStorage.setItem("storageArray", JSON.stringify(storageArray));
  }
  storeKevinArray(kevinArray) {
    localStorage.setItem("kevinsarray", JSON.stringify(kevinArray));
  }
  getStoredKevinArray() {
    let storageArray = JSON.parse(localStorage.getItem("kevinsarray"));
    localStorage.removeItem("kevinsarray");
    return storageArray;
  }
}
