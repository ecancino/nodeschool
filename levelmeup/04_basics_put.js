#!/bin/env node

var level = require('level'),
  db = level(process.argv[2]),
  doc = JSON.parse(process.argv[3]);

  Object.keys(doc).forEach(function(p) {
    db.put(p, d[p], '', function(err) {
      if (err) return console.error(err);
      console.log('put %s = %s', p, d[p]);
    });
  });

