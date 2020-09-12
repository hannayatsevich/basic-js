const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;
  if(Array.isArray(backyard)) {
    for(let i = 0; i < backyard.length; i++) {
      count += countCats(backyard[i])
    }
  }
  else if (backyard === "^^") count++;
  return count;
};
