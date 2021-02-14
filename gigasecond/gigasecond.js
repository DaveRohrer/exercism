//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (moment) => {
  const manySecondsLater = new Date(moment);
  manySecondsLater.setTime(manySecondsLater.getTime()+1000000000000);
  return manySecondsLater;
};
