
console.log(__filename)
console.log(__dirname)

var url = 'http://mylogger.io/log'

function log(message) {
  //send HTTP request
  console.log(message)
}

module.exports = log

module.exports.log = log;

exports.log = log
