var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyparser = require('body-parser');
// passsport dependencies
const passport = require('passport');
const session = require('express-session');

const localStrategy = require('passport-local').Strategy;

require('dotenv').config({path:'variables.env'});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

 
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Body parser usable properties
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(session({
  secret: 'String',
  resave: true,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

const user = require('./models/User');
passport.use(user.createStrategy());

// read/write user login info  
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());
 
app.use('/', indexRouter);
app.use('/users', usersRouter);

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
