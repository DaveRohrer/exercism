//
// This is only a SKELETON file for the 'Square root' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const squareRoot = (radicand) => {

  // This wiki link teaches how to use binary to easily calculate square roots
  // https://en.wikipedia.org/wiki/Methods_of_computing_square_roots

  let bits = 1 << 62;
  let result = 0;

  while (bits > radicand) {
    bits = bits >> 2;
  }
  while (bits != 0) {
    if (radicand >= (result + bits)) {
      radicand -= result + bits;
      result = (result >> 1) + bits;
    } else {
      result >>= 1;
    }
    bits >>= 2
  }
  return result;
};
