#!/bin/env node

var sum = 0;
var l = process.argv.length

for (var i = 2; i < l; i++) {
  sum += +process.argv[i];
}

console.log(sum);