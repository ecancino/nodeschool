#!/bin/env node

function countWords(inputWords) {
  var record = {};
  return inputWords.reduce(function(p, c, i) {
    record[c] = ++record[c] || 1;
    return record;
  }, {});
}

module.exports = countWords;
