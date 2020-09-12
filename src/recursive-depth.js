const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    if(Array.isArray(arr)) {
      count++;
      let innerCount = 0;
      for(let i = 0; i < arr.length; i++) {
        let depth = this.calculateDepth(arr[i]);
        if(depth > innerCount) innerCount = depth;
      };
      count += innerCount;
    }
    return count;
  }
};