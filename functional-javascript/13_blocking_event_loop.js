#!/bin/env node

function repeat(operation, num) {
  if (num <= 0) return;
  operation()
  var interval = setTimeout(function() {
    return repeat(operation, --num)
  }, this)
  return interval;
}

module.exports = repeat;