var express = require("express");
var router = express.Router();
const { User } = require("../../models");
const authorization = function(req, res, next) {
  if (!req.headers.authorization) {
    res.json({ status: "Not Autorization", code: 401 });
  }
  User.findOne({
    token: req.headers.authorization
  })
    .then(item => {
      if (item) {
        next();
      } else {
        res.json({ status: "Not Autorization", code: 401 });
      }
    })
    .catch(error => {
      res.json({ error });
    });
};

module.exports = authorization;
