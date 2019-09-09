var express = require("express");
var router = express.Router();
const { User } = require("../../models");
const moment = require("moment");
const authorization = function(req, res, next) {
  const now = moment();
  const error = { status: "Not Autorization", code: 401 };
  if (!req.headers.authorization) {
    res.json({ error });
    return;
  }
  User.findOne({
    where: { token: req.headers.authorization }
  })
    .then(item => {
      if (
        item &&
        item.id === req.body.userId &&
        moment(item.tokenExpired).diff(now, "hours", true) > 1
      ) {
        next();
      } else {
        res.json({ error });
        return;
      }
    })
    .catch(e => {
      res.json({ error });
      return;
    });
};

module.exports = authorization;
