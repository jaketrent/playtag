var express = require('express')
var gzippo = require('gzippo')
var path = require('path')

var app = express()

app.set('port', process.env.PORT || 3000)
app.use(gzippo.staticGzip(path.join(__dirname, 'app')))

app.listen(app.get('port'), function () {
  console.log('Play tag on port ' + app.get('port') + ' (' + process.env.NODE_ENV + ')')
})