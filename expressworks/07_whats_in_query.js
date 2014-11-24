#!/bin/env node

var express = require('express'),
  app = express(),
  port = process.argv[2] || 3000;

app.get('/search', function(req, res){
  var query = req.query;
  res.send(query);
});

app.listen(port);
