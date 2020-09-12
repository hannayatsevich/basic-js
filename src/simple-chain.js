const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    if(!this.chain[position]) {
      this.chain = [];
      throw Error;
    }
    this.chain = this.chain.filter( (value, idx) => idx !== position - 1);
    return this;
  },
  reverseChain() {    
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = `( ${this.chain.join(' )~~( ')} )`;
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
