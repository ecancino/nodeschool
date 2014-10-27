#!/bin/env node
'use strict';

var combine = require('stream-combiner'),
  through = require('through'),
  split = require('split'),
  gzip = require('zlib').createGzip();

module.exports = function () {
  var current;
  return combine(
    // read newline-separated json,
    split(),
    // group books into genres,
    through(function write(line) {
      if (line.length) {
        var row = JSON.parse(line);
        if (row.type === 'genre') {
          if (current) {
            this.queue(JSON.stringify(current) + "\n");
          }
          current = { 'name': row.name, 'books': [] };
        }
        else if (row.type === 'book') {
          current.books.push(row.name);
        }
      }
    }, function end () {
      if (current) {
        this.queue(JSON.stringify(current) + '\n');
      }
      this.queue(null);
    }),
    // then gzip the output
    gzip
  )
}


