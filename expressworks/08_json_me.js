#!/bin/env node

var express = require('express'),
  fs = require('fs'),
  app = express(),
  port = process.argv[2] || 3000,
  file = process.argv[3] || 'public/index.html';

app.get('/books', function(req, res){
  var books;
  fs.readFile(file, function (err, data) {
    if (err) return res.send(500);
    try {
      books = JSON.parse(data);
    } catch (e) {
      return res.send(500);
    }
    res.json(books);
  });
});

app.listen(port);
