const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (str === undefined) return false;
    else String(str);
  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';
  if (options.addition === undefined) options.addition = '';
    else String(options.addition);
  if (!options.repeatTimes) options.repeatTimes = 0;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 0;
  if (typeof(str) != 'string') String(str);
  if (typeof(options.addition) != 'string') String(options.addition);
  
  str += String(options.addition);

  
  for (let j = 0; j < Number(options.additionRepeatTimes) - 1; j++) {
      str += options.additionSeparator + options.addition;
  }

  let addString = str;

  for (let i = 0; i < Number(options.repeatTimes) - 1; i++) {
      str += options.separator + addString;
  }
  return str;
};
  