//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(array = []) {
    this.values = array;
  }

  append(list) {
    this.values = [...this.values, ...list.values]
    return this;
  }

  concat(list = []) {
      for(let i = 0; i < list.length(); i++){
      this.append(list.values[i]);
    }
    return this;
  }

  filter(func) {
    const filteredList = new List();
    for (let i = 0; i < this.length(); i++) {
      if (func(this.values[i])) {
        filteredList.append(new List([this.values[i]]));
      }
    }
    return filteredList;
  }

  map(func) {
    const transformedList = new List();
    for (let i = 0; i < this.length(); i++) {
      transformedList.append(new List([func(this.values[i])]));
    }
    return transformedList;
  }

  length() {
    let count = 0;
    while (this.values[count]) {
      count++;
    }
    return count;
  }

  foldl(func, accumulator) {
    let reduction = accumulator;
    for (let i = 0; i < this.length(); i++) {
      reduction = func(reduction, this.values[i]);
    }
    return reduction;
  }

  foldr(func, accumulator) {
    let reduction = accumulator;
    for (let i = this.length() - 1; i >= 0; i--) {
      reduction = func(reduction, this.values[i]);
    }
    return reduction;
  }

  reverse() {
    const reversedList = new List ();
    for (let i = this.length() - 1; i >= 0; i--) {
      reversedList.append(new List([this.values[i]]));
    }
    this.values = reversedList.values;
    return this;
  }
}
