const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {
  repeatTimes = 0,
  separator = '+',
  addition = '',
  additionRepeatTimes = 0,
  additionSeparator = '|'
}) {
  let _str = String(str);
  let _addition = String(addition);
  let result = '';
  for (let i = 0; i < repeatTimes; i++) {
    restult = result + _str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      if (j + 1 === additionRepeatTimes) {
        result = result + _addition;
      } else {
        result = result + _addition + additionSeparator;
      }
    }
    if (i + 1 === additionRepeatTimes) {

    } else {
      result = result + separator;
    }
  }
  return result;
};