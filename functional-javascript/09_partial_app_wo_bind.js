var slice = Array.prototype.slice

/*
function logger(namespace) {
  return function() {
    var messages = slice.call(arguments);
    messages.unshift(namespace);
    console.log.apply(this, messages);
  }
}
*/

function logger(namespace) {
  return function() {
    console.log.apply(console, [namespace].concat(slice.call(arguments)))
  }
}

module.exports = logger
