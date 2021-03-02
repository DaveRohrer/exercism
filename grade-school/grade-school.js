//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class GradeSchool {
  #studentDB;

  constructor() {
    this.#studentDB = new Map(); // look and them parens baby!
  }

  roster() {
    const roster = {};
    for (const grade of this._gatherGradesFromDataBase()) {
      roster[grade] = [];
    }
    for (const [studentName, studentInfo] of this.#studentDB) {
      roster[`${studentInfo.grade}`].push(studentName);
    }

    return this._alphabetizeRoster(roster);
  }

  add(name, grade) {
    this.#studentDB.set(name, { grade });
  }

  grade(grade) {
    const gradeRoster = [];
    for (let [studentName, studentInfo] of this.#studentDB) {
      if (studentInfo.grade === grade) {
        gradeRoster.push(studentName);
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
    for (const [studentName, studentInfo] of this.#studentDB) {
      if (!grades.includes(studentInfo.grade)) {
        grades.push(studentInfo.grade);
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
