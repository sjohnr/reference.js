function wrapSort(fn) {
  return function(src, start, end) {
    if (!start) start = 0;
    if (!end) end = src.length;
    fn.call(null, src, start, end);
  };
}

module.exports = wrapSort;
