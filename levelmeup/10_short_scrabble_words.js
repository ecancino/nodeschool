module.exports.init = function (db, words, callback) {
  var ops, key;
  ops = words.map(function (word) {
    key = word.length + '!' + word;
    return { type: 'put', key: key, value: word };
  })
  db.batch(batch, callback);
}

module.exports.query = function (db, word, callback) {
  var words = [],
      search = word.length + '!' + word.replace(/\*/g, '');

  db.createReadStream({ start: search, end: search + '\xff' })
    .on('data', function (data) {
      words.push(data.value)
    })
    .on('error', function (err) {
      callback(err, []);
    })
    .on('end', function () {
      callback(null, words);
    });
}