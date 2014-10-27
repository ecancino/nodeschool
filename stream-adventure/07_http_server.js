#!/bin/env node
'use strict';

var http = require('http'),
    through = require('through'),
    port = +process.argv[2] || 8000;

function write (buf) {
  this.queue(buf.toString().toUpperCase());
}

function handle (req, res) {
  if (req.method === 'POST') {
    req.pipe(through(write)).pipe(res);
  }
}

var server = http.createServer();
server.on('request', handle);
server.listen(port);



