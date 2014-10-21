#!/bin/env node

var http = require('http');
var fs = require('fs');

var port = +(process.argv[2] || 8000),
    file = process.argv[3];

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })
  var rs = fs.createReadStream(file);

  rs.on('open', function onOpen () {
    rs.pipe(res);
  });

  rs.on('error', function onError (err) {
    res.end(err);
  });

});

server.listen(+port);
