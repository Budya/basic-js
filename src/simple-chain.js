const CustomError = require("../extensions/custom-error");

const chainMaker = {
  elementsArray: [],
  getLength() {
    return this.elementsArray.length;
  },
  addLink(value) {
    if (value === null) {
      this.elementsArray.push('null');
    } else if (value === NaN) {
      this.elementsArray.push('NaN');
    } else if (value === undefined) {
      this.elementsArray.push(' ')
    } else if(typeof value === 'function'){
      this.elementsArray.push('function() {}')
    } 
    else {
      this.elementsArray.push(value);
    }
    return this;
  },
  removeLink(position) {
    if (Number.isNaN(position) 
    || (this.elementsArray.length - 1) < position 
    || position <= 0 
    || (position ^ 0) !== position) {
      this.elementsArray = [];
      throw new Error();
    } else if (this.elementsArray.length > 0) {
      this.elementsArray.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.elementsArray.reverse();
    return this;
  },
  finishChain() {
    let finalResult = [];
    for (let i = 0; i < this.elementsArray.length; i++) {
      if (i == 0) {
        finalResult.push(`( ${this.elementsArray[i]} )`);
      } else {
        finalResult.push(`~~( ${this.elementsArray[i]} )`);
      }
    }    
    this.elementsArray = [];
    return finalResult.join('');
  },
};

module.exports = chainMaker;