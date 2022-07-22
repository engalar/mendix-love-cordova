var express = require('express');
var app = express();


app.get('/', function (req, res) {
  console.log(req.headers);
  res.setHeader('Content-Security-Policy', 'default-src *;')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.sendfile(__dirname + "/public/index.html");
});

app.listen(8080, '0.0.0.0');