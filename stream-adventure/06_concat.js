#!/bin/env node
'use strict';

var concat = require('concat-stream');

process.stdin.pipe(concat(function cs (body) {
  var op = body.toString().split('').reverse().join('');
  console.log(op);
}));

