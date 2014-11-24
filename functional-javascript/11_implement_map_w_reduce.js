#!/bin/env node

module.exports = function arrayMap(list, callback) {
  return list.reduce(function(acc, item, index, arr) {
    return acc.concat(callback(item, index, arr));
  }, []);
};