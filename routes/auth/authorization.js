var express = require("express");
var router = express.Router();
const { User } = require("../../models");
const authorization = function(req, res, next) {
  const error = { status: "Not Autorization", code: 401 };
  if (!req.headers.authorization) {
    res.error({ error });
  }
  User.findOne({
    token: req.headers.authorization
  })
    .then(item => {
      if (item) {
        next();
      } else {
        res.error({ error });
      }
    })
    .catch(error => {
      res.error({ error });
    });
};

module.exports = authorization;
