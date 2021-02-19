//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {

  if (n <= 0) {
    throw new Error('Only positive numbers are allowed');
  }
  return collatz(n, 0);
};

function collatz(n, step) {
  if (n === 1) {
    return step;
  }
  else if (!(n % 2)) {
    return collatz(n / 2, step + 1)
  } else {
    return collatz(n * 3 + 1, step + 1)
  }
}
