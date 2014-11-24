#!/bin/env node

var express = require('express'),
  crypto = require('crypto'),
  app = express(),
  port = process.argv[2] || 3000;

app.put('/message/:id', function(req, res){
  var id = req.params.id;
    fecha = new Date().toDateString(),
    hash = crypto
      .createHash('sha1')
      .update(fecha + id)
      .digest('hex');
  res.send(hash);
});

app.listen(port);
