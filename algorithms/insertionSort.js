var wrapSort = require('./wrapSort');
var swap = require('./swap');

function insertionSort(src, start, end) {
  for (var i = start + 1; i < end; i++) {
    for (var j = i; j > 0 && src[j - 1] > src[j]; j--) {
      swap(src, j - 1, j);
    }
  }
}

module.exports = wrapSort(insertionSort);
