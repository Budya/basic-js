const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {  
  let sumCats = 0;
  if (matrix === undefined || matrix.length === 0) {
    return 0;
  } else {
    for(let i = 0; i < matrix.length; i++){
      for(let j = 0; j < matrix[i].length; j++){
        if (matrix[i][j] === "^^") {
          sumCats += 1;
        }
      }
    }
  }
  return sumCats;
}