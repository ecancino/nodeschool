#!/bin/env node

var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function(err, files) {
  if (err) throw err;
  files.forEach(function(e, i) {
    if (path.extname(e) === ['.', process.argv[3]].join('')) {
      console.log(path.basename(e));
    }
  });
});
