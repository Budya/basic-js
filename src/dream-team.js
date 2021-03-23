const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  let dreamTeam = [];
  if (!arr) return false;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string' && arr[i] !== ' ') {
      let name = arr[i].trim();
      dreamTeam.push(name[0].toUpperCase());
    }
  }

  return dreamTeam.sort().join("");
};