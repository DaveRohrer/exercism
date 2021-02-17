//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(key) {
    if (!key) {
      this._key = this.getRandomKey(100);
    } else {
      this._key = key;
    }
  }

  encode(message) {
    let encodedMessage = '';
    for (let i = 0; i < message.length; i++) {
      encodedMessage = encodedMessage.concat(this.encodeCharacter(message, i));
    }
    return encodedMessage;
  }

  decode(message) {
    let decodedMessage = '';
    for (let i = 0; i < message.length; i++) {
      decodedMessage = decodedMessage.concat(this.decodeCharacter(message, i));
    }
    return decodedMessage;
  }

  get key() {
    return this._key;
  }

  encodeCharacter(string, index) {
    let charCode = ((string.charCodeAt(index) - 97 + (this._key.charCodeAt(index % this._key.length) - 97)));
    charCode = charCode % 26;
    return String.fromCharCode(charCode + 97);
  }

  decodeCharacter(string, index) {
    let charCode = (((string.charCodeAt(index) - 97) - (this._key.charCodeAt(index % this._key.length) - 97)));
    if (charCode < 0) {
      charCode += 26
    }
    return String.fromCharCode(charCode + 97);
  }

  getRandomKey(keyLength) {
    let randomKey = '';
    for (let i = 0; i < keyLength; i++) {
      randomKey = randomKey.concat(String.fromCharCode(randNum(26) + 97));
    }
    return randomKey;
  }
}

function randNum(max) {
  return Math.floor(Math.random() * Math.floor(max));
}