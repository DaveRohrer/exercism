//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (array) => {
  const firstColor = array[0];
  const secondColor = array[1];

  return parseInt(`${COLORS.indexOf(firstColor)}${COLORS.indexOf(secondColor)}`);
};

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]