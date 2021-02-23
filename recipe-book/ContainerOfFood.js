class ContainerOfFood {
  #contents;
  #volume;
  #expirationDate;
  #currentLocation;
  constructor(contents, volume, expirationDate, currentLocation) {
    this.#contents = contents;
    this.#volume = volume;
    this.#expirationDate = expirationDate;
    this.#currentLocation = currentLocation;
  }
  get contents() {
    return this.#contents;
  }
  get volume() {
    return this.#volume;
  }
  get expirationDate() {
    return this.#expirationDate;
  }
  get currentLocation() {
    return this.#currentLocation;
  }
  get logString() {
    return (
      "Container output: " +
      this.contents +
      this.volume +
      this.expirationDate +
      this.currentLocation
    );
  }
  set currentLocation(currentLocation) {
    this.#currentLocation = currentLocation;
  }
  set volume(newVolume) {
    this.#volume = newVolume;
  }
}

module.exports = ContainerOfFood;
