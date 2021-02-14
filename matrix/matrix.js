//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { split } from "core-js/modules/es.symbol.js"; //had to change this line to better reflect what was in my directory structure

export class Matrix {
  constructor(numberString) {

    // Split string into array of row strings.
    const rowsStrings = numberString.split('\n');
    // This will eventually store the numerical matrix.
    const rows = [];

    // For each string of row characters...
    rowsStrings.forEach(element => {
      // Split into an array of strings for each number
      const singleRowString = element.split(" ");
      // Prepare an array to hold the numberical values we just split
      const numericalRow = [];
      
      singleRowString.forEach(element => {
        numericalRow.push(parseInt(element));
      })
    
      rows.push(numericalRow);
    })

    this._rows = rows;
  }

  get rows() {
    return this._rows;
  }

  get columns() {

    // Use a similar strategy as in the constructor. Create an array to contain entire columns and set a
    // single column up at a time (using the stored this._rows) value and eventually push each column array
    // into the larger array of arrays.
    const cols = [];

    for (let i = 0; i < this._rows[0].length; i++) {
      const singleCol = [];
      for (let j = 0; j < this.rows.length; j++) {
        singleCol.push(this._rows[j][i]);
      }
      cols.push(singleCol);

    }

    return cols;
  }
}
