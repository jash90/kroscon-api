var express = require("express");
var router = express.Router();
const { User } = require("../../models");
const authorization = function(req, res, next) {
  if (!req.headers.authorization) {
    res.json({ status: "Not Autorization", code: 401 });
  }
  User.findOne({
    where: { token: req.headers.authorization }
  })
    .then(item => {
      if (item.privilegeId > 1 && item.id === res.body.hireUserId) {
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
