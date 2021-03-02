//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const ORDINAL_PHRASES = [
  "first",
  "second",
  "third",
  "fourth",
];

export const meetup = (year, month, occurance, dayOfWeek) => {

  const weekdayDates = buildDates(year, month, dayOfWeek);
  return occuranceDate(year, month, occurance, weekdayDates);
};

function buildDates(year, month, dayOfWeek) {
  const weekday = DAYS_OF_WEEK.indexOf(dayOfWeek);
  const daysIterator = new Date(year, month - 1, 1);
  const weekdayDates = [];

  while (daysIterator.getMonth() === month - 1) {
    if (daysIterator.getDay() === weekday) {
      weekdayDates.push(daysIterator.getDate());
      daysIterator.setTime(daysIterator.getTime() + 8.64e7 * 7); // 8.64e7 miliseconds per day
    } else {
      daysIterator.setTime(daysIterator.getTime() + 8.64e7);
    }
  }
  return weekdayDates;
}


function occuranceDate(year, month, occurance, weekdayDates) {
  if (occurance === "teenth") {
    const date = weekdayDates.filter((x => x >= 13));
    return new Date(year, month - 1, date[0]);
  } else if (occurance === "last") {
    return new Date(year, month - 1, weekdayDates[weekdayDates.length - 1]);
  } else {
    return new Date(year, month - 1, weekdayDates[ORDINAL_PHRASES.indexOf(occurance)]);
  }
}
