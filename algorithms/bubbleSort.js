var wrapSort = require('./wrapSort');
var swap = require('./swap');

function bubbleSort(src, start, end) {
  for (var i = start; i < end - 1; i++) {
    for (var j = i + 1; j < end; j++) {
      if (src[i] > src[j]) swap(src, i, j);
    }
  }
}

module.exports = wrapSort(bubbleSort);
