function selectionSort(src) {
  for (var i = 0, len = src.length; i < len - 1; i++) {
    var min = i;
    for (var j = i + 1; j < len; j++) {
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

module.exports = selectionSort;
