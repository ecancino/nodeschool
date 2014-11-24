#!/bin/env node

function checkUsersValid(goodUsers) {
  return function (submittedUsers) {
    return submittedUsers.every(function(s) {
      return goodUsers.some(function(g) {
        return g.id === s.id;
      })
    });
  };
}

module.exports = checkUsersValid;
