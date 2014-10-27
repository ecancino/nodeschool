#!/bin/env node
'use strict';

var spawn = require('child_process').spawn,
  duplex = require('duplexer');

module.exports = function (cmd, args) {
  // spawn the process and return a single stream
  var command = spawn(cmd, args);
  // joining together the stdin and stdout here
  return duplex(command.stdin, command.stdout);
};