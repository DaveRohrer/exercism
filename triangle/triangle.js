//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  #sides
  constructor(...sides) {
    this.#sides = sides.sort();
  }

  get isEquilateral() {
    return this.#sides.every(x => x > 0 && x == this.#sides[0]);
  }

  get isIsosceles() {
    return this.#sides.map((x) => {
      return this.#sides.filter(side => side === x).length
    }, this).filter(x => x >= 2).length >= 2 &&
      this.#sides[0] + this.#sides[1] >= this.#sides[2];
  }

  get isScalene() {
    return this.#sides.map((x) => {
      return this.#sides.filter(side => side === x).length
    }, this).filter(x => x === 1).length === 3 &&
      this.#sides[0] + this.#sides[1] >= this.#sides[2];
  }

  get isDegenerate() {
    return Number.parseFloat(this.#sides[0] + this.#sides[1]).toPrecision(1) == this.#sides[2];
  }
}
