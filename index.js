var path = require('path');
var express = require('express')
var app = express();
var proxy = require('redbird')({port: 8001});

var staticPath = path.join(__dirname, '/public');
app.use(express.static(staticPath));

app.listen(3000, function() {
  console.log('HTTP server started');
});


proxy.register("localhost:8001", "localhost:3000");
proxy.register("localhost:8001/api/", "localhost:8080/api");

 console.log('Web Server running on port 8001. e.g localhost:8001/index.html');