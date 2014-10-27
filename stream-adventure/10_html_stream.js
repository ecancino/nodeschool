#!/bin/env node
'use strict';

var tr = require('trumpet')(),
  through = require('through');

tr.pipe(process.stdout);

/*
tr.selectAll('.loud', function(loud) {
  var stream = loud.createStream();
  stream.pipe(through(function (buf) {
    this.queue(buf.toString().toUpperCase());
  })).pipe(stream);
});
*/

var loud = tr.select('.loud').createStream();
loud.pipe(through(function(buf) {
  this.queue(buf.toString().toUpperCase());
})).pipe(loud);

process.stdin.pipe(tr);
