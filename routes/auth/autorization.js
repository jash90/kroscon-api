var express = require("express");
var router = express.Router();
const { User } = require("../../models");
const autorization = function(req, res, next) {
  User.findOne({
    token: req.headers.authorization
  })
    .then(item => {
      if (item) {
        next();
      } else {
        res.json("Not Autorization");
      }
    })
    .catch(error => {
      res.json({ error });
    });
};

module.exports = autorization;