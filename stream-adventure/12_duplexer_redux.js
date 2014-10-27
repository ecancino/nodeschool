#!/bin/env node
'use strict';

var through = require('through'),
  duplexer = require('duplexer');

module.exports = function (counter) {
  var count = {};
  return duplexer(through(function write (row) {
    count[row.country] = (count[row.country] || 0) + 1;
  }, function end() {
    counter.setCounts(count)
  }), counter);
};