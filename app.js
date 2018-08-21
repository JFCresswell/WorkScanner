var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var http = require('http');
var fs = require("fs");

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var authenticationRouter = require('./routes/authenticationRoutes')();

app.use('/api/authentication', authenticationRouter); 

app.get('/', function (req, res) {
    fs.readFile("index.html", function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;