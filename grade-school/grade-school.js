//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ID = 0;
const DATA = 1;

const _sequentialGrade = (grade) => {
  switch (grade) {
    case 'K':
      return 0;
    case 'PreK':
      return -1;
    default:
      return grade;
  }
}

export class GradeSchool {
  constructor() {
    this._studentDB = new Map(); // look and them parens baby!
  }

  roster() {

    const grades = [];
    const roster = {};

    // Grab all the neccessary grades for our eventual roster
    for (const student of this._studentDB) {
      if (!grades.includes(student[DATA].grade)) {
        grades.push(student[DATA].grade);
      }
    }

    // Order the grades numerically
    grades.sort((a, b) => {
      a = _sequentialGrade(a);
      b = _sequentialGrade(b);
      return a - b;
    });

    // Set the roster properties
    for (const grade of grades) {
      roster[grade] = [];
    }

    // Push each student  into to the array of the correct roster property
    for (const student of this._studentDB) {
      roster[`${student[DATA].grade}`].push(student[ID]);
    }

    // Alphabetize the arrays of each grade
    for (const grade of Object.keys(roster)) {
      roster[`${grade}`].sort();
    }

    return roster;
  }

  add(name, grade) {
    this._studentDB.set(name, { grade: grade });
  }

  grade(grade) {
    let gradeRoster = [];
    for (let student of this._studentDB) {
      if (student[DATA].grade === grade) {
        gradeRoster.push(student[ID]);
      }
    }
    gradeRoster.sort()
    return gradeRoster;
  }
}
