#!/bin/env node

var net = require('net');
var time = require('strftime');

var port = +(process.argv[2] || 8000);

var server = net.createServer(function (socket) {
  socket.end(time('%F %H:%M'));
})

server.listen(+port);
