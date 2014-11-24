#!/bin/env node

var express = require('express'),
    path = require('path'),
    app = express(),
    port = process.argv[2] || 3000,
    file = process.argv[3];

app.use(express.static(file || path.join(__dirname, 'public')));

app.listen(port);