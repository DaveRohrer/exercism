//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class GradeSchool {
  constructor() {
    this._studentDB = new Map(); // look and them parens baby!
  }

  roster() {
    const roster = {};
    for (const grade of this._gatherGradesFromDataBase()) {
      roster[grade] = [];
    }
    for (const student of this._studentDB) {
      roster[`${student[1].grade}`].push(student[0]);
    }

    return this._alphabetizeRoster(roster);
  }

  add(name, grade) {
    this._studentDB.set(name, { grade: grade });
  }

  grade(grade) {
    let gradeRoster = [];
    for (let student of this._studentDB) {
      if (student[1].grade === grade) {
        gradeRoster.push(student[0]);
      }
    }
    gradeRoster.sort()
    return gradeRoster;
  }

  ordinalGradeValue(grade) {
    switch (grade) {
      case 'K':
        return 0;
      case 'PreK':
        return -1;
      default:
        return grade;
    }
  }

  _gatherGradesFromDataBase() {
    const grades = [];
    for (const student of this._studentDB) {
      if (!grades.includes(student[1].grade)) {
        grades.push(student[1].grade);
      }
    }
    this._orderGrades(grades);
    return grades;
  }

  _orderGrades(grades) {
    grades.sort((a, b) => {
      a = this.ordinalGradeValue(a);
      b = this.ordinalGradeValue(b);
      return a - b;
    });
  }

  _alphabetizeRoster(roster) {
    // Alphabetize the arrays of each grade
    for (const grade of Object.keys(roster)) {
      roster[`${grade}`].sort();
    }
    return roster;
  }
}
