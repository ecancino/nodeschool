#!/bin/env node

var filter_ls = require('./06_make_it_modular_module');
var directory = process.argv[2];
var extension = process.argv[3];

filter_ls(directory, extension, function(err, files) {
  if (err) return console.error(err);
  files.forEach(function(file) {
    console.log(file);
  });
});