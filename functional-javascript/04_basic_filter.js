#!/bin/env node

function getShortMessages(messages) {
  return messages
    .map(function double (message) {
      return message.message;
    })
    .filter(function double (message) {
      return message.length < 50;
  });
}

module.exports = getShortMessages;