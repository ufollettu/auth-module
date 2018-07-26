require('./config/config'); //instantiate configuration variables

console.log("Environment:", CONFIG.app);

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const models = require('./models');

const indexRouter = require('./routes/index.route');
const utentiRouter = require('./routes/utenti.route');
const permessiRouter = require('./routes/permessi.route');
const utentiPermessiRouter = require('./routes/utenti-permessi.route');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Sequelize
models.sequelize.authenticate().then(() => {
  console.log('Connected to SQL database', CONFIG.db_name);
})
.catch(err => {
  console.error('Unable to connect to SQL database:', CONFIG.db_name, err);
});
if(CONFIG.app==='dev'){
  models.sequelize.sync()//creates table if they do not already exist
  // models.sequelize.sync({ force: true });//deletes all tables then recreates them useful for testing and development purposes
  .then()
  .catch(err => console.assert(err));
}



app.use('/api/', indexRouter);

app.use('/api/utenti', utentiRouter);
app.use('/api/permessi', permessiRouter);
app.use('/api/utenti-permessi', utentiPermessiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
