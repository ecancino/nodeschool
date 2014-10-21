#!/bin/env node

var fs = require('fs')

var f = process.argv[2];
var b = fs.readFileSync(f);
var s = b.toString()
var l = s.split('\n');

console.log(l.length - 1);