#!/bin/env node

var express = require('express'),
    app = express(),
    port = process.argv[2] || 3000;

app.get('/home', function(req, res) {
  res.end('Hello World!');
});

app.listen(port);