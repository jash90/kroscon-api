var createError = require('http-errors');
var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const index = require('./routes/home');
const { Auth, BoardGame, BoardGameMechanic, BoardGameType, LoanGame, Mechanic, Publisher, Type, User } = require('./routes');

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
app.use('/changePrivilege',Auth.changePrivilege);

//user
app.use('/users', User.all);
app.use('/user/edit', User.edit);
app.use('/user/remove', User.remove);
app.use('/user/offset', User.offset);
app.use('/user/search', User.search);
app.use('/user', User.get);

//boardGame
app.use('/boardGames', BoardGame.all);
app.use('/boardGame', BoardGame.get);
app.use('/boardGame/remove', BoardGame.remove);
app.use('/boardGame/add', BoardGame.add);
app.use('/boardGame/edit', BoardGame.edit);
app.use('/boardGame/offset', BoardGame.offset);
app.use('/boardGame/available', BoardGame.available);
app.use('/boardGame/search', BoardGame.search);
app.use('/boardGame/search/uuid', BoardGame.searchByUUID);

//boardGameMechanic
app.use('/boardGameMechanics', BoardGameMechanic.all);
app.use('/boardGameMechanic', BoardGameMechanic.get);
app.use('/boardGameMechanic/remove', BoardGame.remove);
app.use('/boardGameMechanic/add', BoardGame.add);
app.use('/boardGameMechanic/edit', BoardGame.edit);
app.use('/boardGameMechanic/offset', BoardGame.offset);

//boardGameType
app.use('/boardGameTypes', BoardGameType.all);
app.use('/boardGameType', BoardGameType.get);
app.use('/boardGameType/remove', BoardGameType.remove);
app.use('/boardGameType/add', BoardGameType.add);
app.use('/boardGameType/edit', BoardGameType.edit);
app.use('/boardGameType/offset', BoardGameType.offset);

//loanGame
app.use('/loanGames', LoanGame.all);
app.use('/loanGame/edit', LoanGame.edit);
app.use('/loanGame/add', LoanGame.add);
app.use('/loanGame/remove', LoanGame.remove);
app.use('/loanGame/offset', LoanGame.offset);
app.use('/loanGame', LoanGame.get);

//mechanic
app.use('/mechanics', Mechanic.all);
app.use('/mechanic/edit', Mechanic.edit);
app.use('/mechanic/add', Mechanic.add);
app.use('/mechanic/remove', Mechanic.remove);
app.use('/mechanic/offset', Mechanic.offset);
app.use('/mechanic', Mechanic.get);

//publisher
app.use('/publishers', Publisher.all);
app.use('/publisher/edit', Publisher.edit);
app.use('/publisher/add', Publisher.add);
app.use('/publisher/remove', Publisher.remove);
app.use('/publisher/offset', Publisher.offset);
app.use('/publisher', Publisher.get);

//type
app.use('/types', Type.all);
app.use('/type/edit', Type.edit);
app.use('/type/add', Type.add);
app.use('/type/remove', Type.remove);
app.use('/type/offset', Type.offset);
app.use('/type', Type.get);

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
