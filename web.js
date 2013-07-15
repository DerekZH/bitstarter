var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var file_name = "index.html";

var index_html = fs.readFileSync(file_name,'utf8');

app.get('/', function(request, response) {
  response.send(index_html.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
