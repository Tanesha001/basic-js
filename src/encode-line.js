const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  str = str.split('');
  let count = 1, res = '';
  
  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[i + 1]) {
      count++;
    } else {
      if (count === 1) 
      count = '';
      res += `${count}${str[i]}`;
      count = 1;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
