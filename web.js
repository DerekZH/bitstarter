var express = require('express');

var app = express.createServer(express.logger());

var index_html = fs.readFileSync('index.html','utf8');
var buffer = new buffer(60);

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
