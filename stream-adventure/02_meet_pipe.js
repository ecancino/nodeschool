#!/bin/env node
'use strict';

var fs = require('fs');
fs.createReadStream(process.argv[2]).pipe(process.stdout);