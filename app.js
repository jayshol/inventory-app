var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var inventory = require('./inventory');

var app = express();
var expHbs = require('express-handlebars')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', expHbs({extname:'hbs', defaultLayout:'main.hbs'}))
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/* app.route('/')
    .get(inventory.list)
    .post(inventory.create);
*/

app.use(function(req, res, next){
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === 1;
    next();
});

app.get('/', function(req, res, next){
    var obj = inventory.list(req.params.id);    
    res.render('index', obj);
});

app.post('/', function(req, res, next){
    var name = req.body.name;
    var description = req.body.description;
    var obj = inventory.create(name, description);  
    res.redirect(302, '/');
});

app.get('/add', inventory.add);

app.route('/:id')
    .get(inventory.show)
    .post(inventory.update)
    .delete(inventory.delete);

app.route('/:id/edit')
        .get(inventory.edit);   

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
