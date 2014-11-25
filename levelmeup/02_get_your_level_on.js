#!/bin/env node

var level = require('level'),
  db = level(process.argv[2]),
  key = process.argv[3];

db.get(key, function (err, value) {
  if (err) return console.error(err);
  console.log(value);
});
