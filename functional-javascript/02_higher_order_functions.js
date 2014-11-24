#!/bin/env node

function repeat(operation, num) {
  if (+num) {
    operation();
    repeat(operation, --num);
  }
}

module.exports = repeat;
