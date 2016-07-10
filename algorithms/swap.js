function swap(src, i, j) {
  var x = src[i];
  src[i] = src[j];
  src[j] = x;
}

module.exports = swap;
