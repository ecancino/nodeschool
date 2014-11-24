#!/bin/env node

var express = require('express'),
    bodyparser = require('body-parser'),
    app = express(),
    port = process.argv[2];

app.use(bodyparser.urlencoded({ extended: false }));

app.post('/form', function(req, res) {
  res.send(req.body.str.split('').reverse().join(''));
});

app.listen(port);