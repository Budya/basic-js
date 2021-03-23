const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let prepareArr = [];
  let resultArr = [];

  if(!Array.isArray(arr)){
    throw new Error('Error: wrong parameter')
  }
  //for discardDiscarded & doubleDiscarded
  let checkThreeLast = function (prepareArr) {
    if ((prepareArr[prepareArr.length - 1] === '--double-prev' &&
        prepareArr[prepareArr.length - 3] === '--discard-next') ||
      (prepareArr[prepareArr.length - 1] === '--discard-prev' &&
        prepareArr[prepareArr.length - 3] === '--discard-next')) {
      prepareArr.pop();
      prepareArr.pop();
      prepareArr.pop();
    }
  }
  for (let i = 0; i < arr.length; i++) {
    prepareArr.push(arr[i]);
    if (prepareArr.length >= 3) {
      checkThreeLast(prepareArr);
    }
  }

  let checkTwoLast = function (checkArr) {
    if (checkArr[checkArr.length - 2] === '--discard-next') {
      checkArr.pop();
      checkArr.pop();
    } else if (checkArr[checkArr.length - 2] === '--double-next') {
      checkArr[checkArr.length - 2] = checkArr[checkArr.length - 1];
    } else if (checkArr[checkArr.length - 1] === '--discard-prev') {
      checkArr.pop();
      checkArr.pop();
    } else if (checkArr[checkArr.length - 1] === '--double-prev') {
      checkArr[checkArr.length - 1] = checkArr[checkArr.length - 2]
    }
  }

  for (let i = 0; i < prepareArr.length; i++) {
    if (i === 0 && (prepareArr[i] === '--discard-prev' || prepareArr[i] === '--double-prev')) {

    } else if (i === prepareArr.length - 1 && (prepareArr[i] === '--discard-next' || prepareArr[i] === '--double-next')) {

    } else {
      resultArr.push(prepareArr[i]);
      checkTwoLast(resultArr);
    }
  }
  
  return resultArr;
}