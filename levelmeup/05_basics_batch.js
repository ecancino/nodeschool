#!/bin/env node

var level = require('level'),
  fs = require('fs'),
  db = level(process.argv[2]),
  file = process.argv[3],
  lines = fs.readFileSync(file, 'utf8').split('\n'),
  ops, o;

ops = lines.map(function (line) {
 o = line.split(',');
 return { type: o[0], key: o[1], value: o[2] };
});

db.batch(ops, function (err) {
 if (err) return console.error(err);
 db.close();
});
