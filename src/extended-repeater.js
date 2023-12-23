const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = {}) {
  typeof str !== 'string' ? str = String(str) : '';
  options.repeatTimes === undefined ? options.repeatTimes = 1 : '';
  options.separator === undefined ? options.separator = '+' : options.separator = String(options.separator);
  options.addition === undefined ? options.addition = '' : options.addition = String(options.addition);
  options.additionRepeatTimes === undefined ? options.additionRepeatTimes = 1 : '';
  options.additionSeparator === undefined ? options.additionSeparator = '|' : options.additionSeparator = String(options.additionSeparator); 
  
  let add = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes); 
  add = add.slice(0, add.length - options.additionSeparator.length); 

  let res = (str + add + options.separator).repeat(options.repeatTimes);
  res = res.slice(0, res.length - options.separator.length);
  return res;
}

module.exports = {
  repeater
};
