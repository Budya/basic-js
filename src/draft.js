class VigenereCipheringMachine {
    constructor(){
        this.abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";        
    }
    encrypt(message, key) {        
        let wordLength = Math.max(message.length, key.length);
        let result = '';
        for(let i = 0; i < wordLength; i++){
            let messageIndex = this.abc.indexOf(message[((i >= message.length) ? i % message.length : i )]);
            let calcKeyIndex = key[((i >= key.length) ? i % key.length : i)];
            let keyIndex = this.abc.indexOf(calcKeyIndex);
            let char = this.abc[ ( ( ( this.abc.length + ( messageIndex + keyIndex ) ) % this.abc.length ) ) ];	
            result += char;
            console.log(result)
        }
        return result;            
    }    
    decrypt(message, key) {
        let wordLength = Math.max(message.length, key.length);
        let result = '';
        for(let i = 0; i < wordLength; i++){            
            let messageIndex = this.abc.indexOf(message[((i >= message.length) ? i % message.length : i )]);
            let calcKeyIndex = key[((i >= key.length) ? i % key.length : i)];
            let keyIndex = this.abc.indexOf(calcKeyIndex);            
            let char = this.abc[ ( ( ( this.abc.length + ( messageIndex - keyIndex ) ) % this.abc.length ) ) ];            	
            result += char;            
        }
        console.log(result)        
        return result;       
    }
  }

  let test = new VigenereCipheringMachine();
  test.encrypt("ATTACKATDAWN", 'LEMON')
  test.decrypt("LXFOPVEFRNHR", 'LEMON')