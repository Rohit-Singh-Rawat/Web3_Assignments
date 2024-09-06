const crypto = require('crypto')

// Problem 1
function findHashWithPrefix(prefix) {
  let input = 0;
  while (true) {
    const  inputStr = input.toString()
    const hash = crypto.createHash('sha256').update(inputStr).digest('hex');
    if (hash.startsWith(prefix)) {
      return { input: inputStr, hash: hash };
    }
    input++;

  }
}

const result = findHashWithPrefix('00000');
console.log(`Input: ${result.input}`); // Input: 596138
console.log(`Hash: ${result.hash}`); // Hash: 00000691457f4f0ce13e187b9ab4fda6d42c8647752909b8f71f9dbd8f6bd4ab

//Problem 2
function findNonceAndHash(prefix, DataPrefix) {
  let input = 0;
  while (true) {
    const inputStr =  DataPrefix + input.toString() 
    const hash = crypto.createHash('sha256').update(inputStr).digest('hex');
    if (hash.startsWith(prefix)) {
      return { input: inputStr, hash: hash, nonce:input };
    }
    input++;

  }
}
const result2 = findNonceAndHash('00000','Rohit');
console.log(`Input: ${result2.input}`); // Input: Rohit224767
console.log(`Hash: ${result2.nonce}`);// 224767
console.log(`Hash: ${result2.hash}`); // Hash: 00000099fcbf085cbe4f55346c753a1b980129064588471ebb2a3914339730f0