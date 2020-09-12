const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let finalString = '';
  for(let i = 1; i <= (options.repeatTimes || 1); i++) {
    finalString +=str;
    if(options.addition !== undefined) {
      for(let j = 1; j <= (options.additionRepeatTimes || 1); j++) {
        finalString += options.addition;
        if(j !== (options.additionRepeatTimes || 1)) finalString += (options.additionSeparator || '');
      }
    };
    if(i !== (options.repeatTimes || 1)) finalString += (options.separator || '+');
  }
  return finalString;
};
  