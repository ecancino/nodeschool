#!/bin/env node

var level = require('level'),
  fs = require('fs'),
  db = level(process.argv[2]);

db.createReadStream().on('data', function (data) {
  console.log('%s=%s', data.key, data.value);
});