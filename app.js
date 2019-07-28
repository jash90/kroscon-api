var createError = require('http-errors');
var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const index = require('./routes/home');
const { BoardGame, Auth, BoardGameTypeGame, LoanGame } = require('./routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// //boardGame
app.use('/boardGames', BoardGame.getAll);
app.use('/boardGame', BoardGame.get);
app.use('/boardGame/remove', BoardGame.remove);
app.use('/boardGame/add', BoardGame.add);
app.use('/boardGame/edit', BoardGame.edit);
app.use('/allBoardGames', BoardGame.getAllOffset);
app.use('/allAvailableBoardGames', BoardGame.getAllAvailable);

//boardGameTypeGame
app.use('/boardGameTypeGames', BoardGameTypeGame.getAll);

//loanGame
app.use('/loanGame/add', LoanGame.add);
app.use('/loanGame/edit', LoanGame.edit);


// //auth
app.use('/login', Auth.login);
app.use('/register', Auth.register);

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
  res.render('error');
});

module.exports = app;
