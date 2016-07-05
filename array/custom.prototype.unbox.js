Array.prototype.unbox = function() {
  return this.length > 1 ? this : this[0];
};