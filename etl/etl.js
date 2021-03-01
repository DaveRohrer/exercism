//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldFormat) => {
  /* tried for a while to get some type of higher order function to make this look cleaner, but i couldn't
  quite get it. I got close a few times but ultimately gave up*/
  const newObject = {};
  for (const [key, value] of Object.entries(oldFormat)) {
    value.forEach((x) => { newObject[x.toLowerCase()] = parseInt(key) })
  }
  return newObject;
};
