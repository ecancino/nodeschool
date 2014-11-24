#!/bin/env node

function Spy(target, method) {
  var original = target[method],
      spy = { count: 0 };

  target[method] = function () {
    spy.count++;
    return original.apply(this, arguments);
  };

  return spy;
}

module.exports = Spy;