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
