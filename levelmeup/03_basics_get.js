#!/bin/env node

var level = require('level'),
  db = level(process.argv[2]);

function fetchNext(i) {
  var key = 'key' + i;
  db.get(key, function (err, data) {
    if (err) {
      if (!err.notFound) {
        return console.error(err);
      }
    } else {
      console.log(key + '=' + data);
    }

    if (i < 100) { fetchNext(i + 1); }
  });
}

fetchNext(0);