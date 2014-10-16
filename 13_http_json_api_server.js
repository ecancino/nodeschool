#!/bin/env node

var http = require('http');
var url = require('url');

var port = +(process.argv[2] || 8000);

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  var req_type = url.parse(req.url, true);

  if (req_type.query.iso) {
    var iso = {};
    var time = new Date(req_type.query.iso);

    switch (req_type.pathname) {
      case '/api/parsetime':
        iso = parsetime(time);
        break;
      case '/api/unixtime':
        iso = unixtime(time);
        break;
      default:
        iso = { error: 'INVALID REQUEST' };
    };
    res.write(JSON.stringify(iso));
  }
  res.end();
});

server.listen(port);
