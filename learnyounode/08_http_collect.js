#!/bin/env node

var http = require('http');
var bl = require('bl');

var url = process.argv[2];

/*
// WITHOUT BL NOR CONCAT
http.get(url, function getResponse (response) {
  var stream = '';
  response.setEncoding('utf8');
  response.on('data', function getChunk (chunk) {
    stream += chunk;
  });
  response.on('end', function logStream () {
    console.log(stream.length);
    console.log(stream);
  });
});
//*/

///*
// WITH BL
http.get(url, function getResponse (response) {
  response.pipe(bl(function (err, data) {
    if (err) { return console.error(err); }
    console.log(data.length);
    console.log(data.toString());
  })).on('error', console.error);
});
//*/
