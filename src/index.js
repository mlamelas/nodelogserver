'use strict';

var Logger = require('bunyan'),
    restify = require('restify'),
    server = restify.createServer({
        name: 'app-name',
        version: '0.1.0',
    });



var winston = require('winston');
var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.File)({
       filename: '/log/log.log' ,
      formatter: function(options) {
        return (options.message);
      }
    })
  ]
});


server.use(restify.bodyParser());
server.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});




server.post('/', function (request, response, next) {
    response.send('It worked!');
   console.log(request.body);
   logger.info(request.body);
    next();
});

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});
