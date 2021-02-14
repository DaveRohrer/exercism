//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (strand) => {
  const transcription = strand.replace(/G/g, 'c').replace(/C/g, 'G').replace(/A/g, 'U').replace(/T/g, 'A').replace(/c/g, 'C');
  return transcription;
};
