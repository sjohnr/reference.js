var wrapSort = require('./wrapSort');

function quickSort(src, start, end) {
  var length = end - start;
  if (length > 1) {
    var pivot = src[start], i = start + 1, j = end - 1;
    do {
      while (src[i] < pivot) i++;
      while (src[j] > pivot) j--;
      if (i < j) swap(src, i++, j--);
    } while (i < j);

    swap(src, start, j);
    quickSort(src, start, j);
    quickSort(src, j + 1, end);
  }
}

function swap(src, i, j) {
  var x = src[i];
  src[i] = src[j];
  src[j] = x;
}

module.exports = wrapSort(quickSort);
