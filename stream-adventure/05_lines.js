#!/bin/env node
'use strict';

var through = require('through'),
    split = require('split'),
    i = 1;

process.stdin
  .pipe(split())
  .pipe(through(function (line) {
    var l = line.toString();
    l = +(i & 1) ? l.toLowerCase() : l.toUpperCase();
    console.log(l);
    i += 1;
  }))
;
