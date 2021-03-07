/*********************************************************************************************************************************
/*********************************************Exercise 1************************************************************************** 
/*********************************************************************************************************************************
Given a number n, print following a pattern without using any loop.

Examples :

Input: n = 16
Output: 16, 11, 6, 1, -4, 1, 6, 11, 16

Input: n = 10
Output: 10, 5, 0, 5, 10
We basically first reduce 5 one by one until we reach a negative or 0. After we reach 0 or negative, we one add 5 until we reach n.
//*********************************************************************************************************************************/
const recursiveNumberPattern = (number) => {
  console.log(number);
  if (number <= 0) {
    return;
  } else {
    recursiveNumberPattern(number - 5);
  }
  console.log(number);
};
//recursiveNumberPattern(16);

/*********************************************************************************************************************************
/*********************************************Exercise 2************************************************************************** 
/*********************************************************************************************************************************
Given an array, write functions to find the minimum and maximum elements in it. 
//*********************************************************************************************************************************/

const recursiveMin = (array, index = 0, currentMin = array[0]) => {
  return index >= array.length
    ? array[index] < currentMin
      ? array[index]
      : currentMin
    : array[index] < currentMin
    ? recursiveMin(array, index + 1, array[index])
    : recursiveMin(array, index + 1, currentMin);
};
//console.log(recursiveMin([55, 666, 600, 45, 22, 13, 66, 2]));

const recursiveMax = (array, index = 0, currentMax = array[0]) => {
  return index >= array.length
    ? array[index] < currentMax
      ? array[index]
      : currentMax
    : array[index] > currentMax
    ? recursiveMax(array, index + 1, array[index])
    : recursiveMax(array, index + 1, currentMax);
};
//console.log(recursiveMax([55, 666, 600, 45, 22, 13, 66, 2]));

/*********************************************************************************************************************************
/*********************************************Exercise 3************************************************************************** 
/*********************************************************************************************************************************

//*********************************************************************************************************************************/
