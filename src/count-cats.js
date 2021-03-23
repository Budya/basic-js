const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let concatMatrix;
  let sumCats = 0;
  if (matrix === undefined || matrix.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < matrix.length; i++) {
      if (i === 0) {
        concatMatrix = matrix[i];
      } else {
        concatMatrix = concatMatrix.concat(matrix[i]);
      }
    }

    for (let i = 0; i < concatMatrix.length; i++) {
      if (concatMatrix[i] === "^^") {
        sumCats += 1;
      }
    }
  }
  return sumCats;
}