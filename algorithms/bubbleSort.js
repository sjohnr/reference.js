function bubbleSort(src) {
  for (var i = 0, len = src.length; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (src[i] > src[j]) swap(src, i, j);
    }
  }
}

function swap(src, i, j) {
  var x = src[i];
  src[i] = src[j];
  src[j] = x;
}

module.exports = bubbleSort;
