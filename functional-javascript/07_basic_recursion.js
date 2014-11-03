function reduce(arr, fn, initial) {
  return (function reduceOne (idx, val) {
    if (idx > arr.length - 1) return val;
    return reduceOne(idx + 1, fn(val, arr[idx], idx, arr))
  })(0, initial);
}

module.exports = reduce