#!/bin/env node
'use strict';

var crypto = require('crypto'),
  through = require('through'),
  tar = require('tar'),
  zlib = require('zlib'),
  cipher = process.argv[2],
  passphrase = process.argv[3],
  parser = tar.Parse(),
  gunzip = zlib.createGunzip(),
  decipher = crypto.createDecipher(cipher, passphrase),
  hexhasher;

parser.on('entry', function (e) {
  if (e.type !== 'File') return;

  hexhasher = crypto.createHash('md5', { encoding: 'hex' });
  e.pipe(hexhasher).pipe(through(null, function end () {
    this.queue(' ' + e.path + '\n')
  })).pipe(process.stdout);

});

process.stdin
  .pipe(decipher)
  .pipe(gunzip)
  .pipe(parser)
;