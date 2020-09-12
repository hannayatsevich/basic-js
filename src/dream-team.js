const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)) {
    let membersNames = members.filter( member => typeof member === 'string');
    if(membersNames.length) {
      return membersNames.map( member => member.trim().toUpperCase()[0]).sort().join('');
    }
    else return false;
  }
  else return false;
};
