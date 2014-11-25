module.exports = function (db, date, callback) {
  var entries = [];
  db.createReadStream({ start: date, end: date + '\xff' })
    .on('data', function (data) {
      entries.push(data.value);
    })
    .on('error', function (err) {
      callback(err, []);
    })
    .on('end', function () {
      callback(null, entries);
    });
};
