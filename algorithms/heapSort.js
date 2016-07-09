function heapify(src) {
  for (var len = src.length, i = parent(len); i >= 0; i--) {
    siftDown(src, i, len);
  }
}

function doSort(src) {
  for (var len = src.length, i = len - 1; i > 0; i--) {
    swap(src, 0, i);
    siftDown(src, 0, i);
  }
}

function siftDown(src, start, end) {
  swapChild(src, start, end, start * 2 + 1);
  swapChild(src, start, end, start * 2 + 2);
}

function swapChild(src, start, end, child) {
  if (child < end && src[start] < src[child]) {
    swap(src, start, child);
    siftDown(src, child, end);
  }
}

function swap(src, i, j) {
  var x = src[i];
  src[i] = src[j];
  src[j] = x;
}

function parent(start) {
  return Math.floor((start - 1) / 2);
}

function heapSort(src) {
  heapify(src);
  doSort(src);
}

module.exports = heapSort;
