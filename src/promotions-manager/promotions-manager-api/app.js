var express = require('express');
var path = require('path');
var logger = require('morgan');
var morganBody = require('morgan-body');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');

var debug = false;

var app = express();

// init services
var services = require('./services');
services.init(app);
app.services = services;

// init controllers
var controllers = require('./controllers');
controllers.init(app.services);

// init routers
//var routes = require('./routes/index');
//var users = require('./routes/users');
var authRouter = require('./routes/authRouter')();
var promotionsRouter = require('./routes/promotionsRouter')();
var publicInfoRouter = require('./routes/publicInfo')();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: "blabla20" }));
require('./config/passport.js')(app);
morganBody(app);

let routeBase = '/api/'
app.use(routeBase + "auth", authRouter);
app.use(routeBase + "promotion", promotionsRouter);
app.use(routeBase + "public", publicInfoRouter);
//if (debug) { app.use("/client_example", express.static("./client_example.html")); }

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);        
        res.status(500).json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.status(500).json({
        message: err.message,
        error: {}
    });
});


module.exports = app;
