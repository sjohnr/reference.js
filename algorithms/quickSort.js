var wrapSort = require('./wrapSort');

function quickSort(src, start, end) {
  var length = end - start;
  if (length > 1) {
    var pivot = src[start + Math.floor(length / 2)], i = start, j = end - 1;
    do {
      while (src[i] < pivot) i++;
      while (src[j] > pivot) j--;
      if (i < j) swap(src, i++, j--);
    } while (i < j);

    quickSort(src, start, j);
    quickSort(src, j, end);
  }
}

function swap(src, i, j) {
  var x = src[i];
  src[i] = src[j];
  src[j] = x;
}

module.exports = wrapSort(quickSort);
