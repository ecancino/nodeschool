#!/bin/env node

var fs = require('fs')

fs.readFile(process.argv[2], function(err, dat) {
    if (err) throw err;
    console.log(dat.toString().split('\n').length - 1);
});
