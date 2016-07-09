function insertionSort(src) {
  for (var i = 1, len = src.length; i < len; i++) {
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

module.exports = insertionSort;
