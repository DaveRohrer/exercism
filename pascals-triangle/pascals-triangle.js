//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (desiredRows) => {
  const triangle = [];
  
  for(let i = 0; i < desiredRows; i++){
    const nextRow = [];
    for(let j = 0; j < i + 1; j++){
      // If on the edges of the triangle, we just need to push 1s.
      if(j==0||j==i) {
        nextRow.push(1);
      } else {
        // If we are in the middle of a row we need to sum the previous rows previous and current indicies;
        nextRow.push(triangle[i-1][j-1]+triangle[i-1][j]);
      }
    }
    console.log(nextRow);
    triangle.push(nextRow);
  }
  return triangle;
};
