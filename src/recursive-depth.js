const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
    if (Array.isArray(arr)) {
      if (arr[0] == undefined) {
        return 1;
      }
    }
    if (Array.isArray(arr)) return 1 + Math.max(...arr.map(t => this.calculateDepth(t)))
    else return 0;
  }
};