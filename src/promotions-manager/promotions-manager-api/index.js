var debug = require('debug')('promotions-manager-api');
var app = require('./app');

var http = require('http');

app.set('api_port', process.env.API_PORT || 3001);

var httpServer = http.createServer(app);

httpServer.listen(app.get('api_port'));