class ContainerOfFood {
  #type;
  #volume;
  #expirationDate;
  #location;
  constructor(type, volume, expirationDate, location) {
    this.#type = type;
    this.#volume = volume;
    this.#expirationDate = expirationDate;
    this.#location = location;
  }
  get type() {
    return this.#type;
  }
  get volume() {
    return this.#volume;
  }
  get expirationDate() {
    return this.#expirationDate;
  }
  get location() {
    return this.#location;
  }
  get displayString() {
    return (
      "\nContainer Type: " +
      this.type +
      "\nVolume: " +
      this.volume +
      "\nExpiration Date: " +
      this.expirationDate.toLocaleDateString("en-US") +
      "\nLocation: " +
      this.location
    );
  }
  set location(location) {
    this.#location = location;
  }
  set expirationDate(expirationDate) {
    this.#expirationDate = expirationDate;
  }
  set volume(newVolume) {
    this.#volume = newVolume;
  }
}

module.exports = ContainerOfFood;
