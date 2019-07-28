var createError = require('http-errors');
var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const index = require('./routes/home');
const { Auth, BoardGame, BoardGameMechanicsGame, BoardGameTypeGame, LoanGame, MechanicsGame, Publisher, TypeGame, User } = require('./routes');

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

//auth
app.use('/login', Auth.login);
app.use('/register', Auth.register);
app.use('/changePassword',Auth.changePassword);

//boardGame
app.use('/boardGames', BoardGame.getAll);
app.use('/boardGame', BoardGame.get);
app.use('/boardGame/remove', BoardGame.remove);
app.use('/boardGame/add', BoardGame.add);
app.use('/boardGame/edit', BoardGame.edit);
app.use('/allBoardGames', BoardGame.getAllOffset);
app.use('/allAvailableBoardGames', BoardGame.getAllAvailable);

//boardGameMechanicsGame
app.use('/boardGameMechanicsGames', BoardGameMechanicsGame.getAll);
app.use('/boardGameMechanicsGame', BoardGameMechanicsGame.get);
app.use('/boardGameMechanicsGame/remove', BoardGame.remove);
app.use('/boardGameMechanicsGame/add', BoardGame.add);
app.use('/boardGameMechanicsGame/edit', BoardGame.edit);
app.use('/allBoardGameMechanicsGames', BoardGame.getAllOffset);

//boardGameTypeGame
app.use('/boardGameTypeGames', BoardGameTypeGame.getAll);
app.use('/boardGameTypeGame', BoardGameTypeGame.get);
app.use('/boardGameTypeGame/remove', BoardGameTypeGame.remove);
app.use('/boardGameTypeGame/add', BoardGameTypeGame.add);
app.use('/boardGameTypeGame/edit', BoardGameTypeGame.edit);
app.use('/allBoardGameTypeGames', BoardGameTypeGame.getAllOffset);

//loanGame
app.use('/loanGames', LoanGame.getAll);
app.use('/loanGame/edit', LoanGame.edit);
app.use('/loanGame/add', LoanGame.add);
app.use('/loanGame/remove', LoanGame.remove);
app.use('/allLoanGame', LoanGame.getAllOffset);
app.use('/loanGame', LoanGame.get);

//mechanicsGame
app.use('/mechanicsGames', MechanicsGame.getAll);
app.use('/mechanicsGame/edit', MechanicsGame.edit);
app.use('/mechanicsGame/add', MechanicsGame.add);
app.use('/mechanicsGames/remove', MechanicsGame.remove);
app.use('/allmechanicsGames', MechanicsGame.getAllOffset);
app.use('/mechanicsGame', MechanicsGame.get);

//publisher
app.use('/publishers', Publisher.getAll);
app.use('/publisher/edit', Publisher.edit);
app.use('/publisher/add', Publisher.add);
app.use('/publisher/remove', Publisher.remove);
app.use('/allPublisher', Publisher.getAllOffset);
app.use('/publisher', Publisher.get);

//typeGame
app.use('/typeGames', TypeGame.getAll);
app.use('/typeGame/edit', TypeGame.edit);
app.use('/typeGame/add', TypeGame.add);
app.use('/typeGame/remove', TypeGame.remove);
app.use('/allTypeGames', TypeGame.getAllOffset);
app.use('/typeGame', TypeGame.get);

//user
app.use('/users', User.getAll);
app.use('/user/edit', User.edit);
app.use('/user/remove', User.remove);
app.use('/allUser', User.getAllOffset);
app.use('/user', User.get);

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
