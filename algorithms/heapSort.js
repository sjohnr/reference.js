var wrapSort = require('./wrapSort');

function heapify(src, start, end) {
  for (var i = parent(end); i >= start; i--) {
    siftDown(src, i, end);
  }
}

function doSort(src, start, end) {
  for (var i = end - 1; i > start; i--) {
    swap(src, start, i);
    siftDown(src, start, i);
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

function heapSort(src, start, end) {
  heapify(src, start, end);
  doSort(src, start, end);
}

module.exports = wrapSort(heapSort);
