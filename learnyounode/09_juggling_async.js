#!/bin/env node

var http = require('http');

var urls = process.argv.slice(2);
var responses = [];
var count = 0;

var getStream = function getStream (url, idx, end) {
  http.get(url, function getResponse (response) {
    var stream = '';
    response.setEncoding('utf8');
    response.on('error', console.error);

    response.on('data', function onData (data) {
      stream += data;
    });

    response.on('end', function onEnd () {
      end(idx, stream);
    });
  });
};

var checkIfAllEnded = function (idx, stream) {
  responses[idx] = stream;
  count += 1;
  if (count == 3) {
    responses.forEach(function forEachReponse (e) {
      console.log(e);
    });
  }
}

for (var g = 0; g < 3; g++)
  getStream(urls[g], g, checkIfAllEnded);
