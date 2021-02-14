//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export const isPangram = (sentence) => {

  const lowerSentence = sentence.toLowerCase();
  for (let i = 0; i < alphabet.length; i++) {
    if (lowerSentence.includes(alphabet[i]) === false) {
      return false;
    }
  }
  return true;
};
