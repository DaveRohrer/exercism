//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (leftStrand, rightStrand) => {
  try {
    validateStrands(leftStrand, rightStrand);
  } catch (e) {
    throw new Error(e.message);
  }
  return [...leftStrand].reduce((distance, x, index) => { return x === [...rightStrand][index] ? distance : distance + 1 }, 0);
};

function validateStrands(leftStrand, rightStrand) {
  if (leftStrand === '' && rightStrand.length > 0) {
    throw new Error('left strand must not be empty');
  } else if (rightStrand === '' && leftStrand.length > 0) {
    throw new Error('right strand must not be empty');
  } else if (leftStrand.length !== rightStrand.length) {
    throw new Error('left and right strands must be of equal length');
  }
}