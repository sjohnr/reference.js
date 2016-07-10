var wrapSort = require('./wrapSort');

function selectionSort(src, start, end) {
  for (var i = start; i < end - 1; i++) {
    var min = i;
    for (var j = i + 1; j < end; j++) {
      if (src[j] < src[min]) min = j;
    }

    if (min != i) swap(src, i, min);
  }
}

function swap(src, i, j) {
  var x = src[i];
  src[i] = src[j];
  src[j] = x;
}

module.exports = wrapSort(selectionSort);
