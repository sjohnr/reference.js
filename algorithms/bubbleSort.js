var wrapSort = require('./wrapSort');

function bubbleSort(src, start, end) {
  for (var i = start; i < end - 1; i++) {
    for (var j = i + 1; j < end; j++) {
      if (src[i] > src[j]) swap(src, i, j);
    }
  }
}

function swap(src, i, j) {
  var x = src[i];
  src[i] = src[j];
  src[j] = x;
}

module.exports = wrapSort(bubbleSort);
