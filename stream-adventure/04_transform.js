#!/bin/env node
'use strict';

var through = require('through'),
  tr = through(function write (buf) {
    this.queue(buf.toString().toUpperCase())
  }, function end () {
    this.queue(null)
  });

process.stdin.pipe(tr).pipe(process.stdout);
