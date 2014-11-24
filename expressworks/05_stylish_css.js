#!/bin/env node

var express = require('express'),
    stylus = require('stylus'),
    app = express(),
    port = process.argv[2] || 3000,
    path = process.argv[3];

app.use(stylus.middleware(path));
app.use(express.static(path));

app.listen(port);