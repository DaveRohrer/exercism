//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// feels like the stupidest program ever. may be a better way to do it but i couldnt
// really even take it seriously. sorry for the wasted time.
export const convert = (number) => {
  let sound = '';
  if (number % 3 === 0) {
    sound += 'Pling';
  }
  if (number % 5 === 0) {
    sound += 'Plang';
  }
  if (number % 7 === 0) {
    sound += 'Plong';
  }
  if (!sound.length) {
    return `${number}`;
  }
  return sound;
};
