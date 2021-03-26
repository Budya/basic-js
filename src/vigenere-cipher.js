const CustomError = require("../extensions/custom-error");
class VigenereCipheringMachine {
  constructor(boolParam) {
    this.revers = false;
    if (typeof boolParam === 'boolean') {
      if (boolParam.toString() === 'false') {
        this.revers = true;
      }
    }
    this.abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error();
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let engStep = 0;
    let engMessage = message.split('').filter((char) => {
      return this.abc.indexOf(char) >= 0;
    }).join('');
    let result = '';
    for (let i = 0; i < message.length; i++) { // try message length
      if (this.abc.indexOf(message[i]) >= 0) {
        let messageCharIndex = 
            this.abc.indexOf(engMessage[((engStep >= engMessage.length) ? engStep % engMessage.length : engStep)]);
        let keyChar = key[((engStep >= key.length) ? engStep % key.length : engStep)];
        let keyCharIndex = this.abc.indexOf(keyChar);
        let char = this.abc[(((this.abc.length + (messageCharIndex + keyCharIndex)) % this.abc.length))];
        result += char;
        engStep++
      } else {
        result += message[i];
      }
    };
    if (this.revers) result = result.split('').reverse().join('');
    return result;
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error();
    };
    message = message.toUpperCase();
    key = key.toUpperCase();
    let engStep = 0;
    let engMessage = message.split('').filter((char) => {
      return this.abc.indexOf(char) >= 0;
    }).join('');
    let result = '';
    for (let i = 0; i < message.length; i++) {
      if (this.abc.indexOf(message[i]) >= 0) {
        let messageCharIndex = this.abc.indexOf(engMessage[((engStep >= engMessage.length) ? engStep % engMessage.length : engStep)]);
        let keyChar = key[((engStep >= key.length) ? engStep % key.length : engStep)];
        let keyCharIndex = this.abc.indexOf(keyChar);
        let char = this.abc[(((this.abc.length + (messageCharIndex - keyCharIndex)) % this.abc.length))];
        result += char;
        engStep++
      } else {
        result += message[i];
      }
    };
    if (this.revers) result = result.split('').reverse().join('');
    return result;
  }
};
module.exports = VigenereCipheringMachine;