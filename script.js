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


const sortByAsc = (arr) => {
  // Условие остановки, выхода из рекурсии, возвращем массив с 1 элементом
  if (arr.length < 2) return arr;
  // Выбираем опорный элемент
  let pivot = arr[0];
  // Определяем массивы для тех, что меньше и больше опорного
  const left = [];
  const right = [];

  // Проходим циклом по всем элементам из массива и разносим их в массивы созданные ранее согласно условию, больше опорного - в правый, меньше - в левый
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // Рекурсивно повторяем процесс для новых двух массивов, текущий опорный элемент - кладем как первый в правый массив.
  return sortByAsc(left).concat(pivot, sortByAsc(right));
}

//console.log(sortByAsc([-2, 9, 5, -3]));


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


function findNext(number) {
  let tempNumber = number;

  const numberArr = [];
  while (tempNumber > 0) {
    numberArr.push(tempNumber % 10);
    tempNumber = Math.floor(tempNumber / 10);
  }
  numberArr.reverse();

  const NumberArrLength = numberArr.length;
  let smallestDigit = 0;
  let smallestIndex = NumberArrLength - 1;

  for (let i = smallestIndex; i > 0; i -= 1) {
    if (numberArr[i] > numberArr[i - 1]) {
      smallestDigit = numberArr[i - 1];
      smallestIndex = i;
      break;
    }
  }
  if (
    smallestIndex === 0 &&
    numberArr[smallestIndex + 1] >= numberArr[smallestIndex + 2]
  ) {
    return number;
  }

  let endSmallestIndex = smallestIndex;
  for (let i = smallestIndex + 1; i < NumberArrLength; i += 1) {
    if (
      numberArr[i] > smallestDigit &&
      numberArr[i] < numberArr[smallestIndex]
    ) {
      endSmallestIndex = i;
    }
  }

  const temp = numberArr[endSmallestIndex];
  numberArr[endSmallestIndex] = numberArr[smallestIndex - 1];
  numberArr[smallestIndex - 1] = temp;

  let resultNumber = 0;
  console.log(numberArr);
  for (let i = 0; i < smallestIndex; i += 1) {
    resultNumber = resultNumber * 10 + numberArr[i];
  }
  console.log(resultNumber);

  const headArr = [];
  for (let i = 0; i < smallestIndex; i += 1) {
    headArr.push(numberArr[i]);
  }
  console.log(headArr);
  const endArr = [];
  for (let i = smallestIndex; i < NumberArrLength; i += 1) {
    endArr.push(numberArr[i]);
  }
  endArr.sort();
  for (let i = 0; i < NumberArrLength - smallestIndex; i += 1) {
    resultNumber = resultNumber * 10 + endArr[i];
  }
  let res = 0;
  const resultArr = headArr.concat(endArr);
  console.log(headArr.concat(endArr));
  for (let i = 0; i < resultArr.length; i += 1) {
    res += resultArr[i] + 10 ** i;
  }
  return res;
}


//console.log(number.reverse());
console.log(findNext(12345));

/*
* 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 * */
