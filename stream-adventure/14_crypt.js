#!/bin/env node
'use strict';

var crypto = require('crypto'),
  through = require('through'),
  passphrase = process.argv[2],
  stream;

if (passphrase.length) {
  stream = crypto.createDecipher('aes256', passphrase);
  process.stdin.pipe(stream).pipe(process.stdout);
}