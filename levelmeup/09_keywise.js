#!/bin/env node

var level = require('level'),
  db = level(process.argv[2], { valueEncoding: 'json' }),
  file = require(process.argv[3]),
  ops, o;

ops = file.map(function (row) {
  if (row.type == 'user') {
    o = row.name;
  } else if (row.type == 'repo') {
    o = row.user + '!' + row.name;
  }
  return { type: 'put', key: o, value: row };
});

db.batch(ops);