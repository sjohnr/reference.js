var wrapSort = require('./wrapSort');
var swap = require('./swap');

function selectionSort(src, start, end) {
  for (var i = start; i < end - 1; i++) {
    var min = i;
    for (var j = i + 1; j < end; j++) {
      if (src[j] < src[min]) min = j;
    }

    if (min != i) swap(src, i, min);
  }
}

module.exports = wrapSort(selectionSort);
