module.exports = function (db, date, callback) {
  var entries = 0;
  db.createReadStream({ start: date })
    .on('data', function (data) {
      entries += 1;
    })
    .on('error', function (err) {
      callback(err, 0);
    })
    .on('end', function () {
      callback(null, entries);
    });
};
