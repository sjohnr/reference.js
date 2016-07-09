function doSort(src, start, end) {
  var length = end - start;
  if (length > 1) {
    var pivot = src[start + Math.floor(length / 2)], i = start, j = end - 1;
    do {
      while (src[i] < pivot) i++;
      while (src[j] > pivot) j--;
      if (i < j) swap(src, i++, j--);
    } while (i < j);

    doSort(src, start, j);
    doSort(src, j, end);
  }
}

function swap(src, i, j) {
  var x = src[i];
  src[i] = src[j];
  src[j] = x;
}

function quickSort(src) {
  doSort(src, 0, src.length);
}

module.exports = quickSort;
