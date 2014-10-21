#!/bin/env node

var http = require('http');
var map = require('through2-map');

var port = +(process.argv[2] || 8000);

/*
// WITHOUT MAP
var server = http.createServer(function (req, res) {
  if (req.method != 'POST')
    return res.end('send me a POST\n')

  var body = '';

  req.on('data', function (data) {
    body += data.toString().toUpperCase();
  });

  req.on('end', function () {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(body);
  });
});
server.listen(port);
//*/

///*
// WITH MAP
var server = http.createServer(function (req, res) {
  if (req.method != 'POST')
    return res.end('send me a POST\n')

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res)
});
server.listen(port);
//*/