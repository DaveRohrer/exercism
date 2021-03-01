//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  #hours
  #minutes
  constructor(hours = 0, minutes = 0) {
    this.#setClock(hours, minutes);
  }

  toString() {
    const formattedHours = `0${this.#hours}`.slice(`0${this.#hours}`.length - 2, 3);
    const formattedMinutes = `0${this.#minutes}`.slice(`0${this.#minutes}`.length - 2, 3);
    return `${formattedHours}:${formattedMinutes}`;
  }

  plus(minutes) {
    this.#setClock(this.#hours, this.#minutes + minutes);
    return this;
  }

  minus(minutes) {
    this.#setClock(this.#hours, this.#minutes - minutes);
    return this;
  }

  equals(comparisonClock) {
    return this.toString() === comparisonClock.toString();
  }

  #setClock(hours, minutes) {
    this.#minutes = this.#setMinutes(minutes);
    this.#hours = this.#setHours(minutes, hours);
  }

  #setMinutes(minutes) {
    return (minutes >= 0 || !(minutes % 60)) ? minutes % 60 : 60 + (minutes % 60);
  }

  #setHours(minutes, hours) {
    const totalHours = (hours + Math.floor(minutes / 60)) % 24;
    return totalHours >= 0 ? totalHours : totalHours + 24;
  }
}

