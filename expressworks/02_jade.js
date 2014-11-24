#!/bin/env node

var express = require('express'),
  app = express(),
  port = process.argv[2] || 3000,
  views = process.argv[3] || '.';

app.set('view engine', 'jade');
app.set('views', views);

app.get('/home', function(req, res) {
  res.render('index', { date: new Date().toDateString() });
});

app.listen(port);