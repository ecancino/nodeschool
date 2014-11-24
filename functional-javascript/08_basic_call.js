#!/bin/env node

function duckCount() {
  return Array.prototype.slice.call(arguments).filter(function (o) {
    return Object.prototype.hasOwnProperty.call(o, 'quack');
  }).length;
}

module.exports = duckCount;
