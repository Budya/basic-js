const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {
  repeatTimes = 1,
  separator = '+',
  addition = '',
  additionRepeatTimes = 1,
  additionSeparator = '|'
}) {
  let _str = String(str);  
  let _addition = String(addition);
  let result = '';
  for (let i = 0; i < repeatTimes; i++) {
    result += _str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      if (j + 1 === additionRepeatTimes) {
        result += _addition;
      } else {
        result += _addition + additionSeparator;
      }
    }
    if (i + 1 === repeatTimes) {

    } else {
      result += separator;
    }
  }
  return result;
};