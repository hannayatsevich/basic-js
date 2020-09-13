const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(Array.isArray(arr)) {    
    let midArray = arr.map( value => {
      return ( value === '--discard-next' || value === '--discard-prev' || value === '--double-next' || value === '--double-prev') ? 0 : 1;
    });
    arr.forEach( (element, idx) => {
      switch(element) {        
        case '--discard-next': 
          if(arr[idx + 1] !== undefined && midArray[idx + 1]) midArray[idx + 1]--; 
          break;
        case '--discard-prev': 
          if(arr[idx - 1] !== undefined && midArray[idx - 1]) midArray[idx - 1]--; 
          break;
        case '--double-next': 
          if(arr[idx + 1] !== undefined && midArray[idx + 1]) midArray[idx + 1]++;
          break;
        case '--double-prev':
          if(arr[idx - 1] !== undefined && midArray[idx - 1]) midArray[idx - 1]++;  
          break;
        default: break;
      };
    });
    return midArray.reduce( (acc, value, idx) => {
      if(value) {
        for(let x = 1; x <= value; x++) {
          acc.push(arr[idx])
        };
      };
      return acc;
    }, []);
  }
  else throw Error;
};
