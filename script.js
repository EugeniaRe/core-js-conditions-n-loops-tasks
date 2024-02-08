// function shuffleChar(str, iterations) {
//   let resultStr = str;
//   for (let it = 0; it < iterations; it += 1) {
//     let strStart = '';
//     let strEnd = '';
//     for (let i = 0; i < resultStr.length; i += 1) {
//       if (i % 2 === 0) {
//         strStart += resultStr[i];
//       } else {
//         strEnd += resultStr[i];
//       }
//     }
//     resultStr = strStart + strEnd;
//   }
//   return resultStr;
// }
// console.log(shuffleChar('qwerty', 2));

/*
.shuffleChar('', 2), '043215');
      assert.equal(tasks.shuffleChar('012345', 3), '031425');
      assert.equal(tasks.shuffleChar('qwerty', 1), 'qetwry');
      assert.equal(tasks.shuffleChar('qwerty', 2), 'qtrewy');
      assert.equal(tasks.shuffleChar('qwerty', 3), 'qrwtey');
      */



function getSpiralMatrix(size) {
  const matrix = new Array(size);

  for (let i = 0; i < matrix.length; i += 1) {
    matrix[i] = new Array(size);
  }
  console.log(matrix);
  let counter = 1;

  let rowStart = 0;
  let rowEnd = size - 1;
  let colStart = 0;
  let colEnd = size - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    //   console.log(rowStart, rowEnd, colStart, colEnd);
    for (let i = colStart; i <= colEnd; i += 1) {
      matrix[rowStart][i] = counter;
      counter += 1;
      console.log(matrix);
    }
    for (let i = rowStart + 1; i <= rowEnd; i += 1) {
      matrix[i][colEnd] = counter;
      counter += 1;
      console.log(counter);
    }
    if (rowStart < rowEnd && colStart < colEnd) {
      for (let i = colEnd - 1; i > colStart; i -= 1) {
        matrix[rowEnd][i] = counter;
        counter += 1;
        console.log(counter);
      }
      for (let i = rowEnd; i > rowStart; i -= 1) {
        matrix[i][colStart] = counter;
        counter += 1;
        console.log(counter);
      }
    }
    rowStart += 1;
    rowEnd -= 1;
    colStart += 1;
    colEnd -= 1;
  }
  return matrix;
}

console.log(getSpiralMatrix(3));
