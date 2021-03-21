const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (direct = true) {
    this.direct = direct
  }

  encrypt(wrd, key) {
    if (!wrd || !key) {
      throw Error('Check input parametrs!')
    }

    const cdWrd = wrd.toLowerCase().split('');
    let cdKey = key.toLowerCase();

    while (cdWrd.length > cdKey.length) {
      cdKey += cdKey;
    }

    let res = [];
    cdKey = cdKey.split('');
    let count = 0;

    for (let e of cdWrd) {
      if ((e.charCodeAt(0) >= 97 && e.charCodeAt(0) < 123)) {
      let m = e.toUpperCase().charCodeAt(0) - 65, k = cdKey[count++].toUpperCase().charCodeAt(0) - 65;
      let sum = m + k;
      if (sum >= 26) sum = sum % 26;
      res.push(String.fromCharCode(sum + 65).toUpperCase());
      } else res.push(e);
    }

    return this.direct ? res.join('') : res.reverse().join('');
  }    
  decrypt(encWrd, key) {
    if (!encWrd || !key) {
      throw Error('Check input parametrs!')
    }

    const cdEncWrd = encWrd.toUpperCase().split('');
    let cdKey = key.toUpperCase();

    while (cdEncWrd.length > cdKey.length) {
      cdKey += cdKey;
    }

    let res = [];
    cdKey = cdKey.split('');
    let count = 0;

    for (let e of cdEncWrd) {
      if ((e.charCodeAt(0) >= 65 && e.charCodeAt(0) < 91)) {
      let m = e.toLowerCase().charCodeAt(0) - 97, k = cdKey[count++].toLowerCase().charCodeAt(0) - 97;
      let sum = m - k;
      if (sum < 0 ) sum = m - k + 26;
      res.push(String.fromCharCode(sum + 97).toUpperCase());
      } else res.push(e);
    }

    return this.direct ? res.join('') : res.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
