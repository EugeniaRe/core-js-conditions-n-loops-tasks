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

// function sortByAsc(arr) {
//   const result = arr;
//   for (let i = 0; i < result.length - 1; i += 1) {
//     let minIndex = i;
//     for (let j = i + 1; j < result.length; j += 1) {
//       if (result[j] < result[minIndex]) {
//         minIndex = j;
//       }
//     }
//     const temp = result[i];
//     result[i] = result[minIndex];
//     result[minIndex] = temp;
//   }
//   return result;
// }



function sortByAsc(arr) {
  const resArr = arr;
  if (resArr.length > 1) {
    const arrLength = resArr.length;
    const midIndex = Math.floor(resArr.length / 2);
    const left = [];
    for (let i = 0; i < midIndex; i += 1) {
      left.push(resArr[i]);
    }
    const right = [];
    for (let i = midIndex; i < arrLength; i += 1) {
      right.push(resArr[i]);
    }
    // const left = resArr.slice(0, midIndex);
    // const right = resArr.slice(midIndex);
    sortByAsc(left);
    sortByAsc(right);

    let leftIndex = 0;
    let rightIndex = 0;
    let arrIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resArr[arrIndex] = left[leftIndex];
        leftIndex += 1;
      } else {
        resArr[arrIndex] = right[rightIndex];
        rightIndex += 1;
      }
      arrIndex += 1;
    }
    while (leftIndex < left.length) {
      resArr[arrIndex] = left[leftIndex];
      leftIndex += 1;
      arrIndex += 1;
    }
    while (rightIndex < right.length) {
      resArr[arrIndex] = right[rightIndex];
      rightIndex += 1;
      arrIndex += 1;
    }
  }
  return resArr;
}




function rotateMatrix(matrix) {
  const resultMatrix = matrix;
  const mLength = resultMatrix.length;
  for (let i = 0; i < Math.floor(mLength / 2); i += 1) {
    for (let j = 0; j < mLength - 1 - 2 * i; j += 1) {
      let temp = resultMatrix[i + j][mLength - 1 - i];
      resultMatrix[i + j][mLength - 1 - i] = resultMatrix[i][i + j];
      resultMatrix[i][i + j] = temp;

      temp = resultMatrix[mLength - 1 - i][mLength - 1 - i - j];
      resultMatrix[mLength - 1 - i][mLength - 1 - i - j] =
        resultMatrix[i][i + j];
      resultMatrix[i][i + j] = temp;

      temp = resultMatrix[mLength - 1 - i - j][i];
      resultMatrix[mLength - 1 - i - j][i] = resultMatrix[i][i + j];
      resultMatrix[i][i + j] = temp;
    }
  }
  return resultMatrix;
}

console.log(rotateMatrix(
  [[1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
  ]));

/*
.shuffleChar('', 2), '043215');
      assert.equal(tasks.shuffleChar('012345', 3), '031425');
      assert.equal(tasks.shuffleChar('qwerty', 1), 'qetwry');
      assert.equal(tasks.shuffleChar('qwerty', 2), 'qtrewy');
      assert.equal(tasks.shuffleChar('qwerty', 3), 'qrwtey');
      */



// function rotateMatrix(matrix) {
//   let rowStart = 0;
//   let rowEnd = matrix.length - 1;
//   let colStart = 0;
//   let colEnd = matrix.length - 1;


// }

// let counter = 1;

// let rowStart = 0;
// let rowEnd = size - 1;
// let colStart = 0;
// let colEnd = size - 1;

// while (rowStart <= rowEnd && colStart <= colEnd) {
//   for (let i = colStart; i <= colEnd; i += 1) {
//     matrix[rowStart][i] = counter;
//     counter += 1;
//   }
//   for (let i = rowStart + 1; i <= rowEnd; i += 1) {
//     matrix[i][colEnd] = counter;
//     counter += 1;
//   }
//   if (rowStart < rowEnd && colStart < colEnd) {
//     for (let i = colEnd - 1; i > colStart; i -= 1) {
//       matrix[rowEnd][i] = counter;
//       counter += 1;
//     }
//     for (let i = rowEnd; i > rowStart; i -= 1) {
//       matrix[i][colStart] = counter;
//       counter += 1;
//     }
//   }
//   rowStart += 1;
//   rowEnd -= 1;
//   colStart += 1;
//   colEnd -= 1;
// }
