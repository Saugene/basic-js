const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof(str) != 'string') String(str);
  if (typeof(options.addition) != 'string') String(options.addition);
  if (!str) return false;
  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';
  if (!options.addition) options.addition = '';
  if (!options.repeatTimes) options.repeatTimes = 0;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 0;
  
  str += options.addition;
  
  for (let j = 0; j < Number(options.additionRepeatTimes) - 1; j++) {
      str += options.additionSeparator + options.addition;
  }

  let addString = str;
  
  for (let i = 0; i < Number(options.repeatTimes) - 1; i++) {
      str += options.separator + addString;
  }
  return str;
};
  