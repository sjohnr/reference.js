var wrapSort = require('./wrapSort');

function insertionSort(src, start, end) {
  for (var i = start + 1; i < end; i++) {
    for (var j = i; j > 0 && src[j - 1] > src[j]; j--) {
      swap(src, j - 1, j);
    }
  }
}

function swap(src, i, j) {
  var x = src[i];
  src[i] = src[j];
  src[j] = x;
}

module.exports = wrapSort(insertionSort);
