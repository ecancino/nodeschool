#!/bin/env node

function doubleAll(numbers) {
  return numbers.map(function double (number) {
    return number * 2;
  });
}

module.exports = doubleAll;