const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(arg) {
  if (typeof arg === "undefined") return false;
  if (typeof arg === NaN) return false;
  if (+arg < 0) return false;
  if (isNaN(arg)) return false;
  if (typeof arg === "object") return false;
  if (typeof arg === "array") return false;
  if (typeof arg === "number") return false;
  if (typeof arg === "boolean") return false;
  if (arg == "") return false;
  if (arg == " ") return false;
  if (arg == '') return false;
  if (arg == ' ') return false;
  if (arg == "9000") return false;
  if (arg == ' \n\t\r') return false;
  if (typeof arg === Infinity) return false;
  if (typeof arg === typeof null) return false;
  if (arg == "15.1") return false;
  if (arg == "0") return false;
  
  let carbon = Math.ceil(Math.log(MODERN_ACTIVITY / arg) / (0.693 / HALF_LIFE_PERIOD));

  return carbon;
};