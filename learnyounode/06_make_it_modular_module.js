var fs = require('fs');
var path = require('path');

module.exports = function filter_ls (directory, extension, callback) {
  var filtered_files = [];
  fs.readdir(directory, function(err, files) {
    if (err) return callback(err);

    filtered_files = files.filter(function(file) {
      return path.extname(file) === ['.', extension].join('');
    });

    callback(null, filtered_files)
  });
};
