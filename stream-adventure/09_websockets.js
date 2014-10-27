#!/bin/env node
'use strict';

var ws = require('websocket-stream'),
  stream = ws('ws://localhost:8000');

//stream.write('hello\n');
stream.end('hello\n');