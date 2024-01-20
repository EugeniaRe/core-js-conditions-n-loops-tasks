function shuffleChar(str, iterations) {
  let resultStr = str;
  for (let it = 0; it < iterations; it += 1) {
    let strStart = '';
    let strEnd = '';
    for (let i = 0; i < resultStr.length; i += 1) {
      if (i % 2 === 0) {
        strStart += resultStr[i];
      } else {
        strEnd += resultStr[i];
      }
    }
    resultStr = strStart + strEnd;
  }
  return resultStr;
}
console.log(shuffleChar('qwerty', 2));

/*
.shuffleChar('', 2), '043215');
      assert.equal(tasks.shuffleChar('012345', 3), '031425');
      assert.equal(tasks.shuffleChar('qwerty', 1), 'qetwry');
      assert.equal(tasks.shuffleChar('qwerty', 2), 'qtrewy');
      assert.equal(tasks.shuffleChar('qwerty', 3), 'qrwtey');
      */
