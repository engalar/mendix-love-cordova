var express = require('express');
var app = express();
var fs = require('fs');
var https = require('https');
var privateKey = fs.readFileSync(__dirname + '/ssl/server.key', 'utf8');
var certificate = fs.readFileSync(__dirname + '/ssl/server.crt', 'utf8');

var credentials = { key: privateKey, cert: certificate };

app.get('/', function (req, res) {
  console.log(req.headers);
  res.setHeader('Content-Security-Policy', 'default-src *;')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.sendfile(__dirname + "/public/index.html");
});

app.get('/vconsole.min.js', function (req, res) {
  console.log(req.headers);
  res.setHeader('Content-Security-Policy', 'default-src *;')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.sendfile(__dirname + "/public/vconsole.min.js");
});

app.listen(8080, '0.0.0.0');

var httpsServer = https.createServer(credentials, app);
httpsServer.listen(443, '0.0.0.0');