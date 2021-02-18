//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Hope you weren't lying about wanting to see more maps....
export class Cipher {
  #key
  constructor(key) {
    if (!key) {
      this.#key = this.getRandomKey(100);
    } else {
      this.#key = key;
    }
  }

  encode(message) {
    return [...message].map((char, index) => { return this.encodeCharacter(char, index); }, this).join('');
  }

  decode(message) {
    return [...message].map((char, index) => { return this.decodeCharacter(char, index); }, this).join('');
  }

  get key() {
    return this.#key;
  }

  // The ascii values of a-z are sequential and start at 97.
  // The mod operators are to loop around from the front to back/back to front

  encodeCharacter(char, index) {
    return String.fromCharCode(((char.charCodeAt() - 97 + this.#key.charCodeAt(index % this.#key.length) - 97) % 26) + 97);
  };

  decodeCharacter(char, index) {
    return String.fromCharCode((((char.charCodeAt() - 97) - (this.#key.charCodeAt(index % this.#key.length) - 97) + 26) % 26) + 97);
  }

  getRandomKey(keyLength) {
    return Array(keyLength).fill('').map((x) => { return String.fromCharCode(randNum(26) + 97); }).join('')
  };
}
function randNum(max) {
  return Math.floor(Math.random() * Math.floor(max));
}