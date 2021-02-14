//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const age = (planet, seconds) => {
  
  // First convert to earth years
  const convertedYears = seconds / 31557600;

  // Set up conversion rates
  let conversions = new Map;
  conversions.set('mercury', 0.2408467);
  conversions.set('venus', 0.61519726);
  conversions.set('earth', 1);
  conversions.set('mars', 1.8808158);
  conversions.set('jupiter', 11.862615);
  conversions.set('saturn', 29.447498);
  conversions.set('uranus', 84.016846);
  conversions.set('neptune', 164.79132);

  // Return converted rate after rounding to two decimals places (and converting back to a number)
  return parseFloat((convertedYears / conversions.get(planet)).toFixed(2));
};
