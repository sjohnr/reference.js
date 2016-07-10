var wrapSort = require('./wrapSort');

function doSort(src, dest, start, end) {
  var length = end - start;
  if (length > 1) {
    var mid = Math.floor(length / 2) + start;
    doSort(dest, src, start, mid);
    doSort(dest, src, mid, end);
    merge(src, dest, start, mid, end);
  }
}

function merge(src, dest, start, mid, end) {
  for (var i = start, j = mid, k = start; k < end; k++) {
    if (j >= end || i < mid && src[i] < src[j]) {
      dest[k] = src[i++];
    } else {
      dest[k] = src[j++];
    }
  }
}

function mergeSort(src, start, end) {
  doSort(src.slice(0), src, start, end);
}

module.exports = wrapSort(mergeSort);
