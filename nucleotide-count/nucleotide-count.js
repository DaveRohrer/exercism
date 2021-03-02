//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// return format: A C G T
export class NucleotideCounts {
  static parse(strand) {
    if (strand.search(/[^ACGT]/) >= 0 && strand != '') {
      throw new Error('Invalid nucleotide in strand');
    }
    return `${[...strand].filter(x => x === 'A').length} ${[...strand].filter(x => x === 'C').length} ` +
      `${[...strand].filter(x => x === 'G').length} ${[...strand].filter(x => x === 'T').length}`;
  }
}