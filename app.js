var createError = require("http-errors");
var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const index = require("./routes/home");
const {
  Auth,
  BoardGame,
  BoardGameMechanic,
  BoardGameType,
  LoanGame,
  Mechanic,
  Publisher,
  Type,
  User,
  Event,
  Feedback,
  Lecture,
  Reservation,
  Table
} = require("./routes");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);

//auth
app.use("/login", Auth.login);
app.use("/register", Auth.register);
app.use("/changePassword", Auth.changePassword);
app.use("/changePrivilege", Auth.changePrivilege);
app.use("/logout", Auth.logout);

//user
app.use("/users", User.all);
app.use("/user/edit", User.edit);
app.use("/user/remove", User.remove);
app.use("/user/offset", User.offset);
app.use("/user/search", User.search);
app.use("/user", User.get);

//boardGame
app.use("/boardGames", BoardGame.all);
app.use("/boardGame", BoardGame.get);
app.use("/boardGame/remove", BoardGame.remove);
app.use("/boardGame/add", BoardGame.add);
app.use("/boardGame/edit", BoardGame.edit);
app.use("/boardGame/offset", BoardGame.offset);
app.use("/boardGame/available", BoardGame.available);
app.use("/boardGame/search", BoardGame.search);
app.use("/boardGame/search/uuid", BoardGame.searchByUUID);
app.use("/boardGame/file", BoardGame.uploadFile);

//boardGameMechanic
app.use("/boardGameMechanics", BoardGameMechanic.all);
app.use("/boardGameMechanic", BoardGameMechanic.get);
app.use("/boardGameMechanic/remove", BoardGame.remove);
app.use("/boardGameMechanic/add", BoardGame.add);
app.use("/boardGameMechanic/edit", BoardGame.edit);
app.use("/boardGameMechanic/offset", BoardGame.offset);

//boardGameType
app.use("/boardGameTypes", BoardGameType.all);
app.use("/boardGameType", BoardGameType.get);
app.use("/boardGameType/remove", BoardGameType.remove);
app.use("/boardGameType/add", BoardGameType.add);
app.use("/boardGameType/edit", BoardGameType.edit);
app.use("/boardGameType/offset", BoardGameType.offset);

//loanGame
app.use("/loanGames", LoanGame.all);
app.use("/loanGame/edit", LoanGame.edit);
app.use("/loanGame/add", LoanGame.add);
app.use("/loanGame/remove", LoanGame.remove);
app.use("/loanGame/offset", LoanGame.offset);
app.use("/loanGame", LoanGame.get);
app.use("/loanGame/user", LoanGame.byUser);

//mechanic
app.use("/mechanics", Mechanic.all);
app.use("/mechanic/edit", Mechanic.edit);
app.use("/mechanic/add", Mechanic.add);
app.use("/mechanic/remove", Mechanic.remove);
app.use("/mechanic/offset", Mechanic.offset);
app.use("/mechanic", Mechanic.get);

//publisher
app.use("/publishers", Publisher.all);
app.use("/publisher/edit", Publisher.edit);
app.use("/publisher/add", Publisher.add);
app.use("/publisher/remove", Publisher.remove);
app.use("/publisher/offset", Publisher.offset);
app.use("/publisher", Publisher.get);

//type
app.use("/types", Type.all);
app.use("/type/edit", Type.edit);
app.use("/type/add", Type.add);
app.use("/type/remove", Type.remove);
app.use("/type/offset", Type.offset);
app.use("/type", Type.get);

//table
app.use("/tables", Table.all);
app.use("/table/edit", Table.edit);
app.use("/table/add", Table.add);
app.use("/table/remove", Table.remove);
app.use("/table/offset", Table.offset);
app.use("/table", Table.get);

//event
app.use("/events", Event.all);
app.use("/event/edit", Event.edit);
app.use("/event/add", Event.add);
app.use("/event/remove", Event.remove);
app.use("/event/offset", Event.offset);
app.use("/event", Event.get);

//feedback
app.use("/feedbacks", Feedback.all);
app.use("/feedback/edit", Feedback.edit);
app.use("/feedback/add", Feedback.add);
app.use("/feedback/remove", Feedback.remove);
app.use("/feedback/offset", Feedback.offset);
app.use("/feedback", Feedback.get);

//lecture
app.use("/lectures", Lecture.all);
app.use("/lecture/edit", Lecture.edit);
app.use("/lecture/add", Lecture.add);
app.use("/lecture/remove", Lecture.remove);
app.use("/lecture/offset", Lecture.offset);
app.use("/lecture", Lecture.get);

//reservation
app.use("/reservations", Reservation.all);
app.use("/reservation/edit", Reservation.edit);
app.use("/reservation/add", Reservation.add);
app.use("/reservation/remove", Reservation.remove);
app.use("/reservation/offset", Reservation.offset);
app.use("/reservation", Reservation.get);

app.use(express.static('./image'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
