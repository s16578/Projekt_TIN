var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
var app = express();
var db = require('./config/dbconfig');
var authUtils = require('./util/authUtil');

app.use(session({
  secret: 'my_secret_password',
  resave: false
}));

app.use((req, res, next) => {
  const loggedUser = req.session.loggedUser;
  res.locals.loggedUser = loggedUser;
  if (!res.locals.loginError) {
    res.locals.loginError = undefined;
  }
  next();
});


var indexRouter = require('./routes/index');
var employeeRouter = require('./routes/employeeRoute');
var computerRouter = require('./routes/computerRoute');
var repairRouter = require('./routes/repairRoute');
var loginRouter = require('./routes/loginRoute');
var registerRouter = require('./routes/registerRoute');

var empApiRouter = require('./routes/api/EmployeeApiRoute');
var repairApiRouter = require('./routes/api/RepairApiRoute');
var computerApiRouter = require('./routes/api/ComputerApiRoute');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/employees', authUtils.permitAuthenticatedUser, employeeRouter);
app.use('/computers', authUtils.permitAuthenticatedUser, computerRouter);
app.use('/repairs', authUtils.permitAuthenticatedUser, repairRouter);
app.use('/auth', loginRouter);
app.use('/register', registerRouter);

app.use('/api/employees', empApiRouter);
app.use('/api/repairs', repairApiRouter);
app.use('/api/computers', computerApiRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { error: err.message });
});



module.exports = app;
