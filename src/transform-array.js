const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('It\'s not an array');
  let a = [], l, k = 0, n = 0;
 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != "--discard-next" && arr[i] != "--discard-prev" && arr[i] != "--double-next" && arr[i] != "--double-prev") {
      a[k] = arr[i];
      k++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    l = i;
    if (arr[i] == "--discard-next" && i < arr.length - 2) a = discardNext(a, l, n);
    if (arr[i] == "--discard-prev" && i > 0 && arr[i - 2] != "--discard-next") a = discardPrev(a, l, n);
    if (arr[i] == "--double-next" && i < arr.length - 2) a = doubleNext(a, l, n);
    if (arr[i] == "--double-prev" && i > 0 && arr[i - 2] != "--discard-next") a = doublePrev(a, l, n);
  }
  return a;
};

function discardNext(a, l, n) {
  for (let i = (l - n); i < a.length; i++) {
    a[i] = a[i + 1];
  }
  n += 2;
  a.pop();
  return a;
}

function discardPrev(a, l, n) {
  for (let i = (l - n - 1); i < a.length; i++) {
    a[i] = a[i + 1];
  }
  n += 2;
  a.pop();
  return a;
}

function doubleNext(a, l, n) {
  let p = a[a.length - 1];
  for (let i = a.length - 1; i > (l + n); i--) {
    a[i] = a[i - 1];
  }
  n -= 2;
  a.push(p);
  return a;
}

function doublePrev(a, l, n) {
  let p = a[a.length - 1];
  for (let i = a.length - 1; i > (l + n - 1); i--) {
    a[i] = a[i - 1];
  }
  n -= 2;
  a.push(p);
  return a;
}